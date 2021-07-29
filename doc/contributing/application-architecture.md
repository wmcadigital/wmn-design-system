# Application architecture

- `src/`

  Source files. See [README.md](../../src/README.md) in the src directory for details.

  - `tfwmds/`

    This is where the core library of all components/patterns are built using nunjucks for the WMN Design System. These are then referenced by the Design System Website to show examples to other collaborators.

    - `assets/`

      App-specific assets.

      - `img/`

        Images that are used in components or the design system.

      - `sass/`

        Any core SASS/SCSS that is used for styling components/patterns etc. should be placed in here and then referenced in `src/tfwmds/assets/sass/tfwmds.scss`. Note: Anything referenced will appear in the live build.

        - `components/`

          Examples of components usage in various contexts. See [README.md](../../src/components/README.md) in the components directory for more details. You can access these examples from [WMN Design System components](http://localhost:3000/components/).

        - `patterns/`

          Examples of pattern usage in various contexts. See [README.md](../../src/components/README.md) in the components directory for more details. You can access these examples from [WMN Design System patterns](http://localhost:3000/patterns/).

    - `www/`

      Anything that is specific for the [WMN Design System website](http://localhost:3000) goes in this folder. It also contains generic layout templates used to render preview and content pages.

      - `assets/`

        Design System website-specific assets.

        - `config/`

          Browserconfig and webmanifest configs for the WMN Design System website.

        - `js/`

          Any javascript files located in here will be concatenated and compiled into `build/js/tfwmds-vendor.min.js` via the [javascript build task](tasks.md#markdown-header-141-scripts-javascript).

- `build/` **contains auto-generated files**

  Standalone builds of WMN Design System. Provides a way to consume WMN Design System without using npm.

- `_sourcemaps` **contains auto-generated files**

  Any sourcemaps generated from [JS or CSS compile tasks](tasks#markdown-header-14-building).

- `_accessibility-logs` **contains auto-generated files**

  Logs generated when [linting template files](tasks.md#markdown-header-122-templates-html).

* `doc/`

  Markdown documentation files.

* `gulp-tasks/`

  Gulp modules and helpers for various task runner jobs. See [tasks](tasks.md) for more information about the tasks.
