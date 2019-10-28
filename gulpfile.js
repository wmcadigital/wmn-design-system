const { src, dest, watch, series, parallel } = require('gulp');

const paths = require('./gulp-tasks/paths.js'); // List of all paths in a config

// STYLES
const buildStyles = require('./gulp-tasks/build-styles'); // Build Styles

// SCRIPTS
const lintScripts = require('./gulp-tasks/lint-scripts'); // Lint scripts/JS
const buildScripts = require('./gulp-tasks/build-scripts'); // Minify, and concatenate scripts

// TEMPLATES
const lintTemplates = require('./gulp-tasks/lint-templates'); // Lint templates/HTML
const buildTemplates = require('./gulp-tasks/build-templates'); // Build templates/HTML
const nunjucks = require('./gulp-tasks/nunjucks'); // build nunjucks

// OTHER
const buildConfig = () => src(paths.config.src).pipe(dest(paths.config.output)); // move config files to build
const spriteSvgs = require('./gulp-tasks/sprite-svgs'); // svg sprite
const { minImages, moveImages } = require('./gulp-tasks/min-images'); // Optimise images
const cleanBuild = require('./gulp-tasks/clean'); // Clean the current build & _sourcemaps dir

const cacheBust = require('./gulp-tasks/cache-bust'); // This function checks index.html for cb=123 and replaces with current dateTime to bust cache

const { browserSync, reload } = require('./gulp-tasks/browser-sync'); // BrowserSync server

// WATCHERS
function watchFiles() {
  // Lint, concat, minify JS then reload server
  watch(paths.scripts.src, series(lintScripts, buildScripts, cacheBust, reload)); // lint and build scripts
  watch(paths.templates.src, series(lintTemplates, buildTemplates, reload)); // Reload when html changes
  watch(paths.nunjucks.src, series(lintTemplates, nunjucks, reload)); // Rebuild and reload when .njk files change
  watch(paths.images.src, series(moveImages)); // If new images are found, move to build folder
  watch(paths.svgs.src, spriteSvgs);
  watch(paths.styles.src, series(buildStyles, reload)); // run buildStyles function on scss change(s)
  watch(paths.config.src, series(buildConfig, reload)); // Reload when config folder changes
}

// EXPORTS/GULP TASKS

// Used to build everything out for use on staging/live
const buildAll = series(
  cleanBuild,
  spriteSvgs,
  minImages,
  moveImages,
  buildStyles,
  buildScripts,
  nunjucks,
  buildConfig,
  lintScripts,
  lintTemplates
);
// run buildStyles & minifyJS on start, series so () => run in an order and parallel so () => can run at same time
const serve = series(
  lintScripts,
  lintTemplates,
  parallel(buildStyles, buildScripts, nunjucks, buildConfig, spriteSvgs, moveImages),
  cacheBust,
  parallel(watchFiles, browserSync)
);
// Export items to be used in terminal
exports.default = serve;
exports.lintScripts = lintScripts;
exports.lintTemplates = lintTemplates;
exports.clean = cleanBuild;
exports.buildScripts = series(buildScripts, lintScripts);
exports.buildStyles = buildStyles;
exports.buildNunjucks = series(nunjucks, lintTemplates);
exports.buildTemplates = series(buildTemplates, lintTemplates);
exports.buildConfig = buildConfig;
exports.spriteSvgs = spriteSvgs;
exports.minImages = series(minImages, moveImages);
exports.buildAll = buildAll;
