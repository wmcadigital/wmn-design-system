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

### When to use it?</h3>

- Every service that has not passed its public beta service assessment must have a phase indicator
- Within the header pattern
- Within the phase banner pattern

A service can either be in Alpha (prototype stage) or Beta (when it is on a publicly accessible website).

{% endmarkdown %}

{% from "wmnds/components/phase-indicator/_phase-indicator.njk" import wmndsPhaseIndicator %}
{% from "wmnds/components/phase-indicator/_phase-indicator-link.njk" import wmndsPhaseIndicatorLink %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{{
  compExample([wmndsPhaseIndicator()])
}}

{{
  compExample([wmndsPhaseIndicatorLink({
    link:'#',
    linkTitle: 'Link title',
    text: 'Try our new disruptions page'
  })])
}}

{% endblock %}
