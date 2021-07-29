{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Checkboxes" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}
{% markdown %}

{# Checkboxes #}

## About

### What does it do?

- Allows users select one or more options by clicking the box.

### When to use it?

- When user can select multiple options from the list
- When user wants to toggle option on or off

### When not to use it?

- When user can select just one option.

{% endmarkdown %}

{% from "tfwmds/components/form-elements/checkboxes/_checkboxes.njk" import tfwmdsCheckboxes %}
{{
  compExample([
    tfwmdsCheckboxes({
      idPrefix: "checkboxes"
    })
  ],
  {
    componentPath: "tfwmds/components/form-elements/checkboxes/",
    njk: true,
    njkProps: tfwmdsCheckboxesProps,
    js: false,
    iframe: false
  })
}}
{% markdown %}

### Checkboxes with error

{% endmarkdown %}
{{
  compExample([
    tfwmdsCheckboxes({
      idPrefix: "error-checkboxes",
      error: true,
      items: [
        {
          contentText: "Option 1",
          value: "option1"
        },
        {
          contentText: "Option 2",
          value: "option2"
        },
        {
          contentText: "Option 3",
          value: "option3"
        }
      ]
    })
  ],
  {
    componentPath: "tfwmds/components/form-elements/checkboxes/",
    njk: true,
    njkProps: tfwmdsCheckboxesProps,
    js: false,
    iframe: false
  })
}}
{# End Checkboxes #}

{% endblock %}
