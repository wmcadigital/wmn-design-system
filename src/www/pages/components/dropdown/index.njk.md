{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Dropdown" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}

{% markdown %}

{# Dropdown #}

## About

### What does it do?

- Navigation expands when user hovers or clicks on it revealing options to select.

### When to use it?

- When there is limited space and you need to reduce the space taken on the page
- When an input is nonessential, e.g. sorting list
- When you need flexibility because you do not know how many options there will be. All options are contained within the drop down component.

### When not to use it?

- Drop down creates more work for your user because it is a multi-step process, they hide available options and they slow users down by defaults therefore if possible use another component to display options e.g. radio buttons, text field, input selector
- Do not use when drop down option has more than 36 characters because users will not be able to read them on some mobile devices

{% endmarkdown %}

{% from "wmnds/components/form-elements/dropdown/_dropdown.njk" import wmndsDropdown %}
{{
compExample([wmndsDropdown()], {
    componentPath: "wmnds/components/form-elements/dropdown/",
    njk: true,
    njkProps: wmndsDropdownProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}

### Dropdown with error

{% endmarkdown %}

{{
compExample([wmndsDropdown({
  id: "dropdown-error",
  error: true
})], {
    componentPath: "wmnds/components/form-elements/dropdown/",
    njk: true,
    njkProps: wmndsDropdownProps,
    js: false,
    iframe: false
  })
}}
{# End Dropdown #}

{% endblock %}
