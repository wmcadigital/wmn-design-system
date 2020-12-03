// Local requires
const browserSync = require('browser-sync').create();
const paths = require('./paths.js'); // List of all paths in a config

const startBrowserSync = () => {
  return browserSync.init({
    server: {
      baseDir: paths.server.baseDir,
      routes: {
        '/_sourcemaps': './_sourcemaps'
      }
    },
    port: paths.server.port
  });
};

const reloadingBrowserSync = done => {
  browserSync.reload();
  done();
};

module.exports.browserSync = startBrowserSync;
module.exports.reload = reloadingBrowserSync;
