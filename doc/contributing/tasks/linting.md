# 1. Linting

Linting is the process of analysing code for potential errors and flagging them to the developer.

## 1.1. Table of contents

<!-- TOC -->

- [1. Linting](#1-linting)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Styles (Sass/CSS)](#12-styles-sasscss)
    - [1.2.1. Command](#121-command)
    - [1.2.2. What it does](#122-what-it-does)
    - [1.2.3. File(s) that are linted](#123-files-that-are-linted)
    - [1.2.4. Config](#124-config)
  - [1.3. Templates (HTML)](#13-templates-html)
    - [1.3.1. Command](#131-command)
    - [1.3.2. What it does](#132-what-it-does)
    - [1.3.3. File(s) that are linted:](#133-files-that-are-linted)
    - [1.3.4. Config](#134-config)
  - [1.4. Scripts (Javascript)](#14-scripts-javascript)
    - [1.4.1. Command](#141-command)
    - [1.4.2. What it does](#142-what-it-does)
    - [1.4.3. File(s) that are linted](#143-files-that-are-linted)
    - [1.4.4. Config](#144-config)
  - [1.5. Lint all](#15-lint-all)
    - [1.5.1. Command](#151-command)
    - [1.5.2. What it does](#152-what-it-does)

<!-- /TOC -->

## 1.2. Styles (Sass/CSS)

### 1.2.1. Command

`npm run lint:styles`

### 1.2.2. What it does

- Lints scss files via [sass-lint](https://www.npmjs.com/package/sass-lint).
- Flags sass errors up in terminal.
- If you have the [Sass lint VSCode plugin](https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint) or your code editor's equivalent, then the issues will flag up in your code editor too.

### 1.2.3. File(s) that are linted

- `{root}/src/assets/sass/**/*.scss`
- `{root}/src/**/*.scss`

### 1.2.4. Config

The config files are located at:

- `{root}/sass-lint.yml` (configures the sass lint rules)
- `{root}/gulp-tasks/lint-styles.js` (gulp task config)

## 1.3. Templates (HTML)

### 1.3.1. Command

`npm run lint:templates`

### 1.3.2. What it does

- Lints html files via [htmlhint](https://www.npmjs.com/package/gulp-htmlhint).
- Flags errors up in terminal.
- Lints html files to ensure correct accessibility tags are used, these are up to [WCAG2AA standards](https://www.w3.org/WAI/GL/WCAG20/).
- Produces a folder at `{root}/\_accessibility-logs/` which contains a directory structure exactly the same as the projects `{root}src/` directory. Within these folders is a json file which shows the accessibility errors/warnings for the html file referenced at the top of the file.

### 1.3.3. File(s) that are linted:

- `{root}/build/**/*.html`

### 1.3.4. Config

The config files are located at:

- `{root}/.htmlhintrc` (general formatting of html files e.g. unique ids, attributes in lower case, tag names match)
- `{root}/gulp-tasks/lint-templates.js` (gulp task config)

## 1.4. Scripts (Javascript)

### 1.4.1. Command

`npm run lint:scripts`

### 1.4.2. What it does

- Lints javascript files via ESLint to [airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) standards.
- The lint errors are flagged up within the terminal or if you have an ESLint plugin within your code editor they will flag up within your editor of choice.

### 1.4.3. File(s) that are linted

- `{root}/src/assets/js/tfwm.js`
- `{root}/src/**/*.js`

`**/*.min.js` are ignored for linting as these files are presumed to have already been linted, mangled and minified.

### 1.4.4. Config

The config files are located at:

- `{root}/.eslintrc.json` (configuring how the linting should work)
- `{root}/.eslintignore` (controlling what files should be ignored)
- `{root}/.prettierrc` (general format of files e.g. spacing, single quotes/double quotes)
- `{root}/.prettierignore` (files prettier should ignore)
- `{root}/gulp-tasks/lint-scripts.js` (gulp task config)

## 1.5. Lint all

### 1.5.1. Command

`npm run lint:all`

### 1.5.2. What it does

- [`npm run lint:styles`](#12-styles-sasscss) (lint styles)
- [`npm run lint:templates`](#13-templates-html) (lint templates)
- [`npm run lint:scripts`](#14-scripts-javascript) (lint scripts)
