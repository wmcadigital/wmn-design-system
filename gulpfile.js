const { src, dest, watch, series, parallel } = require('gulp');
// Live-reload server vars
// Other vars
const replace = require('gulp-replace');

const paths = require('./gulp-tasks/config.js'); // List of all paths in a config

const cleanBuild = require('./gulp-tasks/clean'); // Clean the current build & _sourcemaps dir

const buildStyles = require('./gulp-tasks/build-styles');

const lintScripts = require('./gulp-tasks/lint-scripts'); // Lint scripts/JS
const buildScripts = require('./gulp-tasks/build-scripts'); // Minify, and concatenate scripts
const lintTemplates = require('./gulp-tasks/lint-templates'); // Lint Templates/HTML

// build nunjucks
function nunjucks() {
  return src(paths.nunjucks.src)
    .pipe(
      nunjucksRender({
        path: 'src',
        watch: true
      })
    )
    .pipe(replace('$*cdn', json.buildDirs[build].cdn))
    .pipe(dest(paths.nunjucks.output));
}
const buildTemplates = require('./gulp-tasks/build-templates');

const buildConfig = () => src(paths.config.src).pipe(dest(paths.config.output)); // move config files to build

const spriteSvgs = require('./gulp-tasks/sprite-svgs'); // svg sprite

const minImages = require('./gulp-tasks/min-images'); // Optimise images

// This function checks index.html for cb=123 and replaces with current dateTime to bust cache
function cacheBust() {
  const cbString = new Date().getTime();
  return src([paths.server.baseDir])
    .pipe(replace(/\?cb=[0-9]*/gm, `?cb=${cbString}`))
    .pipe(dest('.'));
}

const { browserSync, reload } = require('./gulp-tasks/browser-sync'); // BrowserSync server

const buildAll = series(
  cleanBuild,
  spriteSvgs,
  minImages,
  buildStyles,
  buildScripts,
  nunjucks,
  buildTemplates,
  buildConfig,
  lintScripts,
  lintTemplates
);
// Watch files for changes
function watchFiles() {
  // Lint, concat, minify JS then reload server
  watch(paths.scripts.src, series(lintScripts, buildScripts, cacheBust, reload));
  watch(
    [paths.templates.src, paths.nunjucks.src],
    series(lintTemplates, buildTemplates, nunjucks, reload)
  ); // Reload when html changes
  watch(paths.images.src, minImages);
  watch(paths.svgs.src, spriteSvgs);
  watch(paths.styles.src, series(buildStyles, reload)); // run buildStyles function on scss change(s)
  watch(paths.config.src, series(buildConfig, reload)); // Reload when config folder changes
}
const dev = series(
  lintScripts,
  lintTemplates,
  parallel(buildStyles, buildScripts, nunjucks, buildTemplates, buildConfig, spriteSvgs, minImages),
  cacheBust,
  parallel(watchFiles, browserSync)
); // run buildStyles & minifyJS on start, series so () => run in an order and parallel so () => can run at same time
// Export items to be used in terminal
exports.default = dev;
exports.lintScripts = lintScripts;
exports.lintTemplates = lintTemplates;
exports.clean = cleanBuild;
exports.buildScripts = series(buildScripts, lintScripts);
exports.buildStyles = buildStyles;
exports.buildNunjucks = series(nunjucks, lintTemplates);
exports.buildTemplates = series(buildTemplates, lintTemplates);
exports.buildConfig = buildConfig;
exports.spriteSvgs = spriteSvgs;
exports.minImages = minImages;
exports.buildAll = buildAll;
