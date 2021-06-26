const pluginSass = require('eleventy-plugin-sass')
const pug = require('pug')

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary('pug', pug)
  eleventyConfig.addPlugin(pluginSass, {
    autoprefixer: true,
    sourcemap: false,
    watch: ['_sources/stylesheets/*.{sass, scss}'],
    outputDir: '_site/stylesheets'
  })

  return {
    dir: {
      input: '_sources',
      data: '_data'
    },
    markdownTemplateEngine: 'md'
  }
}
