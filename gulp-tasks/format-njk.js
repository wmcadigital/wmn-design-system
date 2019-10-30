// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const paths = require('./paths.js');

// Work in progress as it's currently causing loops

module.exports = () => {
  return src(paths.nunjucks.src)
    .pipe(plugins.changed(paths.nunjucks.src))
    .pipe(
      plugins.jsbeautifier({
        html: {
          file_types: ['.njk'],
          indent_size: 2,
          indent_inner_html: true,
          wrap_line_length: 100
        }
      })
    )
    .pipe(plugins.jsbeautifier.validate())
    .pipe(plugins.jsbeautifier.reporter())
    .pipe(dest(file => file.base));
};
