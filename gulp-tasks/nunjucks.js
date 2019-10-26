// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
const fs = require('fs');
// Local requires
const path = require('path');
const paths = require('./config.js');
const { packageJson, build } = require('./utils');

function getDataForFile(file) {
  // Foreach njk file, try...
  try {
    // Use nodes path method to help with getting path structure (https://nodejs.org/api/path.html)
    const parseFile = path.parse(file.path); // Get the file's path
    const pathy = path.format({ dir: parseFile.dir, base: `${parseFile.name}.json` }); // Then check that same path for {njk-filename}.json
    return JSON.parse(fs.readFileSync(pathy)); // If {njk-filename}.json exists then use it below for nunjucks file's data
  } catch (err) {
    // console.log(err);
    return false;
  }
}

module.exports = () => {
  return src(paths.nunjucks.src)
    .pipe(plugins.data(getDataForFile))
    .pipe(
      plugins.nunjucksRender({
        path: 'src/views/',
        watch: true
      })
    )
    .pipe(plugins.replace('$*cdn', packageJson.buildDirs[build].cdn))
    .pipe(
      plugins.rename({
        extname: '.html'
      })
    )
    .pipe(plugins.htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(plugins.formatHtml())
    .pipe(dest(paths.nunjucks.output));
};
