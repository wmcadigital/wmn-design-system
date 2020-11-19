// Gulp requires
const fs = require('fs');
const path = require('path');
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
// Local requires
const paths = require('./paths.js');
const { packageJson, build } = require('./utils');
// Data requires
const njkData = require('../src/www/data.njk.json');

// Automatically parse json from data files
// Data files must have the same name as their parent directory and have the extension .njk.json
const getNjkData = ({ path: filePath }) => {
  const dataFilePath = `${path.dirname(filePath)}/${
    path.dirname(filePath).split('/').slice(-1)[0]
  }.njk.json`;
  return fs.existsSync(dataFilePath) && JSON.parse(fs.readFileSync(dataFilePath));
};

// Check for upcoming version number in node env (will be set during release workflow)
const versionNumber = process.env.VERSION_NUMBER || packageJson.version;

module.exports.buildTemplates = () => {
  return src(paths.nunjucks.websiteSrc)
    .pipe(plugins.data(() => njkData))
    .pipe(plugins.data(file => getNjkData(file)))
    .pipe(
      plugins.nunjucksRender({
        path: 'src/',
        watch: true
      })
    )
    .pipe(plugins.replace('$*cdn', packageJson.buildDirs[build].cdn))
    .pipe(plugins.replace('$*version', versionNumber))
    .pipe(plugins.formatHtml())
    .pipe(plugins.htmlmin({ removeComments: true, collapseWhitespace: true }))
    .pipe(dest(paths.nunjucks.output));
};

// Copy njk components into build folder
module.exports.buildComponents = () => {
  return src(paths.nunjucks.componentSrc)
    .pipe(plugins.flatten({ includeParents: [4, 4] }))
    .pipe(plugins.replace('from "wmnds/', 'from "'))
    .pipe(dest(paths.nunjucks.componentOutput));
};
