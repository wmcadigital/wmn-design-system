// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();

// Local requires
const paths = require('./paths.js');
const { getRoot, packageJson, build } = require('./utils');

// Process, lint, and minify Sass files
module.exports.buildStyles = () => {
  return src(paths.styles.minifySrc)
    .pipe(
      plugins.plumber({
        errorHandler(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass().on('error', plugins.sass.logError)) // Compile Sass
    .pipe(plugins.replace('$*cdn', packageJson.buildDirs[build].cdn))
    .pipe(plugins.autoprefixer()) // Prefix css with older browser support
    .pipe(plugins.cleanCss({ level: 2 })) // Minify css
    .pipe(
      plugins.rename({
        extname: '.min.css'
      })
    )
    .pipe(plugins.sourcemaps.write(getRoot(paths.styles.output) + paths.logs.sourcemaps))
    .pipe(dest(paths.styles.output));
};

module.exports.buildReactNativeStyles = () => {
  return src(paths.styles.reactNativeSrc)
    .pipe(plugins.replace('$*cdn', packageJson.buildDirs[build].cdn))
    .pipe(plugins.sass().on('error', plugins.sass.logError)) // Compile Sass
    .pipe(plugins.autoprefixer()) // Prefix css with older browser support
    .pipe(plugins.reactNativeStylesheetCss()) // Converts CSS to React Native stylesheet
    .pipe(plugins.uglifyEs.default()) // Mangle var names etc.
    .pipe(
      plugins.rename({
        extname: '.min.js'
      })
    )
    .pipe(dest(`${paths.styles.output}react-native/`));
};
