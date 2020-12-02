const markdownIt = require('markdown-it')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const svgContents = require("eleventy-plugin-svg-contents");

let mdOptions = {
    html: true,
    breaks: true,
    linkify: true
};
module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("markdownify", function(value) {
        const md = new markdownIt(mdOptions)
        return md.render(value)
    });
    eleventyConfig.addPlugin(syntaxHighlight, {
        templateFormats: ["njk"],
    });
    eleventyConfig.addPlugin(svgContents);

    eleventyConfig.addPassthroughCopy('assets')

    let mdOptions = {
        html: true,
        breaks: true,
        linkify: true
      };
  
    eleventyConfig.setLibrary("md", markdownIt(mdOptions));
  
    
}