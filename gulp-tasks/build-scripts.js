// require('core-js/stable');
// require('regenerator-runtime/runtime');
// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
const webpack = require('webpack-stream');
// Local requires
const paths = require('./paths.js');
const { getRoot, packageJson, build } = require('./utils');

// Placeholder function for buildScripts to loop through
function minifyJS(jsFile) {
  return (
    src(jsFile.src)
      .pipe(
        plugins.plumber({
          errorHandler(error) {
            console.log(error.message);
            this.emit('end');
          }
        })
      )
      .pipe(plugins.replace('$*cdn', packageJson.buildDirs[build].cdn))
      .pipe(
        webpack({
          config: {
            mode: 'production',
            devtool: 'source-map',
            output: { filename: jsFile.minName }
          }
        })
      )
      // .pipe(plugins.uglify()) // Mangle var names etc.
      .pipe(plugins.plumber.stop())
      .pipe(dest(paths.scripts.output))
  ); // Spit out concat + minified file in ./build/
}

// Minify, and concatenate scripts
module.exports = done => {
  paths.scripts.minifySrc.map(jsFile => minifyJS(jsFile));
  done();
};
