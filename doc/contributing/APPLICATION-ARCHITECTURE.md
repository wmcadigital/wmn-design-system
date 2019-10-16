## Application architecture

-   `src/`
    Source files. See README.md in the src directory for details.

    -   `assets/`
        App-specific assets.

    -   `views/`
        Various html, sass and js files for generation of components and styleguide.

        -   `components/`
            Examples of components usage in various contexts. You can access these examples from the home page of the [WMN styleguide](http://localhost:3000).

        -   `styleguide/`
            Generic layout templates used to render preview app pages.

-   `config/`
    Configuration files for the preview app, [sass-lint](https://github.com/sasstools/sass-lint) and [Jest](https://github.com/facebook/jest).

-   `build/` **contains auto-generated files**
    Standalone builds of govuk-frontend. Provides a way to consume govuk-frontend without using npm.

-   `docs/`
    Documentation files.

-   `lib/`
    Application modules and helpers.

-   `package/` **contains auto-generated files**
    package published on npm.
    Consume all of govuk-frontend through a single package.

-   `tasks/`
    Application modules and helpers. See [tasks](tasks.md) for more information about the tasks.
