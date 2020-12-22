// Gulp requires
const { src } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const paths = require('./paths.js');

const lintingStyles = () => {
  return src(paths.styles.src)
    .pipe(
      plugins.sassLint({
        configFile: '.sass-lint.yml'
      })
    )
    .pipe(plugins.sassLint.format());
};

module.exports = lintingStyles;
