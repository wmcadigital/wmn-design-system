{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Radios" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}

{% markdown %}

{# Radios #}

## About

### What does it do?

- Allows users select one option from multiple options.

### When to use it?

- When user can select just one option from multiple options.

### When not to use it?

- When user may need to select more than one option.

{% endmarkdown %}

{% from "tfwmds/components/form-elements/radios/_radios.njk" import tfwmdsRadios %}
{{
  compExample([
    tfwmdsRadios()
  ], {
    componentPath: "tfwmds/components/form-elements/radios/",
    njk: true,
    njkProps: tfwmdsRadiosProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}

### Inline Radios

{% endmarkdown %}

{{
  compExample([
    tfwmdsRadios({
      inline: true,
      name: "inline-example"
    })
  ], {
    componentPath: "tfwmds/components/form-elements/radios/",
    njk: true,
    njkProps: tfwmdsRadiosProps,
    js: false,
    iframe: false
  })
}}
{# End Radios #}

{% markdown %}

### Radio with error

{% endmarkdown %}

{{
  compExample([
    tfwmdsRadios({
      inline: true,
      name: "inline-example",
      error: true
    })
  ], {
    componentPath: "tfwmds/components/form-elements/radios/",
    njk: true,
    njkProps: tfwmdsRadiosProps,
    js: false,
    iframe: false
  })
}}
{# End Radios #}

{% endblock %}
