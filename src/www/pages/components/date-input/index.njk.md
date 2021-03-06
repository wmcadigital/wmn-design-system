{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Date Input" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/components/form-elements/date-input/_date-input.njk" import wmndsDateInput %}

{% block content %}
{% markdown %}

## About

### What does it do?

- Help users enter a memorable date or one they can easily look up.

### When to use it?

- Use the date input component when you’re asking users for a date they’ll already know, or can look up without using a calendar.

### When not to use it?

- Do not use the date input component if users are unlikely to know the exact date of the event you’re asking about.

{% endmarkdown %}

{{
 wmndsInsetText ({
      contentHTML: "If you are looking for how to format the date within content i.e. \"4 June 2017\", check the <a href=\"/styles/a-to-z-content-style-guide/#dates\" class=\"wmnds-link\">dates section within the A to Z content style guide</a>."
  })
}}

{{
    compExample([wmndsDateInput()], {
      componentPath: "wmnds/components/form-elements/date-input/",
      njk: true,
      njkProps: wmndsDateInputProps,
      js: false,
      iframe: false
    })
}}
{# End Input #}

{% markdown %}

### Date input with error

{% endmarkdown %}

{{
    compExample([
      wmndsDateInput({
        id: "error-date",
        error: true,
        errorMessage: {
          contentText: "Date input custom error message"
        }
      })
    ], {
      componentPath: "wmnds/components/form-elements/date-input/",
      njk: true,
      njkProps: wmndsDateInputProps,
      js: false,
      iframe: false
    })
}}

{% endblock %}
