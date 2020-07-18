# TEIhub

## Backstory

When I first started encoding documents according to the [Text Encoding Initiative](https://tei-c.org/release/doc/tei-p5-doc/en/html/) guidelines, I had trouble finding TEI files from existing projects to use as an example of best practice.

Then I realised that (a) many projects made their TEI XML files publicly available on GitHub, (b) GitHub allows you to search the contents of all public files, and (c) all TEI files will contain the <code>&lt;teiHeader&gt;</code> tag.

So I tried [this search](https://github.com/search?l=XML&o=desc&p=1&q=teiheader&s=indexed&type=Code), but there were both too many and too few results. Too many, because GitHub returns each matching file, and if there are hundreds of files from the same repository which is not relevant, then the results are hard to browse. Too few, because GitHub records that there are approximately 1.6 million results, but only shows the first 1000.

I figured I would need to query GitHub programmatically, and put the idea aside, until a conversation on Twitter prompted me to implement it.

## Implementation
The pipeline I have set up does four main things
- At regular intervals ([.github/actions/workflows/update-results.yml](.github/actions/workflows/update-results.yml))
- It queries the GitHub API for 1000 <code>teiHeader</code> results and saves the results to this repository ([src/data/latest.js](../src/data/latest.js))
- They are imported to a database, which updates the list of matching repositories ([src/data/tei.js](../src/data/tei.js))
- The static website is rebuilt and deployed to hosting. (<code>npm run build</code>)

### Workflow
I use a [GitHub actions](https://github.com/features/actions) workflow with a scheduled trigger (i.e. basically a Cron job) which runs every four hours on the half hour.

```yaml
name: Update results
# This workflow is triggered every four hours on the half hour
on:
  schedule:
    - cron:  '30 */4 * * *'
```

The workflow defines four steps:
- Checkout this repo
- Run my query Github action
- Commit the changes to repo
- Push the changes back to GitHub

See [.github/actions/workflows/update-results.yml](.github/actions/workflows/update-results.yml)

### Query GitHub API
I [wrote my own GitHub action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action) to query the [GitHub REST API v3](https://docs.github.com/en/rest) for files containing <code>teiHeader</code>, see [.github/actions/get-new-results](.github/actions/get-new-results).

The configuration is defined in [action.yml](.github/actions/get-new-results/action.yml)

The code in [index.js](.github/actions/get-new-results/index.js) uses the GitHub Octokit client, with a throttling plugin, to run the queries. (I had to add an additional delay between queries to avoid setting off an abuse limit error, because GitHub classes the code search is computationally expensive). The logic is
- get 10 batches of 100 teiheader results ordered by most recently indexed
- group the resulting files names by repository
- write these aggregated results to a file in the working directory

Rather than checking in the node_modules directory associated with my action, I chose to to compile the action it using <code>zeit/ncc</code> as suggested at https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github

The compiled version of the action lives in [.github/actions/get-new-results/dist/index.js](.github/actions/get-new-results/dist/index.js). If you're using any relative paths inside the action (like I am) they need to be relative to this directory.

### Token
Doing a code search across all public repositories requires you to be authenticated, so a token must be passed to the action as input. I created a personal access token following the instructions at https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token For the purposes of running queries, the token does not need to have any permissions, but for committing files back to this repository it needs the <code>public_repo</code> permission (under the repo section).

I made this token available to the workflow by going to the Settings > Secrets section of this repository, and adding the token as a new secret with the name WORKFLOW_TOKEN. This is referenced within the workflow as <code>${{ secrets.WORKFLOW_TOKEN }}</code>

### Processing the results
This repository is connected to Netlify web hosting, and every time a change is pushed to the repository (e.g. the latest results) it triggers the build command set in the Netlify configuration (<code>npm run build</code>, which is defined in package.json as <code>npx @11ty/eleventy</code>). This in turn runs the Eleventy static site generator to compile the data and templates into HTML files. Eleventy has a nice feature that a data "file" does not have to be a static JSON file, but can contain arbitrary Javascript functions, for example, to read from a database.

### Database
The output of the workflow is a file containing entries like

```json
{
  "date":1595017921573,
  "name":"philipallfrey/guillim-folger-va447",
  "url":"https://github.com/philipallfrey/guillim-folger-va447",
  "desc":"Transcription of John Guillim's manuscript notebook, Folger MS V.a.447",
  "files":[
    "transcriptions/vard-out/13v-14r.xml",
    "transcriptions/vard-in/13v-14r.xml",
    "transcriptions/pass1/13v-14r.xml",
    "transcriptions/output-xml/13v-14r.xml",
    "transcriptions/input-xml/13v-14r.xml"
    ]
  }
```

I store them in a FaunaDB instance, which is a NoSQL database. If the repository has been seen in a previous batch of results then I update the date and file list. The code which does this is in [src/data/tei.js](src/data/tei.js)

The free tier of FaunaDB has a limit of 100,000 reads per day. Because only a small number of repositories will be changed with every batch of results, I don't need to read the entry for every single repository every time I rebuild the website. Instead I maintain a set of documents, one for each letter, listing all the repositories that start with that letter, e.g.

```
"key": "p",
"values": {
  "papyri/idp.data": {
    "date": 1595046717951,
    "name": "papyri/idp.data",
    "url": "https://github.com/papyri/idp.data",
    "desc": "Data from the Integrating Digital Papyrology project",
    "count": 348
  },
  "philipallfrey/guillim-folger-va447": {
    "date": 1595046717562,
    "name": "philipallfrey/guillim-folger-va447",
    "url": "https://github.com/philipallfrey/guillim-folger-va447",
    "desc": "Transcription of John Guillim's manuscript notebook, Folger MS V.a.447",
    "count": 15
  },
  ...
  ```
### Static Site
As mentioned above I use Eleventy as my static site generator, primarily for the data files feature mentioned above. It supports multiple templating engines simultaneously; I have chosen to use Nunjucks, by Mozilla.

The HTML skeleton for all pages is in [src/includes/layout.njk](src/includes/layout.njk). I use SemanticUI as a CSS framework, with a couple of CSS rules in layout.njk.

The home page of the site is in [src/index.njk](src/index.njk), the layout for all the data tables on the site is in [src/includes/table.njk](src/includes/table.njk)

Eleventy supports YAML front-matter (i.e. metadata/configuration) at the top of templates. I have used this to specify the layout, data, and pagination. The following configuration tells Eleventy to use the <code>table.njk</code> layout, paginate in sets of 50 the data found in the variable <code>lastIndexed</code> in the data file tei.js, in reverse order. The generated pages will be put in the <code>dist</code> folder in a folder named after the template file, e.g.
<code>last-indexed/desc.njk</code> will result in <code>dist/last-indexed/desc/0.html, dist/last-indexed/desc/1.html,...</code>

```YAML
---
layout: table
pagination:
  data: tei.lastIndexed
  size: 50
  reverse: true
indexedOrder: 'desc'
active:
  indexed: true
---
```

I have added two additional variables to define the ordering used. These correspond to conditional statements in table.njk, so that the links in the column headers point to versions of the table sorted by the desired quantity. The <code>active</code> variable is used to set a CSS class, so that the arrows in the column headers point in the correct direction.
