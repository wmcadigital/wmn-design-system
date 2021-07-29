{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Find a timetable" %}

{% set section="Patterns" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "tfwmds/patterns/find-a-timetable-widget/_find-a-timetable-widget.njk" import tfwmdsFindATimetableWidget %}

{% block content %}

{% markdown %}

## What does it do?

- Helps users to find a timetable for their chosen service

## When to use it?

- On the homepage

## How it works?

- This will direct users to the timetables page
- Users can only select one travel mode
- Users will need to enter a service number if they select bus. If train or tram are selected, then users can go straight to the timetables page through the [Call to action button](https://designsystem.wmnetwork.co.uk/components/buttons/).

### Default

{% endmarkdown %}

{{
  compExample([
      tfwmdsFindATimetableWidget()
    ], {
      componentPath: "tfwmds/patterns/find-a-timetable-widget/",
      njk: true,
      njkProps: tfwmdsFindATimetableProps,
      js: true,
      iframe: true
    }
  )
}}

{% markdown %}

### Expanded (bus)

{% endmarkdown %}

{{
  compExample([
      tfwmdsFindATimetableWidget({
        isOpen: true
      })
    ], {
      componentPath: "tfwmds/patterns/find-a-timetable-widget/",
      njk: true,
      njkProps: tfwmdsFindATimetableProps,
      js: true,
      iframe: true
    }
  )
}}

{% endblock %}
