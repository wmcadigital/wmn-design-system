# 1. Building

Build commands are used for when code is to be compiled to an output that is suitable for a particular environment.

## 1.1. Table of contents

<!-- TOC -->

- [1. Building](#1-building)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Styles (Sass)](#12-styles-sass)
    - [1.2.1. Command](#121-command)
    - [1.2.2. What it does](#122-what-it-does)
  - [1.3. Templates (HTML)](#13-templates-html)
    - [1.3.1. Command](#131-command)
    - [1.3.2. What it does](#132-what-it-does)
  - [1.4. Scripts (Javascript)](#14-scripts-javascript)
    - [1.4.1. Command](#141-command)
    - [1.4.2. What it does](#142-what-it-does)
  - [1.5. Images](#15-images)
    - [1.5.1. Command](#151-command)
    - [1.5.2. What it does](#152-what-it-does)
  - [1.6. Sprites](#16-sprites)
    - [1.6.1. Command](#161-command)
  - [1.7. Config](#17-config)
    - [1.7.1. Command](#171-command)
    - [1.7.2. What it does](#172-what-it-does)
  - [1.8. Build all](#18-build-all)
    - [1.8.1. Command](#181-command)
    - [1.8.2. What it does](#182-what-it-does)

<!-- /TOC -->

## 1.2. Styles (Sass)

### 1.2.1. Command

`npm run build:styles`

### 1.2.2. What it does

- Compiles sass
- Uses [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) to parse CSS and add vendor prefixes
- Minifies CSS
- Creates two files in `{root}/build/css/`
  - `tfwmds-website.css`
    - For styleguide specific styling
  - `tfwm.css`
    - For any styling related to TfWM components
- Creates sourcemaps in `{route}/_sourcemaps/`

## 1.3. Templates (HTML)

### 1.3.1. Command

`npm run build:templates`

### 1.3.2. What it does

- [Lint templates](#markdown-header-templates-html)
- Compile all handlebar file includes using [gulp handlebars file include](https://www.npmjs.com/package/gulp-handlebars-file-include)
- Outputs compiled files to `{route}/build/views/`

## 1.4. Scripts (Javascript)

### 1.4.1. Command

`npm run build:scripts`

### 1.4.2. What it does

- [Lints scripts](#markdown-header-scripts-javascript)
- Compiles javascript files with babel
- Concatenates all smaller javascript files together into one file
- Mangles and minifies the file
- Creates three files in `{root}/build/js/`
  - `tfwmds-website.min.js`
    - Created from any javascript files found in `{root}/src/tfwmds-website/**/*.js`
    - For styleguide specific items only
  - `vendor.min.js`
    - Created from any javascript files found in `{root}/src/assets/js/vendor/**/*.js`
    - For any vendor/third-party scripts that are required for components
  - `tfwm.min.js`
    - Created from any javascript files found in `['src/assets/js/tfwm.js', 'src/components/**/*.js']`
    - For any custom javascript associated with a component
- Creates sourcemaps in `{route}/_sourcemaps/`

## 1.5. Images

### 1.5.1. Command

`npm run build:images`

### 1.5.2. What it does

- Minifies all images located in `{root}/src/assets/img/**/*`
- Outputs the minified images to `{root}/build/img/` with the exact same file name

## 1.6. Sprites

### 1.6.1. Command

`npm run build:sprites`

## 1.7. Config

### 1.7.1. Command

`npm run build:config`

### 1.7.2. What it does

- Moves `{root}/src/assets/config/**/*` to `{root}/build/config`

## 1.8. Build all

### 1.8.1. Command

`npm run build:all`

### 1.8.2. What it does

- [`npm run clean`](../tasks.md/#14-cleaning) (cleans the directory)
- [`npm run build:styles`](#12-styles-sass) (build styles)
- [`npm run build:templates`](#13-templates-html) (build templates)
- [`npm run build:scripts`](#14-scripts-javascript) (build scripts)
- [`npm run build:images`](#15-images) (minifies images)
- [`npm run build:sprites`](#16-sprites) (build sprite sheets)
- [`npm run build:config`](#17-config) (build config)
- [`npm run lint:styles`](./linting.md/#12-styles-sasscss) (lint styles)
- [`npm run lint:templates`](./linting.md/#13-templates-html) (lint templates)
- [`npm run lint:scripts`](./linting.md/#14-scripts-javascript) (lint scripts)
