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

  eleventyConfig.addPassthroughCopy("android-chrome-192x192.png");
  eleventyConfig.addPassthroughCopy("android-chrome-512x512.png");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("browserconfig.xml");
  eleventyConfig.addPassthroughCopy("favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("mstile-150x150.png");
  eleventyConfig.addPassthroughCopy("safari-pinned-tab.svg");
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
