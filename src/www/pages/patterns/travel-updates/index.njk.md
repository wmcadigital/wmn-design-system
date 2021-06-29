{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Travel updates" %}
{% set section="Patterns" %}
{# Imports #}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}

{% markdown %}
{# About #}

## About

{# What #}

### What does it do?

- The travel updates widget gives users an overview of any disruptions to transport across the Transport for West Midlands
- It uses the small Disruption indicator component to show how severe the disruption is for a transport mode. The disruption service levels are severe, major, minor and good
- Users can personalise the travel updates widget by adding a specific transport route. This is so users can access disruptions relevant to them straight from the homepage

## Default view

### When to use it?

- The default travel updates widget should be used on the homepage

### How it works?

- The user can view disruption information through the disruptions service by clicking on the small disruption indicator or the disruption link
- The user can add a specific bus, train or tram route to the widget by clicking on the ‘Add services’ button. This will take the user to the disruptions service, where they can search for a transport route and favourite it.
- When more than two types of disruptions occur for a transport mode, the disruption indicator will only show the highest level of disruption. There will still be individual disruption links for each disruption severity.

{% endmarkdown %}

{% from "wmnds/patterns/travel-updates/_travel-updates.njk" import wmndsContentCardTravelUpdates %}

{{
    compExample([
        wmndsContentCardTravelUpdates({
          id: "default-example"
        })
    ])
}}

{% markdown %}

## Personalised view

<h3>
  When to use it?
</h3>

- If a user has favourited a transport route through the disruptions service

<h3>
  How it works?
</h3>

- By favouriting a service through the disruptions service, users can see if any of their services are disrupted within the widget straight from the homepage
- Users can still view all disruptions across the network by clicking on the ‘View all updates’ button
- On mobile devices, the route name and disruption link are hidden behind a dropdown by default. A user can expand each individual transport mode or click on the small disruption indicator to view the disruption in detail.

{% endmarkdown %}

{{
    compExample([
        wmndsContentCardTravelUpdates({
          id: "personal-example",
          personalView: true
        })
    ], {
      componentPath: "wmnds/patterns/travel-updates/",
      njk: false,
      js: true,
      iframe: true
    })
}}

{% markdown %}

## Edit view

<h3>
  When to use it?
</h3>

- The edit view will be shown when a user clicks on the ‘Edit your services’ button if they have personalised the travel updates widget

<h3>
  How it works?
</h3>

- Users can remove routes they have added through the disruptions service by clicking on the bin icon.
- Users can add more routes to their widget by clicking on the ‘Add services’ button. This will take the user to the disruptions service, where they can search for another transport route and favourite it.

{% endmarkdown %}

{{
    compExample([
        wmndsContentCardTravelUpdates({
          id: "edit-example",
          editView: true
        })
    ])
}}

{% endblock %}
