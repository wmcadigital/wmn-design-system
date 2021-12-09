{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Number Input" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/components/form-elements/number-input/_number-input.njk" import wmndsNumberInput %}

{% block content %}
{% markdown %}

## About

### What does it do?

- Allows users to select a number by increasing or reducing it incrementally

### When to use it?

- When user needs to select and adjust a number incrementally

### When not to use it?

- When user needs to enter information other than a number, for example location, postcode or place of interest
- Use fixed width inputs for content that has known length, e.g. postcode.

### How it works?

- When user clicks minus button, number reduces by 1, when user clicks plus button, number increases by 1

{% endmarkdown %}

{{
    compExample([
      wmndsNumberInput(
        {
          placeholder: '1',
          label: {
            contentText: 'Search radius',
            classes: 'wmnds-h4'
          }
        }
      )
    ], {
      componentPath: "wmnds/components/form-elements/number-input/",
      njk: true,
      njkProps: wmndsNumberInputProps,
      js: false,
      iframe: false
    })
}}
{# End Number Input #}

{% endblock %}
