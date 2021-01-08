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

{% from "wmnds/components/form-elements/radios/_radios.njk" import wmndsRadios %}
{{
  compExample([
    wmndsRadios()
  ], {
    componentPath: "wmnds/components/form-elements/radios/",
    njk: true,
    njkProps: wmndsRadiosProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}

### Inline Radios

{% endmarkdown %}

{{
  compExample([
    wmndsRadios({
      inline: true,
      name: "inline-example"
    })
  ], {
    componentPath: "wmnds/components/form-elements/radios/",
    njk: true,
    njkProps: wmndsRadiosProps,
    js: false,
    iframe: false
  })
}}
{# End Radios #}

{% endblock %}
