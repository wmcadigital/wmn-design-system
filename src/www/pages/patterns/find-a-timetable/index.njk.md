{% extends "www/_layouts/layout-left-pane.njk" %} 
{% set pageTitle = "Find a timetable" %}

{% set section="Patterns" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/patterns/find-a-timetable-widget/_find-a-timetable-widget.njk" import wmndsFindATimetableWidget %}

{% block content %}

{% markdown %}

## What does it do?
* Helps users to find a timetable for their chosen service


## When to use it?
* On the homepage


## How it works?
* This will direct users to the timetables page
* Users can only select one travel mode
* Users will need to enter a service number if they select bus. If train or tram are selected, then users can go straight to the timetables page through the [Call to action button](https://designsystem.tfwm.org.uk/components/buttons/).


### Default

{% endmarkdown %}

{{
  compExample([
      wmndsFindATimetableWidget()
    ], {
      componentPath: "wmnds/patterns/find-a-timetable-widget/",
      njk: true,
      njkProps: wmndsFindATimetableProps,
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
      wmndsFindATimetableWidget({
        isOpen: true
      })
    ], {
      componentPath: "wmnds/patterns/find-a-timetable-widget/",
      njk: true,
      njkProps: wmndsFindATimetableProps,
      js: true,
      iframe: true
    }
  )
}}

{% endblock %}