// Local requires
const browserSync = require('browser-sync').create();
const paths = require('./config.js'); // List of all paths in a config

module.exports.browserSync = () => {
  return browserSync.init({
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
};

module.exports.reload = done => {
  browserSync.reload();
  done();
};
