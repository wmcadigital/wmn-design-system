// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
const del = require('del');
// Local requires
const nodePath = require('path');
const paths = require('./paths.js');
const { packageJson, build } = require('./utils');
const njkData = require('../src/www/data.njk.json');

module.exports = () => {
  return (
    src(paths.nunjucks.websiteSrc, { base: '.' })
      // Build nunjucks files into HTML so we can run a11y checker on them later
      .pipe(plugins.data(() => njkData))
      .pipe(
        plugins.nunjucksRender({
          path: 'src/',
          watch: true
        })
      )
      .pipe(plugins.replace('$*cdn', packageJson.buildDirs[build].cdn))
      .pipe(plugins.formatHtml())
      // We want to set dirname to /.tmp to dump our html files into for the a11y checker
      .pipe(
        plugins.rename(path => {
          const filepath = path;
          filepath.dirname += '/.tmp';
        })
      )
      .pipe(dest(file => file.base))
      // Run htmlhint and a11y checker
      .pipe(plugins.htmlhint('.htmlhintrc'))
      .pipe(plugins.htmlhint.reporter())
      .pipe(
        plugins.accessibility({
          force: true,
          verbose: false,
          accessibilityLevel: 'WCAG2AA',
          ignore: ['WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage']
        })
      )
      .pipe(plugins.accessibility.report({ reportType: 'json' }))
      // Name all reports a11y-report.json and stick them in same dir as the file effected
      .pipe(
        plugins.rename(path => {
          const filepath = path; // set var to path
          filepath.dirname = nodePath.join(filepath.dirname, '..'); // Then go to the parent directory
          filepath.basename = 'a11y-report';
          filepath.extname = '.json';
        })
      )
      .pipe(plugins.jsonFormat(2))
      .pipe(dest(file => file.base))
      // Then clean-up, by deleting all tmp folders with the html inside
      .on('end', () => {
        return del(paths.clean.tmp);
      })
  );
};
