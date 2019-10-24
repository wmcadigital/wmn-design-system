const { src, dest, watch, series, parallel } = require('gulp');

const paths = require('./gulp-tasks/config.js'); // List of all paths in a config

// STYLES
const buildStyles = require('./gulp-tasks/build-styles'); // Build Styles

// SCRIPTS
const lintScripts = require('./gulp-tasks/lint-scripts'); // Lint scripts/JS
const buildScripts = require('./gulp-tasks/build-scripts'); // Minify, and concatenate scripts

// TEMPLATES
const lintTemplates = require('./gulp-tasks/lint-templates'); // Lint templates/HTML
const buildTemplates = require('./gulp-tasks/build-templates'); // Build templates/HTML

// OTHER
const buildConfig = () => src(paths.config.src).pipe(dest(paths.config.output)); // move config files to build
const spriteSvgs = require('./gulp-tasks/sprite-svgs'); // svg sprite
const minImages = require('./gulp-tasks/min-images'); // Optimise images
const cleanBuild = require('./gulp-tasks/clean'); // Clean the current build & _sourcemaps dir

const cacheBust = require('./gulp-tasks/cache-bust'); // This function checks index.html for cb=123 and replaces with current dateTime to bust cache

const { browserSync, reload } = require('./gulp-tasks/browser-sync'); // BrowserSync server

const buildAll = series(
  cleanBuild,
  spriteSvgs,
  minImages,
  buildStyles,
  buildScripts,
  buildTemplates,
  buildConfig,
  lintScripts,
  lintTemplates
);

// Watch files for changes
function watchFiles() {
  // Lint, concat, minify JS then reload server
  watch(paths.scripts.src, series(lintScripts, buildScripts, cacheBust, reload));
  watch(paths.templates.src, series(lintTemplates, buildTemplates, reload)); // Reload when html changes
  watch(paths.images.src, minImages);
  watch(paths.svgs.src, spriteSvgs);
  watch(paths.styles.src, series(buildStyles, reload)); // run buildStyles function on scss change(s)
  watch(paths.config.src, series(buildConfig, reload)); // Reload when config folder changes
}

// run buildStyles & minifyJS on start, series so () => run in an order and parallel so () => can run at same time
const dev = series(
  lintScripts,
  lintTemplates,
  parallel(buildStyles, buildScripts, buildTemplates, buildConfig, spriteSvgs, minImages),
  cacheBust,
  parallel(watchFiles, browserSync)
);
// Export items to be used in terminal
exports.default = dev;
exports.lintScripts = lintScripts;
exports.lintTemplates = lintTemplates;
exports.clean = cleanBuild;
exports.buildScripts = series(buildScripts, lintScripts);
exports.buildStyles = buildStyles;
exports.buildTemplates = series(buildTemplates, lintTemplates);
exports.buildConfig = buildConfig;
exports.spriteSvgs = spriteSvgs;
exports.minImages = minImages;
exports.buildAll = buildAll;
