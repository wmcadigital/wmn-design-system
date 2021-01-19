{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Form label" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}
{% markdown %}
{# Label #}

## About

### What does it do?

- Tells users what a field is for.

### When to use it?

- When you are requesting multiple pieces of information to answer the same question. For example, the day, month and year of a date.
- The label must appear directly above the field.

### When not to use it?

- Do not use this component to ask more questions within a question - instead, ask a new question.
- When you're giving extra information and hints to help the user answer a question.

{% endmarkdown %}

{% from "wmnds/components/form-elements/form-label/_form-label.njk" import wmndsFormLabel %}
{{
  compExample([
    wmndsFormLabel()
  ],
  {
    componentPath: "wmnds/components/form-elements/form-label/",
    njk: true,
    njkProps: wmndsFormLabelProps,
    js: false,
    iframe: false
  })
}}
{# End label #}

{% endblock %}
