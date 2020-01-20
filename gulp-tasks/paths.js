module.exports = {
  output: 'build/', // Default output location for code build
  server: {
    port: 8080,
    baseDir: './build/',
    root: './build/'
  },
  styles: {
    src: ['src/views/**/*.scss'], // src of styles to watch
    minifySrc: ['src/views/wmnds/assets/sass/wmnds-components.scss', 'src/views/www/wmnds-website.scss'], // List of scss file(s) which should be processed, linted & minified
    output: 'build/css/', // output location of minified styles
    reactNativeSrc: 'src/views/wmnds/assets/sass/wmnds-components.scss'
  },
  scripts: {
    src: ['src/views/**/*.js'], // Src of JS files to watch
    // List of JS folders to concatenate, lint and minified to one file (DON'T LINT ASSETS AS IT WILL TAKE TOO LONG TO SCAN MINIFIED LIBS)
    minifySrc: [
      {
        src: 'src/views/www/wmnds-website.js',
        minName: 'wmnds-website.min.js',
        lint: true
      }
    ],
    output: 'build/js/' // Output location of minified JS files
  },
  nunjucks: {
    src: 'src/views/**/*.njk', // Used for watching njk files
    websiteSrc: 'src/views/www/pages/**/*.njk',
    output: 'build/'
  },
  svgs: {
    src: 'src/views/wmnds/assets/icon/**/*.svg',
    dest: 'build/img/'
  },
  images: {
    src: ['src/views/wmnds/assets/img/**/*'],
    output: 'src/views/wmnds/assets/img/**/*',
    dest: 'build/img/'
  },
  config: {
    src: 'src/views/www/assets/config/**/*',
    output: 'build/config/'
  },
  logs: {
    sourcemaps: '_sourcemaps/'
  },
  clean: {
    a11y: './src/views/www/pages/**/a11y-report.json',
    tmp: './src/views/www/pages/**/.tmp'
  }
};
