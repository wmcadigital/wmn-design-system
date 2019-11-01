module.exports = {
  output: 'build/', // Default output location for code build
  server: {
    port: 8080,
    baseDir: './build/',
    root: './build/'
  },
  styles: {
    src: ['src/assets/sass/**/*.scss', 'src/views/**/*.scss'], // src of styles to watch
    minifySrc: ['src/assets/sass/wmnds-components.scss', 'src/views/www/wmnds-website.scss'], // List of scss file(s) which should be processed, linted & minified
    output: 'build/css/', // output location of minified styles
    reactNativeSrc: 'src/assets/sass/wmnds-components.scss'
  },
  scripts: {
    src: ['src/assets/**/*.js', 'src/views/components/**/*.js', './src/views/www/**/*.js'], // Src of JS files to watch
    // List of JS folders to concatenate, lint and minified to one file (DON'T LINT ASSETS AS IT WILL TAKE TOO LONG TO SCAN MINIFIED LIBS)
    minifySrc: [
      // {
      //   src: 'src/views/components/**/*.js',
      //   minName: 'wmnds-components.min.js',
      //   lint: true
      // },
      // { src: 'src/assets/vendor/js/**/*.js', minName: 'wmnds-vendor.min.js', lint: false },
      {
        src: ['node_modules/babel-polyfill/dist/polyfill.js', 'src/views/www/**/*.js'],
        minName: 'wmnds-website.min.js',
        lint: true
      }
    ],
    output: 'build/js/' // Output location of minified JS files
  },
  nunjucks: {
    src: 'src/views/**/*.njk',
    websiteSrc: 'src/views/www/pages/**/*.njk',
    output: 'build/'
  },
  svgs: {
    src: 'src/assets/img/svgs/**/*.svg',
    dest: 'build/img/'
  },
  images: {
    src: ['src/assets/img/**/*', '!src/assets/img/svgs/*'],
    output: 'src/assets/img/**/*',
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
