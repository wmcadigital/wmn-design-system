{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Live departures" %}

{% set section="Patterns" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/patterns/live-departures/live-departures-bus/_live-departures-bus.njk" import wmndsLiveDeparturesBus %}
{% from "wmnds/patterns/live-departures/live-departures-service/_live-departures-service.njk" import wmndsLiveDeparturesService %}
{% from "wmnds/patterns/live-departures/live-departures-train/_live-departures-train.njk" import wmndsLiveDeparturesTrain %}
{% from "wmnds/patterns/live-departures/live-departures-widget/_live-departures-widget.njk" import wmndsLiveDeparturesWidget %}

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
      wmndsLiveDeparturesBus({
        services: [
          {
            name: "16",
            destination: "Wolverhampton",
            operator: "National Express West Midlands",
            times: [3, 7, 28]
          },
          {
            name: "17",
            destination: "Dudley",
            operator: "National Express West Midlands",
            times: [4, 14, 24]
          },
          {
            name: "17A",
            destination: "Wall Heath",
            operator: "Diamond",
            times: [8, 19, 27]
          },
          {
            name: "57",
            destination: "Wall Heath",
            operator: "National Express West Midlands",
            times: [6, 16, 26]
          },
          {
            name: "125",
            destination: "Bridgnorth",
            operator: "Diamond",
            times: [9, 14, 24]
          }
        ]
      })
    ], {
      componentPath: "wmnds/patterns/live-departures/live-departures-bus/",
      njkProps: wmndsLiveDeparturesBusProps,
      njk: true,
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

<h3>Bus</h3>

{{
  compExample([
      wmndsLiveDeparturesService({
        operator: "National Express West Midlands"
      })
    ], {
      componentPath: "wmnds/patterns/live-departures/live-departures-service/",
      njkProps: wmndsLiveDeparturesServiceProps,
      njk: true,
      iframe: true
    }
  )
}}

<h3>Tram</h3>

{{
  compExample([
      wmndsLiveDeparturesService({
        name: "MM1",
        destination: "Birmingham - Wolverhampton",
        lastUpdated: "9:30am",
        times: [4, 14, 24, 34, 44]
      })
    ], {
      componentPath: "wmnds/patterns/live-departures/live-departures-service/",
      njkProps: wmndsLiveDeparturesServiceProps,
      njk: true,
      iframe: true
    }
  )
}}

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

### Live departures/arrivals

{% endmarkdown %}

{{
  compExample([
      wmndsLiveDeparturesTrain()
    ], {
      componentPath: "wmnds/patterns/live-departures/live-departures-train/",
      njkProps: wmndsLiveDeparturesTrainProps,
      njk: true,
      iframe: true
    }
  )
}}

{% markdown %}

### Live departures/arrivals (filtered)

{% endmarkdown %}

{{
  compExample([
      wmndsLiveDeparturesTrain({
        showFiltered: true
      })
    ], {
      componentPath: "wmnds/patterns/live-departures/live-departures-train/",
      njkProps: wmndsLiveDeparturesTrainProps,
      njk: true,
      iframe: true
    }
  )
}}

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

{% endmarkdown %}

{{
  compExample([
      wmndsLiveDeparturesWidget()
    ], {
      componentPath: "wmnds/patterns/live-departures/live-departures-widget/",
      njkProps: wmndsLiveDeparturesWidgetProps,
      njk: true,
      iframe: true
    }
  )
}}

{% markdown %}

### Edit view

{% endmarkdown %}

{{
  compExample([
      wmndsLiveDeparturesWidget({
        editMode: true
      })
    ], {
      componentPath: "wmnds/patterns/live-departures/live-departures-widget/",
      njkProps: wmndsLiveDeparturesWidgetProps,
      njk: true,
      iframe: true
    }
  )
}}

{% endblock %}
