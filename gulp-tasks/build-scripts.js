// Gulp requires
import { src, dest } from 'gulp';
const plugins = require('gulp-load-plugins')();
// Local requires
import { scripts, logs } from './config.js';
import getRoot from './getRoot';
import { buildDirs } from './get-package-json';

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
    .pipe(plugins.replace('$*cdn', buildDirs[build].cdn))
    .pipe(
      plugins.babel({
        presets: ['@babel/env'],
        ignore: ['**/*.min.js']
      })
    )
    .pipe(plugins.concat(jsFile.minName)) // concat all js files in folder
    .pipe(plugins.uglify({ mangle: { reserved: ['jQuery'] } })) // Mangle var names etc.
    .pipe(plugins.sourcemaps.write(getRoot(scripts.output) + logs.sourcemaps))
    .pipe(plugins.plumber.stop())
    .pipe(dest(scripts.output)); // Spit out concat + minified file in ./build/
}

// Minify, and concatenate scripts
export default done => {
  scripts.minifySrc.map(jsFile => minifyJS(jsFile));
  done();
};
