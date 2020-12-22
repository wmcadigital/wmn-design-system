{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Breadcrumb" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{# Imports #}
{% from "wmnds/components/breadcrumb/_breadcrumb.njk" import wmndsBreadcrumb %}
{%- from "wmnds/components/link/link/_link.njk" import wmndsLink -%}

{% block content %}

{% markdown %}
{# About #}

## About

### What does it do?

- Breadcrumbs help users to understand where they are within a website’s structure.

### When to use it?

- When you need to help users understand and move between the multiple levels of a website.
- Always make sure that the breadcrumb is contained within a <code class="wmnds-website-inline-code">.wmnds-container</code> element. This ensures that the breadcrumb doesn't scale the size of large browser windows.
- When displaying the current page within the breadcrumb, ensure that the modifier class <code class="wmnds-website-inline-code">.wmnds-breadcrumb\_\_link--current</code> is used as seen below.

### When not to use it?

- When websites have flat structure

{% endmarkdown %}

{{
  compExample([
    wmndsBreadcrumb({
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
    componentPath: "wmnds/components/breadcrumb/",
    njk: true,
    njkProps: wmndsBreadcrumbProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}

### Mobile app variant of breadcrumb

When developing a mobile app, if you are limited for space and need extra room then it is recommended to use the mobile app variant of the West Midlands Network breadcrumb component.

The mobile app version of the breadcrumb ensures that it will not show on devices with a screen width less than 768px. This means the breadcrumb will only show on devices with a screen resolution bigger than 768px.

To use the mobile app variant:

- Add the modifier class <code class="wmnds-website-inline-code">wmnds-breadcrumb--mobile-app</code> to the wmnds-breadcrumb element

You will most likely want to use this with the mobile variants of the <a href="/patterns/header-and-footer/#mobile-app-header" class="wmnds-link">header and footer patterns</a>.
{% endmarkdown %}

{{
  compExample([
    wmndsBreadcrumb({
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
    componentPath: "wmnds/components/breadcrumb/",
    njk: true,
    njkProps: wmndsBreadcrumbProps,
    js: false,
    iframe: false
  })
}}

{% endblock %}
