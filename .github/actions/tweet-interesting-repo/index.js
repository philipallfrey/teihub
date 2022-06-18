const core = require('@actions/core');
const github = require('@actions/github');
const { throttling } = require('@octokit/plugin-throttling');
const fs = require('fs');
const Twit = require('twit');

async function run() {
  const access_token = core.getInput('access_token');
  const access_token_secret = core.getInput('access_token_secret');
  const consumer_key = core.getInput('consumer_key');
  const consumer_secret = core.getInput('consumer_secret');
  const token = core.getInput('token');

  // Get latest list of results from file.
  // Can't use require because we compile index.js
  const latestString = fs.readFileSync(__dirname + '/../../../../src/data/latest.js','utf8');
  const latest = JSON.parse(latestString.replace(/^module.exports = /,'').replace(/;$/,''));

  // Sort repos by interestingness, i.e. description length + number of files
  const repos = latest
    .filter(x => x.desc.length > 1)
    .sort((a, b) => (b.desc.length + b.files.length) - (a.desc.length + a.files.length))

  // Don't tweet if there are no repos with a description
  if(repos.length === 0) return;

  // Get previously tweeted repos from database
  const dataDir = __dirname + '/../../../../data/';
  const filepath = dataDir + 'tweeted-repos.json';
  let tweetedRepos = [];
  if(fs.existsSync(filepath)){
    const tweetedReposContent = fs.readFileSync(filepath, 'utf-8');
    tweetedRepos = JSON.parse(tweetedReposContent);
  }

  // Maintain a blacklist in case people request their repo not be tweeted
  const blacklistPath = dataDir + 'tweet-blacklist.json';
  let blacklistedRepos = [];
  if(fs.existsSync(blacklistPath)){
    const blacklistedReposContent = fs.readFileSync(blacklistPath, 'utf-8');
    blacklistedRepos = JSON.parse(blacklistedReposContent);
  }
  const excludedRepos = tweetedRepos.concat(blacklistedRepos);

  // Remove from latest batch any repos tweeted in the past 30 days
  const eligibleRepos = repos.filter(x => !excludedRepos.includes(x.name));

  // Don't tweet if there are no eligible repos
  if(eligibleRepos.length === 0) return;

  const theRepo = eligibleRepos[0];
  const theOwner = theRepo.name.split('/').shift();

  // Query GitHub for repository owner's twitter handle
  const octokit = github.getOctokit(token);
  const { data } = await octokit.users.getByUsername({
    username: theOwner
  });

  let theTwitterHandle = data.twitter_username != null ? ` by @${data.twitter_username}` : '';

  // Construct the tweet
  let intros = [
    { prefix: 'Check out'},
    { prefix: 'Have a look at'},
    { prefix: "Today's #TEI find:"}
  ];
  if(theRepo.langs.includes('deu')){
    intros = [
      { prefix:'Schauen Sie sich', suffix:' an'}
    ];
    theTwitterHandle = theTwitterHandle.replace(/^ by /,' von ');
  } else if(theRepo.langs.includes('fra')){
    intros = [
      { prefix: 'Jeter un œil à'}
    ];
    theTwitterHandle = theTwitterHandle.replace(/^ by /,' par ');
  } else if(theRepo.langs.includes('lat')){
    intros = [
      { prefix: 'Vide'},
      { prefix: 'Inspice'}
    ];
    theTwitterHandle = theTwitterHandle.replace(/^ by /,' ab ');
  } else if(theRepo.langs.includes('ces')) {
    intros = [
      { prefix: 'Podívejte se na'}
    ];
    theTwitterHandle = theTwitterHandle.replace(/^ by /,' od ');
  }
  const random = Math.floor(Math.random() * intros.length);
  let tweet = `${intros[random].prefix} ${theRepo.url}${intros[random].suffix || ''}${theTwitterHandle}: ${theRepo.desc}`;

  // Truncate tweet if it is longer than the max length
  const MAX_LENGTH = 280;
  if(tweet.length >= MAX_LENGTH) tweet = tweet.slice(0,MAX_LENGTH-1) + '\u2026';

  core.setOutput("tweet",tweet);

  // Instantiate Twitter Client
  const T = new Twit({
      consumer_key: consumer_key,
      consumer_secret: consumer_secret,
      access_token: access_token,
      access_token_secret: access_token_secret
  });

  // Actually post the tweet
  const results = await T.post('statuses/update', {
       status: tweet
  })
  .catch(err => {
    console.log(err)
  });

  // Save this repo in the database, so we don't retweet too often
  // max of 24 tweets/day * 30 days/month = 720 entries in tweetedRepos.
  tweetedRepos.unshift(theRepo.name);
  fs.writeFileSync(filepath, JSON.stringify( tweetedRepos.slice(0,720) ))
}

run();
