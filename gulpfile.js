const { src, dest, watch, series, parallel } = require('gulp');
// SASS vars
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
// JS vars
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
// HTML vars
const htmlHint = require('gulp-htmlhint');
const access = require('gulp-accessibility');
// Image vars
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
// Live-reload server vars
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gulpHandlebarsFileInclude = require('gulp-handlebars-file-include');
// Other vars
const del = require('del');
const plumber = require('gulp-plumber');
const replace = require('gulp-replace');
const fs = require('fs');
const rename = require('gulp-rename');
const jsonFormat = require('gulp-json-format');

const json = JSON.parse(fs.readFileSync('./package.json'));

let build = 'local';
// Function that is ran when buildAll is called to determine buildEnv
// This matches the buildDirs in package.json
function determineBuild(done) {
  switch (process.env.npm_config_build) {
    case 'staging':
      build = 'staging';
      break;
    case 'live':
      build = 'live';
      break;
    case 'netlify':
      build = 'netlify';
      break;
    default:
      build = 'local';
      break;
  }
  done();
}

const paths = {
  output: 'build/', // Default output location for code build
  server: {
    port: 8080,
    baseDir: './build/views/styleguide/',
    root: './build/'
  },
  styles: {
    src: ['src/assets/sass/**/*.scss', 'src/views/**/*.scss'], // src of stlyes to watch
    minifySrc: ['src/assets/sass/wmn.scss', 'src/views/styleguide/styleguide.scss'], // List of scss file(s) which should be processed, linted & minified
    output: 'build/css/' // output location of minified styles
  },
  scripts: {
    src: [
      'src/assets/js/**/*.js',
      'src/views/components/**/*.js',
      './src/views/styleguide/**/*.js'
    ], // Src of JS files to watch
    // List of JS folders to concatenate, lint and minified to one file (DON'T LINT ASSETS AS IT WILL TAKE TOO LONG TO SCAN MINIFIED LIBS)
    minifySrc: [
      {
        src: ['src/assets/js/wmn.js', 'src/views/components/**/*.js'],
        minName: 'wmn.min.js',
        lint: true
      },
      { src: 'src/assets/js/vendor/**/*.js', minName: 'vendor.min.js', lint: false },
      { src: 'src/views/styleguide/**/*.js', minName: 'styleguide.min.js', lint: false }
    ],
    output: 'build/js/' // Output location of minified JS files
  },
  templates: {
    src: 'src/views/**/*.html',
    output: 'build/views/'
  },
  images: {
    src: 'src/assets/img/**/*',
    dest: 'build/img/'
  },
  config: {
    src: 'src/assets/config/**/*',
    output: 'build/config/'
  },
  components: {
    src: 'build/views/components/**/*.html'
  },
  logs: {
    sourcemaps: '_sourcemaps/',
    accessibility: './_accessibility-logs/'
  }
};

const getRoot = path => '../'.repeat(path.match(/\//gi).length); // Function which takes in a path and back counts slashes to get to baseRoot dir

// Clean the current build & _sourcemaps dir
function cleanBuild() {
  return del([paths.output, paths.logs.sourcemaps, paths.logs.accessibility]);
}

// Process, lint, and minify Sass files
function buildStyles() {
  return src(paths.styles.minifySrc)
    .pipe(
      plumber({
        errorHandler(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Compile Sass
    .pipe(autoprefixer()) // Prefix css with older browser support
    .pipe(cleanCSS({ level: 2 })) // Minify css
    .pipe(sourcemaps.write(getRoot(paths.styles.output) + paths.logs.sourcemaps))
    .pipe(dest(paths.styles.output))
    .pipe(replace('$*cdn', json.buildDirs[build].cdn))
    .pipe(dest(paths.styles.output))
    .pipe(browserSync.stream()); // Push new CSS to server without reload
}

// Placeholder function for buildScripts to loop through
function minifyJS(jsFile) {
  return src(jsFile.src)
    .pipe(
      plumber({
        errorHandler(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    .pipe(sourcemaps.init())
    .pipe(replace('$*cdn', json.buildDirs[build].cdn))
    .pipe(
      babel({
        presets: ['@babel/env'],
        ignore: ['**/*.min.js']
      })
    )
    .pipe(concat(jsFile.minName)) // concat all js files in folder
    .pipe(uglify({ mangle: { reserved: ['jQuery'] } })) // Mangle var names etc.
    .pipe(sourcemaps.write(getRoot(paths.scripts.output) + paths.logs.sourcemaps))
    .pipe(plumber.stop())
    .pipe(dest(paths.scripts.output)); // Spit out concat + minified file in ./build/
}

// Minify, and concatenate scripts
function buildScripts(done) {
  paths.scripts.minifySrc.map(jsFile => minifyJS(jsFile));
  done();
}

// Lint scripts/JS
function lintScripts() {
  return src(['src/assets/js/wmn.js', 'src/views/**/*.js'])
    .pipe(eslint({ configFile: '.eslintrc.json' })) // eslint() attaches the lint output to the "eslint" property of the file object so it can be used by other modules.
    .pipe(eslint.format()); // eslint.format() outputs the lint results to the console.
  // .pipe(eslint.failAfterError()); // Cause the stream to stop/fail before copying an invalid JS file to the output directory
}

// Lint Templates/HTML
function lintTemplates() {
  return src(paths.templates.src)
    .pipe(htmlHint('.htmlhintrc'))
    .pipe(htmlHint.reporter())
    .pipe(
      access({
        force: true,
        verbose: false,
        accessibilityLevel: 'WCAG2AA',
        ignore: [
          'WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
          'WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2',
          'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage'
        ]
      })
    )
    .on('error', console.log)
    .pipe(access.report({ reportType: 'json' }))
    .pipe(
      rename({
        extname: '.json'
      })
    )
    .pipe(jsonFormat(2))
    .pipe(dest(paths.logs.accessibility));
}

function buildTemplates() {
  return src(paths.templates.src)
    .pipe(gulpHandlebarsFileInclude('', { maxRecursion: 50 }))
    .pipe(replace('$*cdn', json.buildDirs[build].cdn))
    .pipe(dest(paths.templates.output));
}

// move config files to build
function buildConfig() {
  return src(paths.config.src).pipe(dest(paths.config.output));
}

// Optimise images
function minImages() {
  return src(paths.images.src)
    .pipe(changed(paths.images.dest))
    .pipe(
      imagemin({
        verbose: true
      })
    )
    .pipe(dest(paths.images.dest));
}

// This function checks index.html for cb=123 and replaces with current dateTime to bust cache
function cacheBust() {
  const cbString = new Date().getTime();
  return src([paths.server.baseDir])
    .pipe(replace(/\?cb=[0-9]*/gm, `?cb=${cbString}`))
    .pipe(dest('.'));
}

// Server
function server(done) {
  browserSync.init({
    server: {
      baseDir: paths.server.baseDir,
      routes: {
        '/build': './build/',
        '/_sourcemaps': './_sourcemaps/',
        '/components': './build/components/'
      }
    },
    port: paths.server.port
  });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}
const buildAll = series(
  determineBuild,
  cleanBuild,
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
  watch(paths.styles.src, buildStyles); // run buildStyles function on scss change(s)
  watch(paths.config.src, series(buildConfig, reload)); // Reload when config folder changes
}
const dev = series(
  lintScripts,
  lintTemplates,
  parallel(buildStyles, buildScripts, buildTemplates, buildConfig, minImages),
  cacheBust,
  parallel(watchFiles, server)
); // run buildStyles & minifyJS on start, series so () => run in an order and parallel so () => can run at same time
// Export items to be used in terminal
exports.default = dev;
exports.lintScripts = lintScripts;
exports.lintTemplates = lintTemplates;
exports.clean = cleanBuild;
exports.buildScripts = series(buildScripts, lintScripts);
exports.buildStyles = buildStyles;
exports.buildTemplates = series(buildTemplates, lintTemplates);
exports.buildConfig = buildConfig;
exports.minImages = minImages;
exports.buildAll = buildAll;
