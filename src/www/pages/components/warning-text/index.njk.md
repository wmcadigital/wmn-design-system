{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Warning Text" %}
{% from "wmnds/components/warning-text/_warning-text.njk" import wmndsWarningText %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}
{% markdown %}

{# About #}

## About

### What does it do?

- Help users identify and understand warning content on the page, even if they do not read the whole page.

### When to use it?

<p>Use the warning for information that:</p>
- is time critical
- addresses a common or significant misconception of mistake
- has legal consequences of an action, or lack of action, that the user might take

### When not to use it?

- If the information is not important
- If the information has no consequence

### How it works

- Use the icon that represents the severity of the warning

---

{# Warning Text #}

## Warning Text with exclamation mark icon - triangle

{% endmarkdown %}

{{
  compExample([
    wmndsWarningText({
      contentHTML: "Lorem <a href='#' title='lorem' target='_blank'>ipsum</a> dolar sit..."
    })
  ], {
    componentPath: "wmnds/components/warning-text/",
    njk: true,
    njkProps: wmndsWarningTextProps,
    js: false,
    iframe: false
  })
}}
{# End Warning Text #}

{% markdown %}
{# Warning Text #}

## Warning text with exclamation mark icon - round

{% endmarkdown %}

{{
  compExample([
    wmndsWarningText({
      icon: "general-warning-circle"
    })
  ], {
    componentPath: "wmnds/components/warning-text/",
    njk: true,
    njkProps: wmndsWarningTextProps,
    js: false,
    iframe: false
  })
}}
{# End Warning Text #}

{% markdown %}
{# Warning Text #}

## Warning text with info icon - round

{% endmarkdown %}

{{
  compExample([
    wmndsWarningText({
      icon: "general-info"
    })
  ], {
    componentPath: "wmnds/components/warning-text/",
    njk: true,
    njkProps: wmndsWarningTextProps,
    js: false,
    iframe: false
  })
}}
{# End Warning Text #}

{% markdown %}
{# Warning Text #}

## Warning text with success icon - round

{% endmarkdown %}

{{
  compExample([
    wmndsWarningText({
      icon: "general-success"
    })
  ], {
    componentPath: "wmnds/components/warning-text/",
    njk: true,
    njkProps: wmndsWarningTextProps,
    js: false,
    iframe: false
  })
}}
{# End Warning Text #}

{% endblock %}
