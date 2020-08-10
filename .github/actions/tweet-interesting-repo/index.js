const core = require('@actions/core');
const github = require('@actions/github');
const { throttling } = require('@octokit/plugin-throttling');
const fs = require('fs');
const Twit = require('twit');
let faunadb = require('faunadb'),
q = faunadb.query;

async function run() {
  const access_token = core.getInput('access_token');
  const access_token_secret = core.getInput('access_token_secret');
  const consumer_key = core.getInput('consumer_key');
  const consumer_secret = core.getInput('consumer_secret');
  const faunadb_server_secret = core.getInput('faunadb_server_secret');
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
  let client = new faunadb.Client({ secret: faunadb_server_secret });
  let {data: tweetedRepos} = await client.query(
      q.Paginate(q.Match(q.Index("all_interesting_repos")))
  )
  .catch(err => {
    console.log(err);
    return;
  });

  // Remove from latest batch any repos tweeted in the past 30 days
  const eligibleRepos = repos.filter(x => !tweetedRepos.includes(x.name));

  // Don't tweet if there are no eligible repos
  if(eligibleRepos.length === 0) return;

  const theRepo = eligibleRepos[0];
  const theOwner = theRepo.name.split('/').shift();

  // Query GitHub for repository owner's twitter handle
  const octokit = github.getOctokit(token);
  const { data } = await octokit.users.getByUsername({
    username: theOwner
  });

  const theTwitterHandle = data.twitter_username != null ? ` by @${data.twitter_username}` : '';

  // Construct the tweet
  const intros = ['Check out', 'Have a look at', "Today's #TEI find:"];
  const random = Math.floor(Math.random() * intros.length);
  let tweet = `${intros[random]} ${theRepo.url}${theTwitterHandle}: ${theRepo.desc}`;

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

  // Save this repo in the database, so we don't retweet within a month
  await client.query(
    q.Create('interesting', {data: {name: theRepo.name} })
  ).catch(err => console.log(err));
}

run();
