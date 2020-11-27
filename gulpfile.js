const { src, dest, watch, series, parallel } = require('gulp');

const paths = require('./gulp-tasks/paths.js'); // List of all paths in a config

// STYLES
const lintStyles = require('./gulp-tasks/lint-styles'); // Lint styles
const { buildStyles, buildReactNativeStyles } = require('./gulp-tasks/build-styles'); // Build Styles

const buildFonts = () => src(paths.fonts.src).pipe(dest(paths.fonts.output)); // move font files to build

// SCRIPTS
const lintScripts = require('./gulp-tasks/lint-scripts'); // Lint scripts/JS
const buildScripts = require('./gulp-tasks/build-scripts'); // Minify, and concatenate scripts

// TEMPLATES
const lintTemplates = require('./gulp-tasks/lint-templates'); // Lint templates/HTML
const {
  buildJSONForTemplates,
  buildTemplates,
  buildComponents
} = require('./gulp-tasks/build-nunjucks'); // build nunjucks templates

// OTHER
const buildConfig = () => src(paths.config.src).pipe(dest(paths.config.output)); // move config files to build
const buildNetlifyConfig = () =>
  src(paths.netlifyConfig.src).pipe(dest(paths.netlifyConfig.output)); // move config files to build

const buildSprites = require('./gulp-tasks/sprite-svgs'); // svg sprite
const { minImages, moveImages } = require('./gulp-tasks/min-images'); // Optimise images
const cleanBuild = require('./gulp-tasks/clean'); // Clean the current build & _sourcemaps dir

const cacheBust = require('./gulp-tasks/cache-bust'); // This function checks index.html for cb=123 and replaces with current dateTime to bust cache

const { moveOldCSS, moveOldReactNative, moveOldIcons } = require('./gulp-tasks/move-old-files');

const { browserSync, reload } = require('./gulp-tasks/browser-sync'); // BrowserSync server

// WATCHERS
function watchFiles() {
  // Lint, concat, minify JS then reload server
  watch(paths.scripts.src, series(lintScripts, buildScripts, cacheBust, reload)); // lint and build scripts
  watch(
    [paths.nunjucks.src, paths.njkData.src],
    series(buildJSONForTemplates, buildTemplates, lintTemplates, reload)
  ); // Rebuild and reload when .njk files change
  // watch(paths.nunjucks.output, formatNjk); // Format Nunjucks src files if change is detected in build folder (this is to stop watch looping, if inserted in above watcher)
  watch(paths.images.src, series(moveImages, reload)); // If new images are found, move to build folder
  watch(paths.svgs.src, series(buildSprites, reload));
  watch(paths.styles.src, series(buildStyles, buildReactNativeStyles, lintStyles, reload)); // run buildStyles function on scss change(s)
  watch(paths.config.src, series(buildConfig, reload)); // Reload when config folder changes
}

// EXPORTS/GULP TASKS

// Used to build everything out for use on staging/live
const buildAll = series(
  cleanBuild,
  buildSprites,
  moveImages,
  minImages,
  buildStyles,
  buildFonts,
  buildReactNativeStyles,
  buildJSONForTemplates,
  buildTemplates,
  buildComponents,
  buildScripts,
  buildNetlifyConfig,
  buildConfig,
  lintStyles,
  lintTemplates,
  lintScripts,
  moveOldCSS,
  moveOldReactNative,
  moveOldIcons
);

// run buildStyles, buildFonts,& minifyJS on start, series so () => run in an order and parallel so () => can run at same time
const serve = series(
  cleanBuild,
  lintStyles,
  lintTemplates,
  lintScripts,
  buildJSONForTemplates,
  parallel(
    buildStyles,
    buildFonts,
    buildReactNativeStyles,
    buildTemplates,
    buildScripts,
    buildConfig,
    buildNetlifyConfig,
    buildSprites,
    moveImages
  ),
  minImages,
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
exports.buildStyles = series(lintStyles, buildStyles, buildFonts, buildReactNativeStyles);
exports.buildTemplates = series(buildJSONForTemplates, buildTemplates, lintTemplates);
exports.buildComponents = buildComponents;
exports.buildConfig = buildConfig;
exports.buildSprites = buildSprites;
exports.minImages = series(minImages, moveImages);
exports.buildAll = buildAll;
