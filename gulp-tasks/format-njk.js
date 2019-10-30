// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();

module.exports = () => {
  return src('src/views/**/*.njk')
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
    .pipe(plugins.jsbeautifier.reporter())
    .pipe(dest(file => file.base));
};
