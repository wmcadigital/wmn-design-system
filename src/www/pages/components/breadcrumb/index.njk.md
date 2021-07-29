{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Breadcrumb" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{# Imports #}
{% from "tfwmds/components/breadcrumb/_breadcrumb.njk" import tfwmdsBreadcrumb %}
{%- from "tfwmds/components/link/link/_link.njk" import tfwmdsLink -%}

{% block content %}

{% markdown %}
{# About #}

## About

### What does it do?

- Breadcrumbs help users to understand where they are within a website’s structure.

### When to use it?

- When you need to help users understand and move between the multiple levels of a website.
- Always make sure that the breadcrumb is contained within a <code class="tfwmds-website-inline-code">.tfwmds-container</code> element. This ensures that the breadcrumb doesn't scale the size of large browser windows.
- When displaying the current page within the breadcrumb, ensure that the modifier class <code class="tfwmds-website-inline-code">.tfwmds-breadcrumb\_\_link--current</code> is used as seen below.

### When not to use it?

- When websites have flat structure

{% endmarkdown %}

{{
  compExample([
    tfwmdsBreadcrumb({
      items: [{
        contentText: "Components",
        href: "#"
      },{
        contentText: pageTitle,
        href: "#"
      }],
      label: "Main"
    })
  ], {
    componentPath: "tfwmds/components/breadcrumb/",
    njk: true,
    njkProps: tfwmdsBreadcrumbProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}

### Mobile app variant of breadcrumb

When developing a mobile app, if you are limited for space and need extra room then it is recommended to use the mobile app variant of the Transport for West Midlands breadcrumb component.

The mobile app version of the breadcrumb ensures that it will not show on devices with a screen width less than 768px. This means the breadcrumb will only show on devices with a screen resolution bigger than 768px.

To use the mobile app variant:

- Add the modifier class <code class="tfwmds-website-inline-code">tfwmds-breadcrumb--mobile-app</code> to the tfwmds-breadcrumb element

You will most likely want to use this with the mobile variants of the <a href="/patterns/header-and-footer/#mobile-app-header" class="tfwmds-link">header and footer patterns</a>.
{% endmarkdown %}

{{
  compExample([
    tfwmdsBreadcrumb({
      items: [{
        contentText: "Components",
        href: "#"
      },{
        contentText: pageTitle,
        href: "#"
      }],
      isMobileApp: true,
      label: "Mobile app"
    })
  ], {
    componentPath: "tfwmds/components/breadcrumb/",
    njk: true,
    njkProps: tfwmdsBreadcrumbProps,
    js: false,
    iframe: false
  })
}}

{% endblock %}
