/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const fs = require('fs');
const paths = require('./paths.js');
const { packageJson, build } = require('./utils');

// Check for upcoming version number in node env (will be set during release workflow)
const versionNumber = process.env.VERSION_NUMBER || packageJson.version;

// Merge njk json files together
module.exports.buildJSONForTemplates = () => {
  return src(paths.njkData.src)
    .pipe(plugins.mergeJson({ fileName: 'merged.njk.json' }))
    .pipe(dest(paths.njkData.output));
};

// Build nunjucks templates with compiled data above
module.exports.buildTemplates = () => {
  // De-caching for Data files
  return (
    src(paths.nunjucks.websiteSrc)
      // get our merged json object so we can pass it to nunjucks templates to render
      .pipe(
        plugins.data(() => {
          return JSON.parse(fs.readFileSync(`${paths.njkData.output}merged.njk.json`));
        })
      )
      .pipe(
        plugins.nunjucksRender({
          path: 'src/',
          envOptions: {
            noCache: true
          }
        })
      )
      .pipe(plugins.replace('$*cdn', packageJson.buildDirs[build].cdn))
      .pipe(plugins.replace('$*version', versionNumber))
      .pipe(plugins.formatHtml())
      .pipe(plugins.htmlmin({ removeComments: true, collapseWhitespace: true }))
      .pipe(dest(paths.nunjucks.output))
  );
};

// Copy njk components into build folder
module.exports.buildComponents = () => {
  return src(paths.nunjucks.componentSrc)
    .pipe(plugins.flatten({ includeParents: [4, 4] }))
    .pipe(plugins.replace('from "wmnds/', 'from "'))
    .pipe(dest(paths.nunjucks.componentOutput));
};
