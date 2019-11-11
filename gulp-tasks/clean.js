const del = require('del');
const paths = require('./paths.js');

module.exports = () => {
  return del([paths.output, paths.logs.sourcemaps, paths.clean.a11y, paths.clean.tmp]);
};
