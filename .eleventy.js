// converts offsite links to use target=_blank
// should be used at the root of the project (e.g. /src/layout/_includes/base.njk) to prevent writing the attribute multiple times
const filterOffsiteAnchors = (html) => html.replaceAll("<a href=\"http", "<a target=\"_blank\" rel=\"noreferrer noopener\" href=\"http");

// the `date` field is automatically converted to a Date object.
const formatDate = (date) => `ISO Timestamp: ${date.toISOString()} (hello from .eleventy.js filter!)`;

module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
    
    // copies directly from 'x' to 'y', even if it isnt included in the input
    // can also be written as e.g. 
    // eleventyConfig.addPassthroughCopy('src/images');
    // however, that copies it into public/src/images rather than public/images
    eleventyConfig.addPassthroughCopy({'src/images': 'images'});
    eleventyConfig.addPassthroughCopy({'src/fonts': 'fonts'});

    // custom filters, used with the pipe operator (`|`)
    eleventyConfig.addNunjucksFilter("formattedDate", formatDate );
    eleventyConfig.addNunjucksFilter("filterOffsiteAnchors", filterOffsiteAnchors );
    
    return {
      dir: {
        input: "src/layout",
        output: "public"
      }
    }
  };
