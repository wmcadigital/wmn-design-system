# Tasks guide

This is a more in depth guide of the tasks that can be used within this project. Below will explain the context of when each task should be called and what it does.

When referring to `{root}` below, we are referring to the base root of the project.

## Linting

Linting is the process of analysing code for potential errors and flagging them to the developer.

----

### Scripts

#### Command

`npm run lint:scripts`

#### What it does

- Lints javascript files via ESLint to [airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) standards.
- The lint errors are flagged up within the terminal or if you have an ESLint plugin within your code editor they will flag up within your editor of choice.

#### File(s) that are linted:

- `{root}/src/assets/js/wmn.js`
- `{root}/src/views/**/*.js`

`**/*.min.js` are ignored for linting as these files are presumed to have already been linted, mangled and minified.

#### Config

The config files are located at:

- `{root}/.eslintrc.json` (configuring how the linting should work)
- `{root}/.eslintignore` (controlling what files should be ignored)
- `{root}/.prettierrc` (general format of files e.g. spacing, single quotes/double quotes)
- `{root}/.prettierignore` (files prettier should ignore)

----

### Templates

#### Command

`npm run lint:templates`

#### What it does

- Lints html files via [htmlhint](https://github.com/htmlhint/HTMLHint).
- Flags errors up in terminal.
- Lints html files to ensure correct accessibility tags are used, these are up to [WCAG2AA standards](https://www.w3.org/WAI/GL/WCAG20/).
- Produces a folder at `{root}/\_accessibility-logs/` which contains a directory structure exactly the same as the projects `{root}src/views/` directory. Within these folders is a json file which shows the accessibility errors/warnings for the html file referenced at the top of the file.

#### File(s) that are linted:

- `{root}/src/views/**/*.html`

#### Config

The config files are located at:

- `{root}/.htmlhintrc` (general formatting of html files e.g. unique ids, attributes in lowercase, tag names match)



## Building

Build commands are used for when code is to be compiled for output in a certain type of environment.