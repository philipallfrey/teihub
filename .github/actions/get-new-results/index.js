const core = require('@actions/core');
const github = require('@actions/github');
const languages = require('@cospired/i18n-iso-languages');
const { throttling } = require('@octokit/plugin-throttling');
const fs = require('fs');
const dom = require('xmldom').DOMParser;
const xpath = require('xpath');


function getLangs(doc){
  let langs = [];

  // 1. Use values from <langUsage><language ident="xxx"></language></langUsage>
  /* Ideally we would do it this way, but some files don't declare the TEI namespace
  let select = xpath.useNamespaces({"tei": "http://www.tei-c.org/ns/1.0"});
  let langs = select('//tei:langUsage/tei:language/@ident', doc);
  */

  let attributes = xpath.select("//*[local-name()='langUsage']/*[local-name()='language']/@*[starts-with(local-name(), 'id')]", doc);
  if( attributes.length > 0){
    return attributes.map(x => x.nodeValue)
  }

  // 2. Use values from <text xml:lang="xx">
  attributes =  xpath.select("//*[local-name()='text']/@*[local-name()='lang']", doc);
  if( attributes.length > 0){
    return attributes.map(x => x.nodeValue)
  }

  // 3. Use values from <body xml:lang="xx">
  attributes =  xpath.select("//*[local-name()='body']/@*[local-name()='lang']", doc);
  if( attributes.length > 0){
    return attributes.map(x => x.nodeValue)
  }

  // 4. Use values from <textLang mainLang="xxx">
  attributes = xpath.select("//*[local-name()='textLang']/@*[local-name()='mainLang']", doc);
  if( attributes.length > 0){
    return attributes.map(x => x.nodeValue)
  }

  // 5. Use values from <TEI xml:lang="xx(x)">, but not if it is en, as people seem to use that incorrectly
  attributes = xpath.select("//*[local-name()='TEI']/@*[local-name()='lang']", doc);
  if( attributes.length > 0){
    return attributes
      .map(x => x.nodeValue)
      .filter(x => !x.startsWith('en'));
  }

  // 6. Use values of xml:lang on any element within body
  attributes = xpath.select("//*[local-name()='body']//@*[local-name()='lang']", doc);

  if( attributes.length > 0){
    const codes = attributes
      .filter(x => x.ownerElement.localName !== 'foreign') // it should really be possible to do this in XPath
      .map(x => x.nodeValue)
      .reduce( (count, x) => {
        count[x] = (count[x] || 0) + 1;
        return count;
      }, {});

    return Object.entries(codes)
      .sort((a,b) => b[1]-a[1])
      .map(x => x[0]);
  }

  return langs;
}

function normaliseLangs(langs){
  // Convert to lowercase and remove duplicates
  langs = [...new Set(
    langs.map( lang => lang.toLowerCase() )
  )];

  return langs.map( lang => {
    // Remove script from language codes like tam-Latn or x-oldkhmer-Latn
    const langComponents = lang.split('-');
    lang = langComponents.length > 1 ? langComponents.slice(0,-1).join('-') : lang;
    lang = lang.toLowerCase();

    switch (lang.length){
      case 2:
        return languages.alpha2ToAlpha3T(lang);

      case 3:
      default:
        return lang;
    }
  })
}

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

  //Set up dom parser and hide warnings/errors
  const xmldom = new dom({
    locator: {},
    errorHandler: { warning: function (w) { },
    error: function (e) { },
    fatalError: function (e) { console.error(e) } }
  });


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
            files: [item.path],
            langs: []
          };
          repos.set(repoId, data);
        }
      });

    }
    // Get language for first file seen for each repo
    for(let [repoId, repo] of repos ){
      const nameElements = repo.name.split('/');

      //Filter out e.g. ODD files which also have a <teiHeader>
      const files = repo.files.filter(x => x.endsWith('.xml'));
      if(files.length === 0) return;
      const path = files[0];

      //Get file contents
      const { data: result } = await octokit.repos.getContent({
        owner: nameElements[0],
        repo: nameElements[1],
        path: path
      });

      //Parse xml for language info
      const xml = Buffer.from(result.content, 'base64').toString()
      const doc = xmldom.parseFromString(xml, 'text/xml');
      const langs = normaliseLangs(getLangs(doc));

      //Update repo data
      repo.langs = [...repo.langs, ...langs];
      repos.set(repoId, repo);
    };

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
