const tags = require('../../data/tei-tags-2021.json');

module.exports = async function() {

  const tagCounts = [...tags]
    .sort((a, b) => b.count - a.count);

  const tagElements = [...tags]
    .sort((a, b) => a.tag.localeCompare(b.tag));

    const tagModules = [...tags]
      .sort((a, b) => a.module.localeCompare(b.module));


  return {
    counts: tagCounts,
    elements: tagElements,
    modules: tagModules
  };
};
