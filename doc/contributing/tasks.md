# 1. Tasks

This is a more in depth guide of the tasks that can be used within this project. Below will explain the context of when each task should be called and what it does.

All tasks are defined in `gulpfile.js`.

When referring to `{root}` below, we are referring to the base root of the project.

## 1.1. Contents

<!-- TOC -->

-   [1. Tasks](#markdown-header-1-tasks)
    -   [1.1. Contents](#markdown-header-11-contents)
    -   [1.2. Linting](#markdown-header-12-linting)
        -   [1.2.1. Scripts (Javascript)](#markdown-header-121-scripts-javascript)
            -   [1.2.1.1. Command](#markdown-header-1211-command)
            -   [1.2.1.2. What it does](#markdown-header-1212-what-it-does)
            -   [1.2.1.3. File(s) that are linted](#markdown-header-1213-files-that-are-linted)
            -   [1.2.1.4. Config](#markdown-header-1214-config)
        -   [1.2.2. Templates (HTML)](#markdown-header-122-templates-html)
            -   [1.2.2.1. Command](#markdown-header-1221-command)
            -   [1.2.2.2. What it does](#markdown-header-1222-what-it-does)
            -   [1.2.2.3. File(s) that are linted:](#markdown-header-1223-files-that-are-linted)
            -   [1.2.2.4. Config](#markdown-header-1224-config)
    -   [1.3. Cleaning](#markdown-header-13-cleaning)
        -   [1.3.0.5. Command](#markdown-header-1305-command)
        -   [1.3.0.6. What it does](#markdown-header-1306-what-it-does)
    -   [1.4. Building](#markdown-header-14-building)
        -   [1.4.1. Scripts (Javascript)](#markdown-header-141-scripts-javascript)
            -   [1.4.1.1. Command](#markdown-header-1411-command)
            -   [1.4.1.2. What it does](#markdown-header-1412-what-it-does)
        -   [1.4.2. Styles (Sass)](#markdown-header-142-styles-sass)
            -   [1.4.2.1. Command](#markdown-header-1421-command)
            -   [1.4.2.2. What it does](#markdown-header-1422-what-it-does)
        -   [1.4.3. Templates (HTML)](#markdown-header-143-templates-html)
            -   [1.4.3.1. Command](#markdown-header-1431-command)
            -   [1.4.3.2. What it does](#markdown-header-1432-what-it-does)
        -   [1.4.4. Images](#markdown-header-144-images)
            -   [1.4.4.1. Command](#markdown-header-1441-command)
            -   [1.4.4.2. What it does](#markdown-header-1442-what-it-does)
        -   [1.4.5. Config](#markdown-header-145-config)
            -   [1.4.5.1. Command](#markdown-header-1451-command)
            -   [1.4.5.2. What it does](#markdown-header-1452-what-it-does)
        -   [1.4.6. Build all](#markdown-header-146-build-all)
            -   [1.4.6.1. Command](#markdown-header-1461-command)
            -   [1.4.6.2. What it does](#markdown-header-1462-what-it-does)

<!-- /TOC -->

## 1.2. Linting

Linting is the process of analysing code for potential errors and flagging them to the developer.

### 1.2.1. Scripts (Javascript)

#### 1.2.1.1. Command

`npm run lint:scripts`

#### 1.2.1.2. What it does

-   Lints javascript files via ESLint to [airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) standards.
-   The lint errors are flagged up within the terminal or if you have an ESLint plugin within your code editor they will flag up within your editor of choice.

#### 1.2.1.3. File(s) that are linted

-   `{root}/src/assets/js/wmn.js`
-   `{root}/src/views/**/*.js`

`**/*.min.js` are ignored for linting as these files are presumed to have already been linted, mangled and minified.

#### 1.2.1.4. Config

The config files are located at:

-   `{root}/.eslintrc.json` (configuring how the linting should work)
-   `{root}/.eslintignore` (controlling what files should be ignored)
-   `{root}/.prettierrc` (general format of files e.g. spacing, single quotes/double quotes)
-   `{root}/.prettierignore` (files prettier should ignore)

### 1.2.2. Templates (HTML)

#### 1.2.2.1. Command

`npm run lint:templates`

#### 1.2.2.2. What it does

-   Lints html files via [htmlhint](https://www.npmjs.com/package/gulp-htmlhint).
-   Flags errors up in terminal.
-   Lints html files to ensure correct accessibility tags are used, these are up to [WCAG2AA standards](https://www.w3.org/WAI/GL/WCAG20/).
-   Produces a folder at `{root}/\_accessibility-logs/` which contains a directory structure exactly the same as the projects `{root}src/views/` directory. Within these folders is a json file which shows the accessibility errors/warnings for the html file referenced at the top of the file.

#### 1.2.2.3. File(s) that are linted:

-   `{root}/src/views/**/*.html`

#### 1.2.2.4. Config

The config files are located at:

-   `{root}/.htmlhintrc` (general formatting of html files e.g. unique ids, attributes in lower case, tag names match)

## 1.3. Cleaning

#### 1.3.0.5. Command

`npm run clean`

#### 1.3.0.6. What it does

-   Cleans the compiled/built directory by:
    -   Deleting `{root}/_accessibility-logs/` directory
    -   Deleting `{root}/_sourcemaps/` directory
    -   Deleting `{root}/build/` directory

## 1.4. Building

Build commands are used for when code is to be compiled to an output that is suitable for a particular environment.

### 1.4.1. Scripts (Javascript)

#### 1.4.1.1. Command

`npm run build:scripts`

#### 1.4.1.2. What it does

-   [Lints scripts](#markdown-header-scripts-javascript)
-   Compiles javascript files with babel
-   Concatenates all smaller javascript files together into one file
-   Mangles and minifies the file
-   Creates three files in `{root}/build/js/`
    -   `wmnds-website.min.js`
        -   Created from any javascript files found in `{root}/src/views/wmnds-website/**/*.js`
        -   For styleguide specific items only
    -   `vendor.min.js`
        -   Created from any javascript files found in `{root}/src/assets/js/vendor/**/*.js`
        -   For any vendor/third-party scripts that are required for components
    -   `wmn.min.js`
        -   Created from any javascript files found in `['src/assets/js/wmn.js', 'src/views/components/**/*.js']`
        -   For any custom javascript associated with a component
-   Creates sourcemaps in `{route}/_sourcemaps/`

### 1.4.2. Styles (Sass)

#### 1.4.2.1. Command

`npm run build:styles`

#### 1.4.2.2. What it does

-   Compiles sass
-   Uses [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) to parse CSS and add vendor prefixes
-   Minifies CSS
-   Creates two files in `{root}/build/css/`
    -   `wmnds-website.css`
        -   For styleguide specific styling
    -   `wmn.css`
        -   For any styling related to WMN components
-   Creates sourcemaps in `{route}/_sourcemaps/`

### 1.4.3. Templates (HTML)

#### 1.4.3.1. Command

`npm run build:templates`

#### 1.4.3.2. What it does

-   [Lint templates](#markdown-header-templates-html)
-   Compile all handlebar file includes using [gulp handlebars file include](https://www.npmjs.com/package/gulp-handlebars-file-include)
-   Outputs compiled files to `{route}/build/views/`

### 1.4.4. Images

#### 1.4.4.1. Command

`npm run build:images`

#### 1.4.4.2. What it does

-   Minifies all images located in `{root}/src/assets/img/**/*`
-   Outputs the minified images to `{root}/build/img/` with the exact same file name

### 1.4.5. Config

#### 1.4.5.1. Command

`npm run build:config`

#### 1.4.5.2. What it does

-   Moves `{root}/src/assets/config/**/*` to `{root}/build/config`

### 1.4.6. Build all

#### 1.4.6.1. Command

`npm run build:all`

#### 1.4.6.2. What it does

-   [`npm run clean`](#markdown-header-clean) (cleans the directory)
-   [`npm run build:images`](#markdown-header-images) (minifies images)
-   [`npm run build:styles`](#markdown-header-styles-sass) (build styles)
-   [`npm run build:scripts`](#markdown-header-scripts-javascript-1) (build scripts)
-   [`npm run build:templates`](#markdown-header-templates-html-1) (build templates)
-   [`npm run build:config`](#markdown-header-config-2) (build config)
-   [`npm run lint:scripts`](#markdown-header-scripts-javascript) (lint scripts)
-   [`npm run lint:templates`](#markdown-header-templates-html) (lint templates)
