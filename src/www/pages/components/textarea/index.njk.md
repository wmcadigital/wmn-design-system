{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Textarea" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "tfwmds/components/form-elements/textarea/_textarea.njk" import tfwmdsTextarea %}

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
      [tfwmdsTextarea({
          id: "example-textarea",
          name: "example-textarea",
          rows: "2",
          required: true,
          classes: null,
          error: false,
          errorMessage: {
            contentText: "Input custom error message"
          },
          label: {
            contentText: "Textarea label",
            classes: "tfwmds-m-t-20"
          },
          formGroup: {
            classes: "tfwmds-m-t-20"
          },
          disabled: false,
          maxLength: "200",
          placeholder: "Textarea placeholder...",
          value: ""
        }
      )],
      {
        componentPath: "tfwmds/components/form-elements/textarea/",
        njk: true,
        njkProps: tfwmdsTextareaProps,
        js: false,
        iframe: false
      }
    )
}}
{# End Textarea #}

{% markdown %}

### Textarea with error

{% endmarkdown %}

{{
    compExample(
      [tfwmdsTextarea(
        {
          id: "error-textarea",
          name: "error-textarea",
          rows: "2",
          required: true,
          classes: null,
          error: true,
          errorMessage: {
            contentText: "Textarea custom error message"
          },
          label: {
            contentText: "Textarea label",
            classes: "tfwmds-m-t-20"
          },
          formGroup: {
            classes: "tfwmds-m-t-20"
          },
          disabled: false,
          maxLength: "200",
          placeholder: "Textarea placeholder...",
          value: ""
        }
      )],
      {
        componentPath: "tfwmds/components/form-elements/textarea/",
        njk: true,
        njkProps: tfwmdsTextareaProps,
        js: false,
        iframe: false
      }
    )
}}
{# End Textarea #}

{% endblock %}
