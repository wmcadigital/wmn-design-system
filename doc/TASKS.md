# Tasks

This is a more in depth guide of the tasks that can be used within this project. Below will explain the context of when each task should be called and what it does.

All tasks are defined in `gulpfile.js`.

When referring to `{root}` below, we are referring to the base root of the project.

## Contents

- [Linting](#markdown-header-linting)
  - [Scripts (Javascript)](#markdown-header-scripts-javascript)
  - [Templates (HTML)](#markdown-header-templates-html)
- [Cleaning](#markdown-header-clean)
- [Building](#markdown-header-building)
  - [Scripts (Javascript)](#markdown-header-scripts-javascript-1)
  - [Styles (Sass)](#markdown-header-styles-sass)
  - [Templates (HTML)](#markdown-header-templates-html-1)
  - [Images](#markdown-header-images)
  - [Config](#markdown-header-config-2)
  - [Build all](#markdown-header-build-all)

## Linting

Linting is the process of analysing code for potential errors and flagging them to the developer.

### Scripts (Javascript)

#### Command

`npm run lint:scripts`

#### What it does

- Lints javascript files via ESLint to [airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) standards.
- The lint errors are flagged up within the terminal or if you have an ESLint plugin within your code editor they will flag up within your editor of choice.

#### File(s) that are linted

- `{root}/src/assets/js/wmn.js`
- `{root}/src/views/**/*.js`

`**/*.min.js` are ignored for linting as these files are presumed to have already been linted, mangled and minified.

#### Config

The config files are located at:

- `{root}/.eslintrc.json` (configuring how the linting should work)
- `{root}/.eslintignore` (controlling what files should be ignored)
- `{root}/.prettierrc` (general format of files e.g. spacing, single quotes/double quotes)
- `{root}/.prettierignore` (files prettier should ignore)

### Templates (HTML)

#### Command

`npm run lint:templates`

#### What it does

- Lints html files via [htmlhint](https://www.npmjs.com/package/gulp-htmlhint).
- Flags errors up in terminal.
- Lints html files to ensure correct accessibility tags are used, these are up to [WCAG2AA standards](https://www.w3.org/WAI/GL/WCAG20/).
- Produces a folder at `{root}/\_accessibility-logs/` which contains a directory structure exactly the same as the projects `{root}src/views/` directory. Within these folders is a json file which shows the accessibility errors/warnings for the html file referenced at the top of the file.

#### File(s) that are linted:

- `{root}/src/views/**/*.html`

#### Config

The config files are located at:

- `{root}/.htmlhintrc` (general formatting of html files e.g. unique ids, attributes in lower case, tag names match)

## Cleaning

#### Command

`npm run clean`

#### What it does

- Cleans the compiled/built directory by:
  - Deleting `{root}/_accessibility-logs/` directory
  - Deleting `{root}/_sourcemaps/` directory
  - Deleting `{root}/build/` directory

## Building

Build commands are used for when code is to be compiled to an output that is suitable for a particular environment.

### Scripts (Javascript)

#### Command

`npm run build:scripts`

#### What it does

- [Lints scripts](#markdown-header-scripts-javascript)
- Compiles javascript files with babel
- Concatenates all smaller javascript files together into one file
- Mangles and minifies the file
- Creates three files in `{root}/build/js/`
  - `styleguide.min.js`
    - Created from any javascript files found in `{root}/src/views/styleguide/**/*.js`
    - For styleguide specific items only
  - `vendor.min.js`
    - Created from any javascript files found in `{root}/src/assets/js/vendor/**/*.js`
    - For any vendor/third-party scripts that are required for components
  - `wmn.min.js`
    - Created from any javascript files found in `['src/assets/js/wmn.js', 'src/views/components/**/*.js']`
    - For any custom javascript associated with a component
- Creates sourcemaps in `{route}/_sourcemaps/`

### Styles (Sass)

#### Command

`npm run build:styles`

#### What it does

- Compiles sass
- Uses [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) to parse CSS and add vendor prefixes
- Minifies CSS
- Creates two files in `{root}/build/css/`
  - `styleguide.css`
    - For styleguide specific styling
  - `wmn.css`
    - For any styling related to WMN components
- Creates sourcemaps in `{route}/_sourcemaps/`

### Templates (HTML)

#### Command

`npm run build:templates`

#### What it does

- [Lint templates](#markdown-header-templates-html)
- Compile all handlebar file includes using [gulp handlebars file include](https://www.npmjs.com/package/gulp-handlebars-file-include)
- Outputs compiled files to `{route}/build/views/`

### Images

#### Command

`npm run build:images`

#### What it does

- Minifies all images located in `{root}/src/assets/img/**/*`
- Outputs the minified images to `{root}/build/img/` with the exact same file name

### Config

#### Command

`npm run build:config`

#### What it does

- Moves `{root}/src/assets/config/**/*` to `{root}/build/config`

### Build all

#### Command

`npm run build:all`

#### What it does

- [`npm run clean`](#markdown-header-clean) (cleans the directory)
- [`npm run build:images`](#markdown-header-images) (minifies images)
- [`npm run build:styles`](#markdown-header-styles-sass) (build styles)
- [`npm run build:scripts`](#markdown-header-scripts-javascript-1) (build scripts)
- [`npm run build:templates`](#markdown-header-templates-html-1) (build templates)
- [`npm run build:config`](#markdown-header-config-2) (build config)
- [`npm run lint:scripts`](#markdown-header-scripts-javascript) (lint scripts)
- [`npm run lint:templates`](#markdown-header-templates-html) (lint templates)
