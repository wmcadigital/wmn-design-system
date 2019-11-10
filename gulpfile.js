const { src, dest, watch, series, parallel } = require('gulp');

const paths = require('./gulp-tasks/paths.js'); // List of all paths in a config

// STYLES
const lintStyles = require('./gulp-tasks/lint-styles'); // Lint styles
const { buildStyles, buildReactNativeStyles } = require('./gulp-tasks/build-styles'); // Build Styles

// SCRIPTS
const lintScripts = require('./gulp-tasks/lint-scripts'); // Lint scripts/JS
const buildScripts = require('./gulp-tasks/build-scripts'); // Minify, and concatenate scripts

// TEMPLATES
const lintTemplates = require('./gulp-tasks/lint-templates'); // Lint templates/HTML
const buildTemplates = require('./gulp-tasks/build-nunjucks'); // build nunjucks templates

// OTHER
const buildConfig = () => src(paths.config.src).pipe(dest(paths.config.output)); // move config files to build
const buildSprites = require('./gulp-tasks/sprite-svgs'); // svg sprite
const { minImages, moveImages } = require('./gulp-tasks/min-images'); // Optimise images
const cleanBuild = require('./gulp-tasks/clean'); // Clean the current build & _sourcemaps dir

const cacheBust = require('./gulp-tasks/cache-bust'); // This function checks index.html for cb=123 and replaces with current dateTime to bust cache

const { browserSync, reload } = require('./gulp-tasks/browser-sync'); // BrowserSync server

// WATCHERS
function watchFiles() {
  // Lint, concat, minify JS then reload server
  watch(paths.scripts.src, series(lintScripts, buildScripts, cacheBust, reload)); // lint and build scripts
  watch(paths.nunjucks.src, series(buildTemplates, lintTemplates, reload)); // Rebuild and reload when .njk files change
  // watch(paths.nunjucks.output, formatNjk); // Format Nunjucks src files if change is detected in build folder (this is to stop watch looping, if inserted in above watcher)
  watch(paths.images.src, series(moveImages)); // If new images are found, move to build folder
  watch(paths.svgs.src, buildSprites);
  watch(paths.styles.src, series(buildStyles, buildReactNativeStyles, lintStyles, reload)); // run buildStyles function on scss change(s)
  watch(paths.config.src, series(buildConfig, reload)); // Reload when config folder changes
}

// EXPORTS/GULP TASKS

// Used to build everything out for use on staging/live
const buildAll = series(
  cleanBuild,
  buildSprites,
  minImages,
  moveImages,
  buildStyles,
  buildReactNativeStyles,
  buildTemplates,
  buildScripts,
  buildConfig,
  lintStyles,
  lintTemplates,
  lintScripts
);

// run buildStyles & minifyJS on start, series so () => run in an order and parallel so () => can run at same time
const serve = series(
  lintStyles,
  lintTemplates,
  lintScripts,
  parallel(
    buildStyles,
    buildReactNativeStyles,
    buildTemplates,
    buildScripts,
    buildConfig,
    buildSprites,
    moveImages
  ),
  cacheBust,
  parallel(watchFiles, browserSync)
);
// Export items to be used in terminal
exports.default = serve;
// Linting
exports.lintStyles = lintStyles;
exports.lintScripts = lintScripts;
exports.lintTemplates = lintTemplates;
exports.lintAll = series(lintStyles, lintTemplates, lintScripts);
// Cleaning
exports.clean = cleanBuild;
// Building
exports.buildScripts = series(buildScripts, lintScripts);
exports.buildStyles = series(lintStyles, buildStyles, buildReactNativeStyles);
exports.buildTemplates = series(buildTemplates, lintTemplates);
exports.buildConfig = buildConfig;
exports.buildSprites = buildSprites;
exports.minImages = series(minImages, moveImages);
exports.buildAll = buildAll;
