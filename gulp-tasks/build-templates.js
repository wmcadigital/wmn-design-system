// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const paths = require('./config.js');
const packageJson = require('./get-package-json');

const build = require('./determine-build');

module.exports = () => {
  return src(paths.templates.src)
    .pipe(plugins.handlebarsFileInclude('', { maxRecursion: 50 }))
    .pipe(plugins.replace('$*cdn', packageJson.buildDirs[build].cdn))
    .pipe(dest(paths.templates.output));
};
