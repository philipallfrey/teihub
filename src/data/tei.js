//const latest = require('./latest');
const repos = require('./repos');

module.exports = function() {
  const repoCount = repos.length;
  const docCount = repos.reduce( (sum, current) => {
    return sum + current.count;
  }, 0);

  const matches = [...repos].sort((a, b) => b.count - a.count);
  const repository = [...repos].sort((a, b) => a.name.localeCompare(b.name));
  console.log("matches", matches);
  return {
    repoCount: repoCount,
    docCount: docCount,
    lastIndexed: repos,
    matches: matches,
    repository: repository
  };
};
