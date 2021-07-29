// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const path = require('path');
const paths = require('./paths.js');

const spritingSVGs = () => {
  return src(paths.svgs.src)
    .pipe(
      plugins.rename(file => {
        const newName = file;
        const name = file.dirname.split(path.sep);
        name.push(file.basename);
        name.unshift('tfwmds');
        newName.basename = name.join('-');
      })
    )
    .pipe(
      plugins.cheerio({
        run: $ => {
          $('[fill]').removeAttr('fill');
        },
        parserOptions: { xmlMode: true }
      })
    )
    .pipe(
      plugins.svgmin(() => {
        return {
          plugins: [
            {
              removeViewBox: false
            }
          ]
        };
      })
    )
    .pipe(plugins.svgstore())
    .pipe(plugins.rename({ basename: 'tfwmds-icons', extname: '.min.svg' }))
    .pipe(dest(paths.svgs.dest));
};

module.exports = spritingSVGs;
