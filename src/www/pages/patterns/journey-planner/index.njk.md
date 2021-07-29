{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Journey planner" %}

{% set section="Patterns" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "tfwmds/patterns/journey-planner-widget/_journey-planner-widget.njk" import tfwmdsJourneyPlannerWidget %}
{% from "tfwmds/patterns/journey-planner/_journey-planner.njk" import tfwmdsJourneyPlanner %}

{% block content %}

{% markdown %}

## Homepage

{% endmarkdown %}

  <h3 id="homepage-what-does-it-do"> What does it do? </h3>
{% markdown %}
  * Helps users to plan a journey straight from the homepage and directs users to the full journey planner service
{% endmarkdown %}

  <h3 id="homepage-when-to-use-it"> When to use it?</h3>
{% markdown %} 
  * On the homepage
{% endmarkdown %}

  <h3 id="homepage-how-it-works">How it works?</h3>
{% markdown %} 
  * The widget is collapsed by default. The widget expands to show the full journey information when the user selects the 'Add details' button. The additional travel details can be hidden when a user clicks on the 'Hide details' button
  * The 'From' and 'To' fields use the autocomplete feature for train stations and postcodes. Users can also use their current location to automatically choose their departure or arrival location
  * The ‘From’ and ’To’ fields can be switched at any time through the Switch [link button](https://designsystem.wmnetwork.co.uk/components/buttons/)
  * Users can choose a specific transport mode as well as change their departure or arrival time
  * The ‘Plan my journey’ [Call to action button](https://designsystem.wmnetwork.co.uk/components/buttons/) will send users to the full journey planner service with information on their selected journey

{% endmarkdown %}

  <h4 id="homepage-default">Default</h4>

{{
    compExample([
        tfwmdsJourneyPlanner()
      ], {
        componentPath: "tfwmds/patterns/journey-planner/",
        njk: true,
        njkProps: tfwmdsJourneyPlannerProps,
        js: false,
        iframe: false
      }
    )
  }}

{% markdown %}

  <h4 id="homepage-expanded"> Expanded </h4>
  When a user selects the ‘Add details' button, the full journey details are shown
  
{% endmarkdown %}

{{
  compExample([
      tfwmdsJourneyPlanner({
        isOpen: true
      })
    ], {
      componentPath: "tfwmds/patterns/journey-planner/",
      njk: true,
      njkProps: tfwmdsJourneyPlannerProps,
      js: false,
      iframe: false
    }
  )
}}

{% markdown %}

## Widget

### What does it do?

- For users to quickly access journey information from any page of the Transports for West Midlands website
- This widget directs users to the full journey planner service from the right sidebar of a page

### When to use it?

- When the content on a page is related to Transports for West Midlands travel modes or travel information

### How it works?

- The widget is collapsed by default, showing only the ‘From’ field. The widget expands to show the full journey information when the user selects the ‘From’ field
- A complete list of the train stations in the Transports for West Midlands will automatically appear when the user selects the ’From’ or ‘To’ field. Users can also use their current location to automatically choose their departure or arrival location
- The ‘From’ and ’To’ fields can be switched at any time through the Switch button
- Users can choose a specific transport mode as well as change their departure or arrival time
- The ‘Mobility and advanced search’ link will direct users to the journey planner service where they can enter advanced filters
- The ‘Plan my journey’ [Call to action button](https://designsystem.wmnetwork.co.uk/components/buttons/) will send users to the full journey planner service with information on their selected journey

#### Collapsed

This is the default widget view

{% endmarkdown %}

{{
compExample([
tfwmdsJourneyPlannerWidget()
], {
componentPath: "tfwmds/patterns/journey-planner-widget/",
njk: true,
njkProps: tfwmdsJourneyPlannerWidgetProps,
js: true,
iframe: false
}
)

}}

{% markdown %}

#### Expanded

When a user selects the ‘From’ field, the full journey details are expanded

{% endmarkdown %}

{{
  compExample([
      tfwmdsJourneyPlannerWidget({
        isOpen: true
      })
    ], {
      componentPath: "tfwmds/patterns/journey-planner-widget/",
      njk: true,
      njkProps: tfwmdsJourneyPlannerWidgetProps,
      js: false,
      iframe: false
    }
  )
}}

{% markdown %}

#### Change departure or arrival time

Users can manually change the departure or arrival time of their journey

{% endmarkdown %}

{{
  compExample([
      tfwmdsJourneyPlannerWidget({
        isOpen: true,
        isWhenOpen: true
      })
    ], {
      componentPath: "tfwmds/patterns/journey-planner-widget/",
      njk: true,
      njkProps: tfwmdsJourneyPlannerWidgetProps,
      js: false,
      iframe: false
    }
  )
}}

{% markdown %}

#### Transport mode

Specific transport mode(s) can be chosen by the user to filter their journey

{% endmarkdown %}

{{
  compExample([
      tfwmdsJourneyPlannerWidget({
        isOpen: true,
        isHowOpen: true
      })
    ], {
      componentPath: "tfwmds/patterns/journey-planner-widget/",
      njk: true,
      njkProps: tfwmdsJourneyPlannerWidgetProps,
      js: false,
      iframe: false
    }
  )
}}

{% endblock %}
