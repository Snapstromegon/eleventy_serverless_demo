const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "serverless", // The serverless function name from your permalink object
    functionsDir: "./netlify/functions/",
  });
};
