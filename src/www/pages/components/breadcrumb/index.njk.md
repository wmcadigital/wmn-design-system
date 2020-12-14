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
- When displaying the current page within the breadcrumb, ensure that the modifier class <code class="wmnds-website-inline-code">.wmnds-breadcrumb\_\_link--current</code> as seen below.

### When not to use it?

- When websites have flat structure

{% endmarkdown %}

{{
  compExample([
    wmndsBreadcrumb({
      section: section,
      pageTitle: pageTitle,
      exampleAria: "Main"
    })
  ], {
    componentPath: "wmnds/components/breadcrumb/",
    njk: true,
    njkProps: wmndsBreadcrumbProps,
    js: false,
    iframe: false
  })
}}

<h3 id="mobile-app-breadcrumb">Mobile app variant of breadcrumb</h3>
<p>When developing a mobile app, if you are limited for space and need extra room then it is recommended to use the mobile app variant of the West Midlands Network breadcrumb component.</p>

<p>The mobile app version of the breadcrumb ensures that it will not show on devices with a screen width less than 768px. This means the breadcrumb will only show on devices with a screen resolution bigger than 768px.</p>

<p>To use the mobile app variant:</p>
<ul>
  <li>Add the modifier class <code class="wmnds-website-inline-code">wmnds-breadcrumb--mobile-app</code> to the wmnds-breadcrumb element</li>
</ul>

<p>
  You will most likely want to use this with the mobile variants of the
  {{ wmndsLink({
    text: 'header and footer patterns',
    link: '/patterns/header-and-footer/#mobile-app-header'
    })
  }}.
</p>

{{
  compExample([
    wmndsBreadcrumb({
      section: section,
      pageTitle: pageTitle,
      classModifiers: 'wmnds-breadcrumb--mobile-app',
      exampleAria: "Mobile app"
    }) | trim
  ])
}}

{% endblock %}
