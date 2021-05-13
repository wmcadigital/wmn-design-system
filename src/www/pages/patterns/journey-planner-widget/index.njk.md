{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Journey planner widget" %}

{% set section="Patterns" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/patterns/journey-planner-widget/_journey-planner-widget.njk" import wmndsJourneyPlannerWidget %}

{% block content %}

{% markdown %}

## What does it do?

- For users to quickly access journey information from any page of the Transport for West Midlands website
- This widget directs users to the full journey planner service from the right sidebar of a page

## When to use it?

- When the content on a page is related to Transport for West Midlands travel modes or travel information

## How it works?

- The widget is collapsed by default, showing only the ‘From’ field. The widget expands to show the full journey information when the user selects the ‘From’ field
- A complete list of the train stations in the Transport for West Midlands will automatically appear when the user selects the ’From’ or ‘To’ field. Users can also use their current location to automatically choose their departure or arrival location
- The ‘From’ and ’To’ fields can be switched at any time through the Switch button
- Users can choose a specific transport mode as well as change their departure or arrival time
- The ‘Mobility and advanced search’ link will direct users to the journey planner service where they can enter advanced filters
- The ‘Plan my journey’ [Call to action button](https://designsystem.wmnetwork.co.uk/components/buttons/) will send users to the full journey planner service with information on their selected journey

### Collapsed

This is the default widget view

{% endmarkdown %}

{{
  compExample([
      wmndsJourneyPlannerWidget()
    ], {
      componentPath: "wmnds/patterns/journey-planner-widget/",
      njk: true,
      njkProps: wmndsJourneyPlannerWidgetProps,
      js: false,
      iframe: false
    }
  )
}}

{% markdown %}

### Expanded

When a user selects the ‘From’ field, the full journey details are expanded

{% endmarkdown %}

{{
  compExample([
      wmndsJourneyPlannerWidget({
        isOpen: true
      })
    ], {
      componentPath: "wmnds/patterns/journey-planner-widget/",
      njk: true,
      njkProps: wmndsJourneyPlannerWidgetProps,
      js: false,
      iframe: false
    }
  )
}}

{% markdown %}

### Change departure or arrival time

Users can manually change the departure or arrival time of their journey

{% endmarkdown %}

{{
  compExample([
      wmndsJourneyPlannerWidget({
        isOpen: true,
        isWhenOpen: true
      })
    ], {
      componentPath: "wmnds/patterns/journey-planner-widget/",
      njk: true,
      njkProps: wmndsJourneyPlannerWidgetProps,
      js: false,
      iframe: false
    }
  )
}}

{% markdown %}

### Transport mode

Specific transport mode(s) can be chosen by the user to filter their journey

{% endmarkdown %}

{{
  compExample([
      wmndsJourneyPlannerWidget({
        isOpen: true,
        isHowOpen: true
      })
    ], {
      componentPath: "wmnds/patterns/journey-planner-widget/",
      njk: true,
      njkProps: wmndsJourneyPlannerWidgetProps,
      js: false,
      iframe: false
    }
  )
}}

{% markdown %}

## Anything else

[Zeplin link](https://zpl.io/V1EwnoZ)
{% endmarkdown %}

{% endblock %}
