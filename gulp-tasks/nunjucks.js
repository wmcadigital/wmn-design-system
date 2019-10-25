// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
const fs = require('fs');
// Local requires
const path = require('path');
const paths = require('./config.js');
const { packageJson, build } = require('./utils');

function getDataForFile(file) {
  try {
    // If filename-data.json exists then use it below for nunjucks file's data
    return JSON.parse(fs.readFileSync(`${path.parse(file.path).name}-data.json`));
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
