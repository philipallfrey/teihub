const langs = require('../../data/langs-2021.json');
const languages = require('../../lib/iso-639-2/iso-639-2.js');

module.exports = async function() {

  const langObjects = [...langs]
    .map(x => {
      return {
        code: x.lang,
        count: x.count,
        dir: languages.getDir(x.lang),
        isLocalName: languages.isLocalName(x.lang),
        name: languages.getName(x.lang, 'name'),
      };
    });

  const langCounts = [...langObjects]
    .sort((a, b) => b.count - a.count);

  const langCodes = [...langObjects]
    .sort((a, b) => a.code.localeCompare(b.code));


  return {
    codes: langCodes,
    counts: langCounts,
  };
};
