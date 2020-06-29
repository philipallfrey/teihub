module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("date", function(value) {
    return new Date(value)
      .toUTCString()
      .replace(/[^,]+, /,'') //Strip day of week
      .replace(/:\d{2} GMT/, ' UTC'); //strip seconds
  });

  eleventyConfig.addFilter("splitAtSlash", function(value) {
    return value.replace('/', '/&#8203;'); //Add zero-width space after / in repo name
  });

  return {
    dir: {
      data: 'data',
      includes: 'includes',
      input: 'src',
      output: 'dist'
    }
  }

}
