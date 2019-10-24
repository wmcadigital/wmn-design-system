// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const paths = require('./config.js');

module.exports = () => {
  return src(paths.svgs.src)
    .pipe(plugins.rename({ prefix: 'wmn-' }))
    .pipe(plugins.svgstore())
    .pipe(plugins.rename({ basename: 'svg-sprite' }))
    .pipe(dest(paths.svgs.dest));
};
