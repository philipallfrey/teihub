const repos = require('../../data/teihub.json');
const fs = require('fs');

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

module.exports = async function() {
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
