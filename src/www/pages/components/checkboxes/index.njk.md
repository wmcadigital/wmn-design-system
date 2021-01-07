{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Checkboxes" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}
{% markdown %}

{# Checkboxes #}

## Checkboxes

<h3>What does it do?</h3>

- Allows users select one or more options by clicking the box.

<h3>When to use it?</h3>

- When user can select multiple options from the list
- When user wants to toggle option on or off

<h3>When not to use it?</h3>

- When user can select just one option.

{% endmarkdown %}

{% from "wmnds/components/form-elements/checkboxes/_checkboxes.njk" import wmndsCheckboxes %}
{{
  compExample([
    wmndsCheckboxes({
      idPrefix: "checkboxes"
    })
  ],
  {
    componentPath: "wmnds/components/form-elements/checkboxes/",
    njk: true,
    njkProps: wmndsCheckboxesProps,
    js: false,
    iframe: false
  })
}}
{# End Checkboxes #}

{% endblock %}