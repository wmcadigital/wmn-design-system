// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const paths = require('./paths.js');

module.exports.minImages = () => {
  return src(paths.images.src)
    .pipe(plugins.changed(paths.images.src))
    .pipe(
      plugins.imagemin({
        verbose: true
      })
    )
    .pipe(dest(file => file.base));
};

module.exports.moveImages = () => src(paths.images.src).pipe(dest(paths.images.dest));
