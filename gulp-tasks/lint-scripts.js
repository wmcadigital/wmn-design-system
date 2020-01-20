// Gulp requires
const { src } = require('gulp');
const plugins = require('gulp-load-plugins')();

module.exports = () => {
  return src('src/**/*.js')
    .pipe(plugins.eslint({ configFile: './.eslintrc.json' })) // eslint() attaches the lint output to the "eslint" property of the file object so it can be used by other modules.
    .pipe(plugins.eslint.format()); // eslint.format() outputs the lint results to the console.
  // .pipe(eslint.failAfterError()); // Cause the stream to stop/fail before copying an invalid JS file to the output directory
};
