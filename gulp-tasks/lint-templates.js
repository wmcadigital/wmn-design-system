// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const paths = require('./config.js');

module.exports = () => {
  return src(paths.nunjucks.src)
    .pipe(plugins.htmlhint('.htmlhintrc'))
    .pipe(plugins.htmlhint.reporter())
    .pipe(
      plugins.accessibility({
        force: true,
        verbose: false,
        accessibilityLevel: 'WCAG2AA',
        ignore: [
          'WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
          'WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2',
          'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage'
        ]
      })
    )
    .on('error', console.log)
    .pipe(plugins.accessibility.report({ reportType: 'json' }))
    .pipe(
      plugins.rename({
        extname: '.json'
      })
    )
    .pipe(plugins.jsonFormat(2))
    .pipe(dest(paths.logs.accessibility));
};
