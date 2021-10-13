{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Live departures" %}

{% set section="Patterns" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/patterns/live-departures/_live-departures.njk" import wmndsLiveDepartures %}

{% block content %}

{% markdown %}

## Bus

### What does it do?

- Shows live departures for all bus services from a bus stop

### When to use it?

- On a bus stop page

### How it works?

- This shows all the bus services available from a bus stop, in numerical order
- The bus service name is the destination, instead of the full route name
- The 3 latest departures times for all services are shown next to the bus <a href="https://designsystem.tfwm.org.uk/components/disruption-indicators/" target="_blank" rel="noreferrer">service indicator</a>, name and operator
- Users can click on the bus service indicator to view the bus service in more detail

{% endmarkdown %}

{{
  compExample([
      wmndsLiveDepartures()
    ], {
      componentPath: "wmnds/patterns/live-departures/",
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
      wmndsLiveDepartures({
        isOpen: true
      })
    ], {
      componentPath: "wmnds/patterns/live-departures/",
      njk: true,
      njkProps: wmndsFindATimetableProps,
      js: true,
      iframe: true
    }
  )
}}

{% markdown %}

## Bus and tram service

<h3>What does it do?</h3>

- Shows live departures for a bus or tram service from a bus or tram stop

<h3>When to use it?</h3>

- On a bus stop page
- On a tram stop page

<h3>How it works?</h3>

- This shows the latest 5 departure times for a bus or tram service on desktop. The latest 3 departure times are shown on mobile
- Users can favourite a bus or tram service, which will be added to the live departures widget on the homepage
- For bus services we show the operator name as more than one operator can run the same service number

{% endmarkdown %}

{% markdown %}

## Train station

<h3>What does it do?</h3>

- Shows live train departures from a rail station

<h3>When to use it?</h3>

- On a train station page

<h3>How it works?</h3>

- Users can switch between live departures and live arrivals
- Users can filter live departures to see which train services stop at a specific rail station
- When a filter has been applied, users can favourite this journey to the live departures widget on the homepage

### Live departures

### Live departures (filtered)

### Live arrivals

{% endmarkdown %}

{% markdown %}

## Personalised Homepage widget

<h3>What does it do?</h3>

- Informs users of real time departures for bus, train and tram straight from the homepage

<h3>When to use it?</h3>

- On the homepage

<h3>How it works?</h3>

- When a user favourites a service from a bus stop, train station or tram stop page, then the service will appear in this widget
- Users can return to the bus stop, train station to tram stop page by selecting the link
- Users can remove favourited services by selecting the ‘Remove services’ button

### Default

### Edit view

{% endmarkdown %}

{% endblock %}
