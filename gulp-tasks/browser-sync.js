// Local requires
const browserSync = require('browser-sync').create();
const paths = require('./paths.js'); // List of all paths in a config

const startingBrowserSync = () => {
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

module.exports.browserSync = browserSync;
module.exports.startBrowserSync = startingBrowserSync;
module.exports.reload = reloadingBrowserSync;
