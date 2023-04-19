// const Image = require("@11ty/eleventy-img");

// async function imageShortcode(src, alt, sizes) {
//   let metadata = await Image(`./src${src}`, {
//     widths: [300, 600, null],
//     //widths: ["auto", "auto"],
//     //formats: ["avif", "jpeg", "png"],
//     formats: ['webp', 'png'],
//     urlPath: "/images/",
//     outputDir: "./public/images/"
//   });

//   let imageAttributes = {
//     alt,
//     sizes,
//     loading: "lazy",
//     decoding: "async"
//   };

//   return Image.generateHTML(metadata, imageAttributes);
// }

module.exports = function (eleventyConfig) {

  //eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/images/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};