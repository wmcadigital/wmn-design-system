// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const paths = require('./config.js');

module.exports = () => {
  return src(paths.images.src)
    .pipe(plugins.changed(paths.images.dest))
    .pipe(
      plugins.imagemin({
        verbose: true
      })
    )
    .pipe(dest(paths.images.dest));
};
