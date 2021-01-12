{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Text Input" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/components/form-elements/input/_input.njk" import wmndsInput %}

{% block content %}
{% markdown %}

## About

### What does it do?

- Allows users to enter text.

### When to use it?

- When user needs to enter short amount of text, e.g. name, email.

### When not to use it?

- When user needs to add a lot of text that might go over multiple lines
- Use fixed width inputs for content that has known length, e.g. postcode.

{% endmarkdown %}

{{
    compExample([wmndsInput()], {
      componentPath: "wmnds/components/form-elements/input/",
      njk: true,
      njkProps: wmndsInputProps,
      js: false,
      iframe: false
    })
}}
{# End Input #}

{% markdown %}

## Showing error

{% endmarkdown %}

{{
    compExample([wmndsInput({
        error: true,
        errorMessage: {
            contentText: "Input custom error message"
        }
    })], {
      componentPath: "wmnds/components/form-elements/input/",
      njk: true,
      njkProps: wmndsInputProps,
      js: false,
      iframe: false
    })
}}

{% endblock %}
