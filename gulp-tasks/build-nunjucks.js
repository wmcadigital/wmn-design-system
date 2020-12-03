const DOMPurify = require('dompurify');
// Gulp requires
const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
const beautify = require('js-beautify').html;
// Local requires
const fs = require('fs');
const markdown = require('nunjucks-markdown');
const marked = require('marked');
const paths = require('./paths.js');
const { packageJson, build } = require('./utils');
// Check for upcoming version number in node env (will be set during release workflow)
const versionNumber = process.env.VERSION_NUMBER || packageJson.version;

// Merge njk json files together
const mergingJSONFiles = () => {
  return src(paths.njkData.src)
    .pipe(plugins.mergeJson({ fileName: 'merged.njk.json' }))
    .pipe(dest(paths.njkData.output));
};

const manageEnv = env => {
  // Custom Filters
  // This filter beautify's our html, useful for the pre/code blocks in component-example.njk
  env.addFilter('formtHTML', html => {
    const beautifulHTML = beautify(html.trim(), {
      indent_size: 2,
      end_with_newline: true,
      // If there are multiple blank lines, reduce down to one blank new line.
      max_preserve_newlines: 0,
      // set unformatted to a small group of elements, not all inline (the default)
      // otherwise tags like label arent indented properly
      unformatted: ['code', 'pre', 'em', 'strong']
    });

    return beautifulHTML;
  });

  // Enable the use of markdown when used within {% markdown %} {% endmarkdown %}
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitizer: markdownString =>
      DOMPurify.sanitize(markdownString, {
        USE_PROFILES: { svg: true, svgFilters: true, html: true },
        SAFE_FOR_TEMPLATES: true
      }),
    smartLists: true,
    smartypants: false
  });

  markdown.register(env, marked);
};

// Build nunjucks templates with compiled data above
const buildingTemplates = () => {
  // De-caching for Data files
  return (
    src(paths.nunjucks.websiteSrc)
      // get our merged json object so we can pass it to nunjucks templates to render
      .pipe(
        plugins.data(() => {
          return JSON.parse(fs.readFileSync(`${paths.njkData.output}merged.njk.json`));
        })
      )
      // Note: we remove the extension off the file and add .html in the next step. This allows us to use custom exentions like .njk.md
      .pipe(
        plugins.nunjucksRender({
          path: 'src/',
          ext: '',
          envOptions: {
            noCache: true
          },
          manageEnv
        })
      )
      .pipe(plugins.rename({ extname: '.html' }))
      .pipe(plugins.replace('$*cdn', packageJson.buildDirs[build].cdn))
      .pipe(plugins.replace('$*version', versionNumber))
      .pipe(plugins.formatHtml())
      .pipe(plugins.htmlmin({ removeComments: true, collapseWhitespace: true }))
      .pipe(dest(paths.nunjucks.output))
  );
};

// Copy njk components into build folder
const buildingComponentsForLive = () => {
  return src(paths.nunjucks.componentSrc)
    .pipe(plugins.flatten({ includeParents: [4, 4] }))
    .pipe(plugins.replace('from "wmnds/', 'from "'))
    .pipe(dest(paths.nunjucks.componentOutput));
};

module.exports.buildJSONForTemplates = mergingJSONFiles;
module.exports.buildTemplates = buildingTemplates;
module.exports.buildComponents = buildingComponentsForLive;
