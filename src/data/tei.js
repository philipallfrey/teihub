const latest = require('./latest');
const fs = require('fs');
const { parseAsync } = require('json2csv');

let faunadb = require('faunadb'),
q = faunadb.query;

let client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })

// Human-readable filesize function taken from https://github.com/hustcc/filesize.js/
function filesize(bytes, fixed) {
  bytes = Math.abs(bytes);

  const { radix, unit } = { radix: 1024, unit: ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'] };

  let loop = 0;

  // calculate
  while (bytes >= radix) {
    bytes /= radix;
    ++loop;
  }
  return `${bytes.toFixed(fixed)} ${unit[loop]}`;
}

async function updateDatabase(){
  //Get aggregate data from database
  let allAggregates = await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index("all_aggregates"))),
      q.Lambda("x", q.Get(q.Var("x")))
    )
  )
  .catch(err => {
    console.log(err);
    return;
  });

  //Put aggregate data into a Map, so it's easy to query by first letter
  const aggregates = new Map();
  allAggregates.data.forEach(item => {
    aggregates.set(item.data.key, item.data.values);
  });

  //Now put latest data into database, and update aggregates
  for(let repo of latest) {
    //Get first letter of repo name
    const aggregateKey = repo.name.slice(0,1);

    //We have aggregate data for this letter
    if(aggregates.has(aggregateKey)){
      let aggregateData = aggregates.get(aggregateKey);
      if( aggregateData[repo.name] !== undefined){
        //get full data from DB
        const {data: repoDataResults} = await client.query(
          q.Map(
            q.Paginate(q.Match(q.Index('repos_search_by_name'), repo.name)),
            q.Lambda("x", q.Get(q.Var("x")))
          )
        ).catch( err => {
          //Doesn't exist in DB
        });
        if(repoDataResults.length > 0){
          //merge lists of files
          const filesFromDB = repoDataResults[0].data.files;
          repo.files = [...new Set([...filesFromDB,...repo.files])];
          //merge lists of languages
          const langsFromDB = repoDataResults[0].data.langs || [];
          repo.langs = [...new Set([...langsFromDB,...repo.langs])];
          //save back to DB
          await client.query(
            q.Replace(repoDataResults[0].ref, {data: repo})
          ).catch(err => console.log(err));
        } else {
          await client.query(
            q.Create('repos', {data: repo})
          ).catch(err => console.log(err));
        }
        //update count for aggregate
        repo.count = repo.files.length;
        delete repo.files;
        aggregateData[repo.name] = repo;
        aggregates.set(aggregateKey, aggregateData);
      } else {
        //No existing aggregate data for this repo name
        //This also implies the current repo is not in the DB
        //Just set both of them
        await client.query(
          q.Create('repos', {data: repo})
        ).catch(err => console.log(err));

        repo.count = repo.files.length;
        delete repo.files;
        aggregateData[repo.name] = repo;
        aggregates.set(aggregateKey, aggregateData);
      }
    } else {
      //No existing aggregate data for this letter
      //This also implies the current repo is not in the DB
      //Set them both
      await client.query(
        q.Create('repos', {data: repo})
      );

      repo.count = repo.files.length;
      delete repo.files;
      let aggregateData = {};
      aggregateData[repo.name] = repo;
      aggregates.set(aggregateKey, aggregateData);
    }
  }

  //Now put aggregates back into database
  let aggregatesArray = [];
  aggregates.forEach( async (values, key) => {
    aggregatesArray = [...aggregatesArray, ...Object.values(values)];
    aggregatesArray.push(...Array.from(values));
    const result = await client.query(
      q.Paginate(q.Match(q.Index('aggregates_search_by_key'), key))
    ).catch(async (err) => {
      console.log(err);
    });
    if(result !== undefined && result.data.length > 0){
      //Aggregate exists, replace old version
      await client.query(
        q.Replace(result.data[0], {data: {key:key, values:values}})
      ).catch(err => console.log(err))
    } else {
      //Aggregate doesn't exist, create it
      await client.query(
        q.Create( 'aggregates', {data: {key: key, values: values}})
      ).catch(err => console.log(err))
    }
  });

  return aggregatesArray;
}

module.exports = async function() {
  const repos = await updateDatabase();
  const repoCount = repos.length;
  const docCount = repos.reduce( (sum, current) => {
    return sum + current.count;
  }, 0);

  const langs = repos.reduce( (allLangs, current) => {
    current.langs = current.langs || [];
    current.langs.forEach(lang => {
      if(!allLangs.has(lang)){
        allLangs.set(lang, 1)
      } else {
        let count = allLangs.get(lang);
        count++;
        allLangs.set(lang, count);
      }
    })
    return allLangs;
  }, new Map());

  const langObjects = [...langs.entries()]
    .map(x => {
      return {code: x[0], count: x[1]};
    })

  const langCounts = [...langObjects]
    .sort((a, b) => b.count - a.count);

  const langCodes = [...langObjects]
    .sort((a, b) => a.code.localeCompare(b.code));

  const languageCount = langs.size;

  const description = [...repos].sort((a, b) => {
    //Sort empty descriptions to end
    if(a.desc === '-') return 1;
    if(b.desc === '-') return -1;
    //Otherwise do case/diacritic insensitive sort
    return a.desc.localeCompare(b.desc);
  });
  const language = [...repos].sort((a, b) => {
    //Sort empty languages to end
    if(a.langs.length === 0) return 1;
    if(b.langs.length === 0) return -1;
    //Otherwise do case/diacritic insensitive sort
    return a.langs.join().localeCompare(b.langs.join());
  });
  const lastIndexed = [...repos].sort((a, b) => b.date - a.date);
  const matches = [...repos].sort((a, b) => b.count - a.count);
  const repository = [...repos].sort((a, b) => a.name.localeCompare(b.name));

  //Write full dataset to JSON file, to allow people to download
  const repoString = JSON.stringify(repos);
  const distPath = __dirname + '/../../dist';
  if(!fs.existsSync(distPath)) fs.mkdirSync(distPath);
  fs.writeFileSync(distPath + '/teihub.json', repoString);

  //Also write full dataset to CSV file
  const fields = ['date', 'name', 'url', 'desc', 'langs', 'count'];
  const opts = { fields };

  const reposWithLangString = [];
  for(let current of repos){
    const newEntry = Object.assign( {}, current);
    newEntry.langs = (current.langs) ? current.langs.join('|') : '';
    reposWithLangString.push(newEntry);
  };

  const csv = await parseAsync(reposWithLangString, opts)
    .catch(err => console.error(err));
  fs.writeFileSync(distPath + '/teihub.csv', csv);


  return {
    csvSize: filesize(csv.length, 0),
    dataSize: filesize(repoString.length, 0),
    date: lastIndexed[0].date,
    description: description,
    docCount: docCount,
    langCodes: langCodes,
    langCounts: langCounts,
    languageCount: languageCount,
    language: language,
    lastIndexed: lastIndexed,
    matches: matches,
    repoCount: repoCount,
    repository: repository
  };
};
