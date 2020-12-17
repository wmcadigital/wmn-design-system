{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Table" %}
{% from "wmnds/components/table/_table.njk" import wmndsTable %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}

{% markdown %}
{# About #}

## About

### What does it do?

- A table is used to make information easier for users to compare and scan

### When to use it?

- Use the table component to let users compare information in rows and columns.

### When not to use it?

- Never use the table component to layout content on a page. Instead, use the grid system.

### How it works

- You need to create a heading (title) for the table using <code class="wmnds-website-inline-code"> &lt;caption&gt; </code> tags. A caption helps users find, navigate and understand tables.
- Use table headers to tell users what the rows and columns represent. Use the scope attribute to help users of assistive technology distinguish between row and column headers.
- When comparing columns of numbers, align the numbers to the right in table cells.
- If you are trying to display lots of columns, contact Design Team to discuss how best to achieve this.

---

<br><br>

{# Table #}

## Table with Headers

{% endmarkdown %}

{{
  compExample([
    wmndsTable({
      rows: 3,
      cols: 3,
      caption: "Table Title"
    })
  ])
}}
{# End Table #}

{# Table #}
{% markdown %}

## Table without Headers

{% endmarkdown %}
{{
  compExample([
    wmndsTable({
      rows: 3,
      cols: 3,
      caption: "Table Title",
      noHeaders: true
    })
  ])
}}
{# End Table #}

{% endblock %}
