// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const paths = require('./paths.js');
const { packageJson, build } = require('./utils');
const njkData = require('../src/views/www/data.njk.json');

// module.exports = () => {
//   return src(`${paths.nunjucks.output}**/*.html`)
//     .pipe(plugins.htmlhint('.htmlhintrc'))
//     .pipe(plugins.htmlhint.reporter())
//     .pipe(
//       plugins.accessibility({
//         force: true,
//         verbose: false,
//         accessibilityLevel: 'WCAG2AA',
//         ignore: [
//           'WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
//           'WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2',
//           'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage'
//         ]
//       })
//     )
//     .on('error', console.log)
//     .pipe(plugins.accessibility.report({ reportType: 'json' }))
//     .pipe(
//       plugins.rename({
//         extname: '.json'
//       })
//     )
//     .pipe(plugins.jsonFormat(2))
//     .pipe(dest(paths.logs.accessibility));
// };

module.exports = () => {
  return src(paths.nunjucks.websiteSrc)
    .pipe(plugins.data(() => njkData))
    .pipe(
      plugins.nunjucksRender({
        path: 'src/views/',
        watch: true
      })
    )
    .pipe(plugins.replace('$*cdn', packageJson.buildDirs[build].cdn))
    .pipe(plugins.formatHtml())
    .pipe(plugins.htmlhint('.htmlhintrc'))
    .pipe(plugins.htmlhint.reporter())
    .pipe(
      plugins.accessibility({
        force: true,
        verbose: false,
        accessibilityLevel: 'WCAG2AA',
        ignore: [
          // 'WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
          // 'WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2',
          'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage'
        ]
      })
    )
    .pipe(plugins.accessibility.report({ reportType: 'json' }))
    .pipe(
      plugins.rename({
        basename: 'a11y-report',
        extname: '.json'
      })
    )
    .pipe(plugins.jsonFormat(2))
    .pipe(dest(file => file.base));
};
