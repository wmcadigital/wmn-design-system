{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Get started" %}
{% set section = "Docs" %}
{% from "wmnds/components/warning-text/_warning-text.njk" import wmndsWarningText %}

{% block content %}
{% markdown %}
The West Midlands Network Design System provides a collection of reusable HTML components to build custom services and experiences that adhere to West Midlands Network's design standards.

There are many different ways to get started with our design system. It all depends on your project's needs and whether you are developing or designing.

**These are our guides for getting started:**

- [Prototyping](prototyping/)
- [Production](production/)
- [Design](design/)

---

## Using styles, components and patterns

When something is published in the West Midlands Network design system as a [style](/styles/), [component](/components/) or [pattern](/patterns/) we include details of what it is, how to use it, and when to use it based on our [user research](/user-research/). This should help you decide whether it’s something you can use or adapt for your service.

---

## Something missing?

If something is missing in the documentation or you found some part confusing, you can <a class="wmnds-link" href="https://github.com/wmcadigital/wmn-design-system/issues/new?assignees=mrmjprice%2CKaterinaKir%2Cdaylesalmon&labels=question&template=question.md&title=" target="_blank" >raise an issue</a> or <a class="wmnds-link" href="https://github.com/wmcadigital/wmn-design-system/discussions/new" target="_blank">start a discussion</a> with our team.

We always look forward to hearing from you!

{% endmarkdown %}
{% endblock %}
