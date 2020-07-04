const core = require('@actions/core');
const github = require('@actions/github');
const { throttling } = require('@octokit/plugin-throttling');
const fs = require('fs');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  const token = core.getInput('token');

  //Get Octokit client for accessing GitHub API
  //Use throttling plugin to limit rate of requests
  //Doesn't seem to work when run as a GitHub action
  const octokit = github.getOctokit(token, {
    throttle: {
      onRateLimit: (retryAfter, options) => {
        console.warn(`Request quota exhausted for request ${options.method} ${options.url}`)

        if (options.request.retryCount === 0) { // only retries once
          console.log(`Retrying after ${retryAfter} seconds!`)
          return true
        }
      },
      onAbuseLimit: (retryAfter, options) => {
        // does not retry, only logs a warning
        console.warn(`Abuse detected for request ${options.method} ${options.url}`)
      }
    }
  });

  //Create map for storing data
  const repos = new Map();

  //Get current date as timestamp with milliseconds set to zero
  const date = Math.round(new Date().getTime()/1000)*1000;

  //Use milliseconds to order results, since they don't contain a timestamp
  let milliseconds = 1000;

  //The Search Code API has a limit of 100 results per page and max 1000 results
  //Get the 1000 most recently indexed matches in batches of 100
  try {
    for(let i=1; i<=10; i++){
      //Delay to avoid hitting abuse limit warning from GitHub API
      await sleep(20000);
      const { data } = await octokit.search.code({
        q: 'teiheader+language:xml',
        sort: 'indexed',
        order: 'desc',
        per_page: 100,
        page: i
      });

      //Extract just the information we need
      data.items.forEach( item => {
        milliseconds--;
        const repoId = item.repository.id;
        if(repos.has(repoId)){
          let data = repos.get(repoId);
          data.files.push(item.path);
          repos.set(repoId, data);
        } else {
          const data = {
            date: date + milliseconds,
            name: item.repository.full_name,
            url: item.repository.html_url, // TODO omit this, because it's the name with a constant prefix
            desc: item.repository.description || '-',
            files: [item.path]
          };
          repos.set(repoId, data);
        }
      });

    }
    //Convert the map to an array
    const latest = [...repos.values()];

    //Write output to file
    fs.writeFileSync(__dirname + '/../../../../src/data/latest.js', `module.exports = ${JSON.stringify(latest)};`);

    //Set output for use by next step
    //Not really necessary now I am writing to file
    core.setOutput("latest", latest);

    } catch (error) {
      core.setFailed(error.message);
    }
}

run();
