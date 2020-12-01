// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
const webpack = require('webpack-stream');
// Local requires
const paths = require('./paths.js');
const { packageJson, build } = require('./utils');

const buildMode = build !== 'local' ? 'production' : 'development'; // If the build isn't local then set the buildMode of webpack to production (it will hide sourcemaps and minify code)
// Placeholder function for buildScripts to loop through
function minifyJS(jsFile) {
  return src(jsFile.src)
    .pipe(
      plugins.plumber({
        errorHandler(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    .pipe(plugins.replace('$*cdn', packageJson.buildDirs[build].cdn))
    .pipe(
      webpack({
        config: {
          module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude: [/node_modules/],
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      [
                        '@babel/preset-env',
                        {
                          targets: {
                            browsers: ['ie >= 11']
                          }
                        }
                      ]
                    ]
                  }
                }
              }
            ]
          },
          mode: buildMode, // detemined by buildMode const above
          devtool: 'source-map', // Set a sourcemap for this build
          output: { filename: jsFile.minName } // output name of the bundled js
        }
      })
    )
    .pipe(plugins.plumber.stop())
    .pipe(dest(paths.scripts.output)); // Spit out concat + minified file in ./build/
}

// Minify, and concatenate scripts
module.exports = done => {
  paths.scripts.minifySrc.map(jsFile => minifyJS(jsFile));
  done();
};
