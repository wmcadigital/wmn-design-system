{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Phase indicators" %}

{% block content %}

{% markdown %}

{# About #}

## About

{# What #}

### What does it do?

- Helps users to identify when a service is in a development phase

{# When #}

### When to use it?

- Every service that has not passed its public beta service assessment must have a phase indicator
- Within the header pattern
- Within the phase banner pattern

A service can either be in Alpha (prototype stage) or Beta (when it is on a publicly accessible website).

{% endmarkdown %}

{% from "wmnds/components/phase-indicator/_phase-indicator.njk" import wmndsPhaseIndicator %}
{% from "wmnds/components/phase-indicator/phase-indicator-link/_phase-indicator-link.njk" import wmndsPhaseIndicatorLink %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{{
  compExample([
    wmndsPhaseIndicator()
  ], {
    componentPath: "wmnds/components/phase-indicator/",
    njk: true,
    js: false,
    iframe: false
  })
}}

{{
  compExample([
    wmndsPhaseIndicatorLink({
      href:'#',
      linkTitle: 'Link title',
      contentText: 'Try our new disruptions page'
    })
  ], {
    componentPath: "wmnds/components/phase-indicator/phase-indicator-link/",
    njk: true,
    njkProps: wmndsPhaseIndicatorLinkProps,
    js: false,
    iframe: false
  })
}}

{% endblock %}
