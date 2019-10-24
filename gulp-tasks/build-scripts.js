const { src, dest } = require('gulp');
const fs = require('fs');
const plugins = require('gulp-load-plugins')();


const paths = require('./config.js');
const getRoot = require('./getRoot');

const json = JSON.parse(fs.readFileSync('./package.json'));
const build = 'local';

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
    .pipe(plugins.replace('$*cdn', json.buildDirs[build].cdn))
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
