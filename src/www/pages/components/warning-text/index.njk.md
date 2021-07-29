{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Warning Text" %}
{% from "tfwmds/components/warning-text/_warning-text.njk" import tfwmdsWarningText %}
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

{# Warning Text #}

## Warning Text with exclamation mark icon - triangle

{% endmarkdown %}

{{
  compExample([
    tfwmdsWarningText({
      contentHTML: "Lorem <a href='#' title='lorem' target='_blank'>ipsum</a> dolar sit..."
    })
  ], {
    componentPath: "tfwmds/components/warning-text/",
    njk: true,
    njkProps: tfwmdsWarningTextProps,
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
    tfwmdsWarningText({
      icon: "general-warning-circle"
    })
  ], {
    componentPath: "tfwmds/components/warning-text/",
    njk: true,
    njkProps: tfwmdsWarningTextProps,
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
    tfwmdsWarningText({
      icon: "general-info"
    })
  ], {
    componentPath: "tfwmds/components/warning-text/",
    njk: true,
    njkProps: tfwmdsWarningTextProps,
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
    tfwmdsWarningText({
      icon: "general-success"
    })
  ], {
    componentPath: "tfwmds/components/warning-text/",
    njk: true,
    njkProps: tfwmdsWarningTextProps,
    js: false,
    iframe: false
  })
}}
{# End Warning Text #}

{% endblock %}
