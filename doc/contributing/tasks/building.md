# 1. Building

Build commands are used for when code is to be compiled to an output that is suitable for a particular environment.

## 1.1. Table of contents

<!-- TOC -->

- [1. Building](#1-building)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Scripts (Javascript)](#12-scripts-javascript)
    - [1.2.1. Command](#121-command)
    - [1.2.2. What it does](#122-what-it-does)
  - [1.3. Styles (Sass)](#13-styles-sass)
    - [1.3.1. Command](#131-command)
    - [1.3.2. What it does](#132-what-it-does)
  - [1.4. Templates (HTML)](#14-templates-html)
    - [1.4.1. Command](#141-command)
    - [1.4.2. What it does](#142-what-it-does)
  - [1.5. Images](#15-images)
    - [1.5.1. Command](#151-command)
    - [1.5.2. What it does](#152-what-it-does)
  - [1.6. Config](#16-config)
    - [1.6.1. Command](#161-command)
    - [1.6.2. What it does](#162-what-it-does)
  - [1.7. Build all](#17-build-all)
    - [1.7.1. Command](#171-command)
    - [1.7.2. What it does](#172-what-it-does)

<!-- /TOC -->

## 1.2. Scripts (Javascript)

### 1.2.1. Command

`npm run build:scripts`

### 1.2.2. What it does

- [Lints scripts](#markdown-header-scripts-javascript)
- Compiles javascript files with babel
- Concatenates all smaller javascript files together into one file
- Mangles and minifies the file
- Creates three files in `{root}/build/js/`
  - `wmnds-website.min.js`
    - Created from any javascript files found in `{root}/src/views/wmnds-website/**/*.js`
    - For styleguide specific items only
  - `vendor.min.js`
    - Created from any javascript files found in `{root}/src/assets/js/vendor/**/*.js`
    - For any vendor/third-party scripts that are required for components
  - `wmn.min.js`
    - Created from any javascript files found in `['src/assets/js/wmn.js', 'src/views/components/**/*.js']`
    - For any custom javascript associated with a component
- Creates sourcemaps in `{route}/_sourcemaps/`

## 1.3. Styles (Sass)

### 1.3.1. Command

`npm run build:styles`

### 1.3.2. What it does

- Compiles sass
- Uses [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) to parse CSS and add vendor prefixes
- Minifies CSS
- Creates two files in `{root}/build/css/`
  - `wmnds-website.css`
    - For styleguide specific styling
  - `wmn.css`
    - For any styling related to WMN components
- Creates sourcemaps in `{route}/_sourcemaps/`

## 1.4. Templates (HTML)

### 1.4.1. Command

`npm run build:templates`

### 1.4.2. What it does

- [Lint templates](#markdown-header-templates-html)
- Compile all handlebar file includes using [gulp handlebars file include](https://www.npmjs.com/package/gulp-handlebars-file-include)
- Outputs compiled files to `{route}/build/views/`

## 1.5. Images

### 1.5.1. Command

`npm run build:images`

### 1.5.2. What it does

- Minifies all images located in `{root}/src/assets/img/**/*`
- Outputs the minified images to `{root}/build/img/` with the exact same file name

## 1.6. Config

### 1.6.1. Command

`npm run build:config`

### 1.6.2. What it does

- Moves `{root}/src/assets/config/**/*` to `{root}/build/config`

## 1.7. Build all

### 1.7.1. Command

`npm run build:all`

### 1.7.2. What it does

- [`npm run clean`](#markdown-header-clean) (cleans the directory)
- [`npm run build:images`](#markdown-header-images) (minifies images)
- [`npm run build:styles`](#markdown-header-styles-sass) (build styles)
- [`npm run build:scripts`](#markdown-header-scripts-javascript-1) (build scripts)
- [`npm run build:templates`](#markdown-header-templates-html-1) (build templates)
- [`npm run build:config`](#markdown-header-config-2) (build config)
- [`npm run lint:scripts`](#markdown-header-scripts-javascript) (lint scripts)
- [`npm run lint:templates`](#markdown-header-templates-html) (lint templates)
