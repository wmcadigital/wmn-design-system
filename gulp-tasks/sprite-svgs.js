// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const path = require('path');
const paths = require('./paths.js');

module.exports = () => {
  return src(paths.svgs.src)
    .pipe(plugins.rename({ prefix: 'wmnds-' }))
    .pipe(
      plugins.cheerio({
        run: $ => {
          $('[fill]').removeAttr('fill');
        },
        parserOptions: { xmlMode: true }
      })
    )
    .pipe(
      plugins.svgmin(file => {
        const prefix = path.basename(file.relative, path.extname(file.relative));
        return {
          plugins: [
            {
              removeViewBox: false
            },
            {
              cleanupIDs: {
                prefix: `${prefix}-`,
                minify: true
              }
            }
          ]
        };
      })
    )
    .pipe(plugins.svgstore())
    .pipe(plugins.rename({ basename: 'svg-sprite', extname: '.min.svg' }))
    .pipe(dest(paths.svgs.dest));
};
