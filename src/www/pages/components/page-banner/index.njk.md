{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Page banner" %}

{% from "wmnds/components/page-banner/_page-banner.njk" import wmndsPageBanner %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}

{% markdown %}

{# About #}

## Travel Mode Page Banner

{# What #}

### What does it do?

- Helps users to identify the travel mode service
- Provides users with a short description of the travel service in the West Midlands

{# When #}

### When to use it?

- Only on Travel Mode Landing Pages

### When not to use it?

- On pages where the mode of travel is not operated by West Midlands Network, such as E-scooters

### How it works

- The image container width will expand if users are viewing the page with a browser width higher than 1280px.
- The image within the container will zoom to fill the size of the image container.
- The image will be hidden on mobile devices. Our previous research found mobile users do not see the value of images on mobile pages.
- The image, modal icon and the West Midlands Network logo variant will change for each travel mode landing page.

{% endmarkdown %}

{{
  compExample([
    wmndsPageBanner()
  ], {
    componentPath: "wmnds/components/page-banner/",
    njk: true,
    njkProps: wmndsPageBannerProps,
    js: false,
    iframe: true
  })
}}

{% endblock %}
