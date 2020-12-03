// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const paths = require('./paths.js');

const minifyingImages = () => {
  return src(paths.images.src)
    .pipe(plugins.changed(paths.images.dest))
    .pipe(
      plugins.imagemin({
        verbose: true
      })
    )
    .pipe(dest(file => file.base));
};

const movingImages = () => src(paths.images.output).pipe(dest(paths.images.dest));

module.exports.minImages = minifyingImages;
module.exports.moveImages = movingImages;
