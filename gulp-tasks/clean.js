// Local requires
const del = require('del');
const paths = require('./config.js');

module.exports = () => {
  return del([paths.output, paths.logs.sourcemaps, paths.logs.accessibility]);
};
