module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("date", function(value) {
    return new Date(value)
      .toUTCString()
      .replace(/[^,]+, /,'') //Strip day of week
      .replace(/:\d{2} GMT/, ' UTC'); //strip seconds
  });

  eleventyConfig.addFilter("splitAtSlash", function(value) {
    return value.replace(/([/,._-])/gi, '$1&#8203;'); //Add zero-width space after / or other punctuation in repo name
  });

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("browserconfig.xml");
  eleventyConfig.addPassthroughCopy({"data/teihub.csv": "teihub.csv"});
  eleventyConfig.addPassthroughCopy({"data/teihub.json": "teihub.json"});
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("site.webmanifest");

  return {
    dir: {
      data: 'data',
      includes: 'includes',
      input: 'src',
      output: 'dist'
    }
  }

}
