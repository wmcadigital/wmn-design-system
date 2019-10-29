// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const paths = require('./paths.js');
const { packageJson, build } = require('./utils');
const njkData = require('../src/views/www/data.njk.json');

module.exports = () => {
  return src(paths.nunjucks.websiteSrc)
    .pipe(plugins.data(() => njkData))
    .pipe(
      plugins.nunjucksRender({
        path: 'src/views/',
        watch: true
      })
    )
    .pipe(plugins.replace('$*cdn', packageJson.buildDirs[build].cdn))
    .pipe(plugins.htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(plugins.formatHtml())
    .pipe(dest(paths.nunjucks.output));
};
