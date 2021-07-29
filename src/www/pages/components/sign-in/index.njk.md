{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Sign in or register" %}

{% block content %}

{% markdown %}

{# About #}

## About

{# What #}

### What does it do?

- Links to Unicard registration and account log in page

{# When #}

### When to use it?

- On Swift content pages only.

### When not to use it?

- On other Transport for West Midlands content pages

### How it works

- Banner appears at the top of the page, above global navigation banner and links to Unicard registration and account log in page

{% endmarkdown %}

{% from "tfwmds/components/sign-in/_sign-in.njk" import tfwmdsSignIn %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{{
  compExample([
    tfwmdsSignIn()
  ], {
    componentPath: "tfwmds/components/sign-in/",
    njk: true,
    js: false,
    iframe: false
  })
}}

{% endblock %}
