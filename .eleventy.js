module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("date", function(value) {
    return new Date(value)
      .toUTCString()
      .replace(/[^,]+, /,'') //Strip day of week
      .replace(/:\d{2} GMT/, ' UTC'); //strip seconds
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
