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
// Image vars
const imagemin = require('gulp-imagemin');
// Live-reload server vars
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const ssi = require('connect-ssi');
// Other vars
const del = require('del');
const plumber = require('gulp-plumber');
const replace = require('gulp-replace');
const fs = require('fs');

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
    src: ['src/assets/sass/**/*.scss', 'src/components/**/*.scss', 'src/views/templates/**/*.scss'], // src of stlyes to watch
    minifySrc: ['src/assets/sass/wmn.scss', 'src/views/styleguide/styleguide.scss'], // List of scss file(s) which should be processed, linted & minified
    output: 'build/css/' // output location of minified styles
  },
  scripts: {
    src: ['src/assets/js/**/*.js', 'src/views/components/**/*.js'], // Src of JS files to watch
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
  components: {
    src: 'src/components/**/*.html',
    output: 'build/components/'
  },
  images: {
    src: 'src/assets/img/**/*',
    dest: 'build/img/'
  },
  config: {
    src: 'src/assets/config/**/*',
    output: 'build/config/'
  }
};

const getRoot = path => '../'.repeat(path.match(/\//gi).length); // Function which takes in a path and back counts slashes to get to baseRoot dir

// Clean the current build & _sourcemaps dir
function cleanBuild() {
  return del([paths.output, '_sourcemaps']);
}

// Process, lint, and minify Sass files
function buildStyles() {
  return src(paths.styles.minifySrc)
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Compile Sass
    .pipe(autoprefixer()) // Prefix css with older browser support
    .pipe(cleanCSS({ level: 2 })) // Minify css
    .pipe(sourcemaps.write(getRoot(paths.styles.output) + '_sourcemaps/'))
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
        errorHandler: function(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
        ignore: ['**/*.min.js']
      })
    )
    .pipe(concat(jsFile.minName)) // concat all js files in folder
    .pipe(uglify({ mangle: { reserved: ['jQuery'] } })) // Mangle var names etc.
    .pipe(sourcemaps.write(`${getRoot(paths.scripts.output)}_sourcemaps/`))
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
  // Loop through each minifySrc and check if it is to be linted
  const lintSrc = paths.scripts.minifySrc.map(jsFile =>
    jsFile.lint ? jsFile.src : '!' + jsFile.src
  );

  return src(['src/assets/js/wmn.js', 'src/components/**/*.js'])
    .pipe(eslint({ configFile: '.eslintrc.json' })) // eslint() attaches the lint output to the "eslint" property of the file object so it can be used by other modules.
    .pipe(eslint.format()); // eslint.format() outputs the lint results to the console.
  // .pipe(eslint.failAfterError()); // Cause the stream to stop/fail before copying an invalid JS file to the output directory
}

// Lint Templates/HTML
function lintTemplates() {
  return src([paths.templates.src, paths.components.src])
    .pipe(htmlHint('.htmlhintrc'))
    .pipe(htmlHint.reporter());
}

function buildTemplates() {
  return src(paths.templates.src)
    .pipe(replace('$*cdn', json.buildDirs[build].cdn))
    .pipe(dest(paths.templates.output));
}

function buildcomponents() {
  return src(paths.components.src)
    .pipe(replace('$*cdn', json.buildDirs[build].cdn))
    .pipe(dest(paths.components.output));
}

// move config files to build
function buildConfig() {
  return src(paths.config.src).pipe(dest(paths.config.output));
}

// Optimise images
function minImages() {
  return src(paths.images.src)
    .pipe(imagemin())
    .pipe(dest(paths.images.dest));
}

// This function checks index.html for cb=123 and replaces with current dateTime to bust cache
function cacheBust() {
  var cbString = new Date().getTime();
  return src([paths.server.baseDir])
    .pipe(replace(/\?cb=[0-9]*/gm, '?cb=' + cbString))
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
      },
      middleware: ssi({
        baseDir: paths.server.baseDir,
        ext: '.html'
      })
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
  buildcomponents,
  buildConfig,
  minImages,
  lintScripts,
  lintTemplates
);
// Watch files for changes
function watchFiles() {
  // Lint, concat, minify JS then reload server
  watch(paths.scripts.src, series(lintScripts, buildScripts, cacheBust, reload));
  watch(['./src/**/*.html'], series(lintTemplates, buildTemplates, buildcomponents, reload)); // Reload when html changes
  watch(paths.images.src, minImages);
  watch(paths.styles.src, buildStyles); // run buildStyles function on scss change(s)
  watch(paths.config.src, series(buildConfig, reload)); // Reload when config folder changes
}
const dev = series(
  lintScripts,
  lintTemplates,
  parallel(buildStyles, buildScripts, buildTemplates, buildcomponents, buildConfig, minImages),
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
exports.buildTemplates = series(buildTemplates, buildcomponents, lintTemplates);
exports.buildConfig = buildConfig;
exports.minImages = minImages;
exports.buildAll = buildAll;
