const allRepos = require('../../data/teihub.json');
const languages = require('../../lib/iso-639-2/iso-639-2.js');
const fs = require('fs');

// Human-readable filesize function taken from https://github.com/hustcc/filesize.js/
function filesize(path, fixed) {
  const stats = fs.statSync(path);
  let bytes = stats.size || 0;

  const { radix, unit } = { radix: 1024, unit: ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'] };

  let loop = 0;

  // calculate
  while (bytes >= radix) {
    bytes /= radix;
    ++loop;
  }
  return `${bytes.toFixed(fixed)} ${unit[loop]}`;
}

module.exports = async function() {
  const repoCount = allRepos.length;
  const docCount = allRepos.reduce( (sum, current) => {
    return sum + current.count;
  }, 0);

  const greylist = ['textcreationpartnership'];
  const shorterRepos = allRepos.reduce((reducedRepos, current) => {
    const owner = current.name.split('/')[0];
    if(greylist.includes(owner)){
      if(!reducedRepos.has(owner)){
        current.name = `${owner} (all repos)`;
        current.desc = `(${owner} uses one repository per text. To make this table smaller they have been aggregated into one entry)`;
        reducedRepos.set(owner, current);
      } else {
        let item = reducedRepos.get(owner);
        item.count += current.count;
        reducedRepos.set(owner, item);
      }
    } else {
      reducedRepos.set(current.name, current);
    }
    return reducedRepos;
  }, new Map());

  const repos = [...shorterRepos.values()];

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

  const langObjects = [...langs]
    .map(x => {
      return {
        code: x[0],
        count: x[1],
        dir: languages.getDir(x[0]),
        isLocalName: languages.isLocalName(x[0]),
        name: languages.getName(x[0], 'name'),
      };
    });

  const langCounts = [...langObjects]
    .sort((a, b) => b.count - a.count);

  const langCodes = [...langObjects]
    .sort((a, b) => a.code.localeCompare(b.code));

  const languageCount = langs.size;

  const description = [...repos].sort((a, b) => {
    //Sort empty descriptions to end
    if(a.desc === '-' || a.desc == null) return 1;
    if(b.desc === '-' || b.desc == null) return -1;
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

  return {
    csvSize: filesize(__dirname + '/../../data/teihub.csv', 0),
    dataSize: filesize(__dirname + '/../../data/teihub.json', 0),
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
