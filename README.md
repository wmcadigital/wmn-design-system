# 1. WMCA Website Redevelopment

[![Netlify Status](https://api.netlify.com/api/v1/badges/dff99875-8f09-42b9-bb99-3a43f8c0e697/deploy-status)](https://app.netlify.com/sites/wmca/deploys)

## 1.1. Table of contents

<!-- TOC -->

-   [1. WMCA Website Redevelopment](#markdown-header-1-wmca-website-redevelopment)
    -   [1.1. Table of contents](#markdown-header-11-table-of-contents)
    -   [1.2. WMN Styleguide](#markdown-header-12-wmnds-styleguide)
    -   [1.3. Quick start](#markdown-header-13-quick-start)
    -   [1.4. Tasks](#markdown-header-14-tasks)
        -   [1.4.1. Starting web server](#markdown-header-141-starting-web-server)
        -   [1.4.2. Linting](#markdown-header-142-linting)
        -   [1.4.3. Compilation](#markdown-header-143-compilation)
        -   [1.4.4. Clean up](#markdown-header-144-clean-up)
    -   [1.5. Troubleshooting](#markdown-header-15-troubleshooting)
    -   [1.6. Contributing to the code base](#markdown-header-16-contributing-to-the-code-base)
    -   [1.7. Got feedback?](#markdown-header-17-got-feedback)

<!-- /TOC -->

## 1.2. WMN Styleguide

Welcome to the [West Midlands Network Design System](https://wmnetwork.netlify.com/).

The WMN Styleguide is ran at the designated url on startup (usually [http://localhost:3000](http://localhost:3000)) and is the primary means of viewing your work - it will live update as you make changes.

-   Tailored for building West Midlands Network apps and websites: Using the WMN Design System markup and CSS framework results in UIs that reflect the West Midlands Network look and feel.
-   Continuously updated: As long as you're using the latest version of the WMN Design System, your pages are always up to date with Salesforce UI changes.

![West Midlands Network Styleguide example](doc/preview.png)

## 1.3. Quick start

You'll need [Git](https://help.github.com/articles/set-up-git/) and [Node.js](https://nodejs.org/en/) installed to get this project running.

1. Clone the project with `git clone git@bitbucket.org:wmca/west-midlands-network.git`
2. Run `npm install` in the root folder.
3. Run `npm start` to launch the dev environment with hot reloading.
4. Visit [http://localhost:3000](http://localhost:3000)

Having trouble getting these steps to work on your machine? Follow the [troubleshooting guide](doc/troubleshooting.md).

## 1.4. Tasks

For more in-depth information on what each task does, see [tasks guide](doc/contributing/tasks.md).

### 1.4.1. Starting web server

Start the WMN Design System web server.

`npm start`

### 1.4.2. Linting

Lint the code base for syntax and stylistic errors.

```bash
# Lint indentation, Sass, JavaScript files, html
npm run lint:all

# Lint languages independently
npm run lint:styles
npm run lint:templates
npm run lint:scripts
```

### 1.4.3. Compilation

Build the styleguide for various environments

```bash
# Build Sass, JavaScript, HTML files
npm run build:all

# Build languages/assets independently
npm run build:styles
npm run build:templates
npm run build:scripts
npm run build:images
npm run build:config
```

### 1.4.4. Clean up

Delete all built languages/assets including temporary build and local files.

`npm run clean`

## 1.5. Troubleshooting

See the [troubleshooting guide](doc/troubleshooting.md).

## 1.6. Contributing to the code base

See the [contributing guide](doc/contributing.md).

## 1.7. Got feedback?

Please open a new [Bitbucket Issue](https://bitbucket.org/wmca/west-midlands-network/issues?status=new&status=open).
