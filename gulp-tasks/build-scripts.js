// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const paths = require('./config.js');
const getRoot = require('./getRoot');
const packageJson = require('./get-package-json');
const build = require('./determine-build');

// Placeholder function for buildScripts to loop through
function minifyJS(jsFile) {
  return src(jsFile.src)
    .pipe(
      plugins.plumber({
        errorHandler(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.replace('$*cdn', packageJson.buildDirs[build].cdn))
    .pipe(
      plugins.babel({
        presets: ['@babel/env'],
        ignore: ['**/*.min.js']
      })
    )
    .pipe(plugins.concat(jsFile.minName)) // concat all js files in folder
    .pipe(plugins.uglify({ mangle: { reserved: ['jQuery'] } })) // Mangle var names etc.
    .pipe(plugins.sourcemaps.write(getRoot(paths.scripts.output) + paths.logs.sourcemaps))
    .pipe(plugins.plumber.stop())
    .pipe(dest(paths.scripts.output)); // Spit out concat + minified file in ./build/
}

// Minify, and concatenate scripts
module.exports = done => {
  paths.scripts.minifySrc.map(jsFile => minifyJS(jsFile));
  done();
};
