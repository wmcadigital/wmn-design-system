{% extends "www/_layouts/layout-docs.njk" %}
{% set pageTitle = "Using the design system" %}
{% set section = "Docs" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "tfwmds/components/accordion/_accordion.njk" import tfwmdsAccordion %}

{% block content %}

{% markdown %}

## Styling page elements

The Transport for West Midlands Design System provides lots of CSS classes for styling page elements, so you should not need to write as much of your own Sass or CSS.

Explore the [Styles](/styles/) section of the design system to see what classes are available and how to apply them.

## Using components

Components are reusable parts of the user interface, like [accordions](/components/accordion/), [buttons](/components/buttons/) and [tables](/components/table/). The components in the design system are designed to be accessible, responsive and have been user tested.

There are 2 ways to use components in the Design System.

### Option 1: recommended setup

If you [installed the design system using the recommended setup](/docs/get-started/production/#option-1-include-compiled-files-recommended), you can copy the code from the HTML markup tab below any examples.
{% endmarkdown %}
{{
  compExample([
      tfwmdsAccordion({
        id: "accordion-html"
      })
    ], {
      componentPath: "tfwmds/components/accordion/",
      njk: false,
      js: false,
      iframe: false
    }
  )
}}

<br/>

{% markdown %}

### Option 2: Prototype Kit or installed with npm

If you are using the [Prototype Kit](/docs/get-started/prototype-kit/) or you [installed the design system using npm](/docs/get-started/production/#option-2-install-using-npm), you can copy the code from either the HTML markup or Nunjucks markup tab below any examples.

As both of these methods use <a href="https://mozilla.github.io/nunjucks/templating.html" target="_blank" rel="noopener noreferrer" class="tfwmds-link">Nunjucks templating</a>, you can use our nunjucks macros (Nunjucks markup tab) and use the Nunjucks properties tab as reference to speed up your development.

#### Nunjucks macros

A Nunjucks macro is a simple template that generates more complex HTML. However, macros are more sensitive to mistakes than HTML, so it’s worth saving and previewing.

When using Nunjucks macros (Nunjucks markup tab) in the [Prototype Kit](/docs/get-started/prototype-kit/), leave out the first line that starts with <br/><code class="tfwmds-website-inline-code">&lcub;&percnt; from ...</code>.

{% endmarkdown %}
{{
  compExample([
      tfwmdsAccordion({
        id: "accordion-njk"
      })
    ], {
      componentPath: "tfwmds/components/accordion/",
      njk: true,
      njkProps: tfwmdsAccordionProps,
      js: false,
      iframe: false
    }
  )
}}
<br/>

{% markdown %}

### Javascript

By default, we like to leave Javascript up to you for better flexibility of the design system.

You may notice that some components have recommended Javascript tabs, you don't have to copy these but they can be a useful starting point if using that component in your project.
{% endmarkdown %}

{{
  compExample([
      tfwmdsAccordion({
        id: "accordion-js"
      })
    ], {
      componentPath: "tfwmds/components/accordion/",
      njk: false,
      js: true,
      iframe: false
    }
  )
}}
{% endblock %}
