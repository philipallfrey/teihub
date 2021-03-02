const fs = require('fs');
const { parseAsync } = require('json2csv');

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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function run() {
  //Get aggregate data from database
  const extension = '.json';
  const dataDir = __dirname + '/data/';
  const aggregatesDir = dataDir + 'aggregates/';
  if(!fs.existsSync(aggregatesDir)) fs.mkdirSync(aggregatesDir, {recursive: true});
  const allAggregates = fs.readdirSync(aggregatesDir, 'utf-8');

  //Put aggregate data into a Map, so it's easy to query by first letter
  const aggregates = new Map();
  allAggregates.forEach(filename => {
    const aggregateKey = filename.split('.')[0];
    const aggregateContents = fs.readFileSync(aggregatesDir + filename,'utf8');
    const aggregateData = JSON.parse(aggregateContents)
    aggregates.set(aggregateKey, aggregateData);
  });

  // Get latest list of results from files in directory.
  const importDir = __dirname + '/backlog/backfill/doing/';
  const allImports = fs.readdirSync(importDir, 'utf-8');

  //Now put latest data into database, and update aggregates
  const repoDir = dataDir + 'repos/';

  const fewImports = allImports.slice(0,23);
  fewImports.forEach( importFile => {
    const latestString = fs.readFileSync(importDir+importFile,'utf8');
    const latest = JSON.parse(latestString.replace(/^module.exports = /,'').replace(/;$/,''));
    console.log(importFile);
    for(let repo of latest) {
      //Get first letter of repo name
      const aggregateKey = repo.name.slice(0,1).toLowerCase(); // Some file systems are not case-sensitive
      const filepath = repoDir+aggregateKey+'/'+repo.name+extension;
      const parentDir = filepath.split('/').slice(0,-1).join('/');
      //We have aggregate data for this letter
      if(aggregates.has(aggregateKey)){
        let aggregateData = aggregates.get(aggregateKey);
        if( aggregateData[repo.name] !== undefined ){
          //get full data from DB
          if( fs.existsSync(filepath) ){
            const repoDataResults = JSON.parse(fs.readFileSync(filepath));
            //merge lists of files
            const filesFromDB = repoDataResults.files;
            repo.files = [...new Set([...filesFromDB,...repo.files])];
            //merge lists of languages
            const langsFromDB = repoDataResults.langs || [];
            repo.langs = repo.langs || [];
            repo.langs = [...new Set([...langsFromDB,...repo.langs])];
            //use most recent date (in case of backfilled data)
            repo.date = repoDataResults.date > repo.date ? repoDataResults.date : repo.date;
            //save back to DB
            fs.writeFileSync(filepath, JSON.stringify(repo));
          } else {
            if(!fs.existsSync(parentDir)) fs.mkdirSync(parentDir, {recursive: true});
            fs.writeFileSync(filepath, JSON.stringify(repo));
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
          if(!fs.existsSync(parentDir)) fs.mkdirSync(parentDir, {recursive: true});
          fs.writeFileSync(filepath, JSON.stringify(repo));

          repo.count = repo.files.length;
          delete repo.files;
          aggregateData[repo.name] = repo;
          aggregates.set(aggregateKey, aggregateData);
        }
      } else {
        //No existing aggregate data for this letter
        //This also implies the current repo is not in the DB
        //Set them both
        if(!fs.existsSync(parentDir)) fs.mkdirSync(parentDir, {recursive: true});
        fs.writeFileSync(filepath, JSON.stringify(repo));

        repo.count = repo.files.length;
        delete repo.files;
        let aggregateData = {};
        aggregateData[repo.name] = repo;
        aggregates.set(aggregateKey, aggregateData);
      }
    }

  })
  //Now put aggregates back into database
  let aggregatesArray = [];
  aggregates.forEach( (values, key) => {
    aggregatesArray = [...aggregatesArray, ...Object.values(values)];
    fs.writeFileSync(aggregatesDir+key+extension, JSON.stringify(values));
  });

  //Write full dataset to JSON file, to allow people to download
  const repoString = JSON.stringify(aggregatesArray);
  fs.writeFileSync(dataDir + 'teihub.json', repoString);

  //Also write full dataset to CSV file
  const fields = ['date', 'name', 'url', 'desc', 'langs', 'count'];
  const opts = { fields };

  const reposWithLangString = [];
  for(let current of aggregatesArray){
    const newEntry = Object.assign( {}, current);
    newEntry.langs = (current.langs) ? current.langs.join('|') : '';
    reposWithLangString.push(newEntry);
  };

  const csv = await parseAsync(reposWithLangString, opts)
    .catch(err => console.error(err));
  fs.writeFileSync(dataDir + 'teihub.csv', csv);

  return aggregatesArray;

}

run();
