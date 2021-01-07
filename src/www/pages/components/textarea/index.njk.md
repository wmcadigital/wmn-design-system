{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Textarea" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/components/textarea/_textarea.njk" import wmndsTextarea %}

{% block content %}

{% markdown %}

## About

### What does it do?

- Allows users to enter more than one line of text.
- Allows users to write whatever they like, also called free text.

### When to use it?

- When the user needs to enter lots of text. For example, a paragraph.

### When not to use it?

- When the user needs to enter one line of text. Use the input component instead.
- Use fixed-width inputs for content that has a known length, e.g. postcode.
- When there are limited options. Use a different form element that limits the options.

{% endmarkdown %}

{{
    compExample(
      [wmndsTextarea({
        id: "example-textarea",
        autofocus: true,
        disabled: false,
        formId: "signup-form",
        maxLength: 200,
        placeholder: "Textarea placeholder...",
        required: true,
        rows: 2
      }
      )],
      {
        componentPath: "wmnds/components/textarea/",
        njk: true,
        njkProps: wmndsTextareaProps,
        js: false,
        iframe: false
      }
    )
}}
{# End Textarea #}

{% endblock %}
