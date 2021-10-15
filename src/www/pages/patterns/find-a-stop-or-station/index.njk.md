{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Find a stop or station" %}

{% set section="Patterns" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/patterns/find-stop-station-widget/_find-stop-station-widget.njk" import wmndsFindStopStationWidget %}
{% from "wmnds/patterns/nearest-stop-station/_nearest-stop-station.njk" import wmndsNearestStopStation %}

{% block content %}

{% markdown %}

## Homepage

### What does it do?

- Helps users to find a bus stop, train station and tram stop near them

### When to use it?

- On the homepage

### How it works?

- This will direct users to the Find a stop or station service
- Users can select more than one travel mode
- Users will need to enter a postcode, road name or place of interest if they select bus or train.
- If only tram is selected, users will go straight to the tram route page

### Default

{% endmarkdown %}

{{
  compExample([
      wmndsFindStopStationWidget({
        contentHTML: "<p>See live departures, disruptions, timetables and nearest stops or stations.</p>"
      })
    ], {
      componentPath: "wmnds/patterns/find-stop-station-widget/",
      njk: true,
      njkProps: wmndsFindStopStationProps
    }
  )
}}

{% markdown %}

### Expanded (bus)

{% endmarkdown %}

{{
  compExample([
      wmndsFindStopStationWidget({
        isOpen: true,
        mode: 'bus',
        contentHTML: "<p>See live departures, disruptions, timetables and nearest stops or stations.</p>"
      })
    ], {
      componentPath: "wmnds/patterns/find-stop-station-widget/",
      njk: true,
      njkProps: wmndsFindStopStationProps
    }
  )
}}

{% markdown %}

### Expanded (train)

{% endmarkdown %}

{{
  compExample([
      wmndsFindStopStationWidget({
        id: 'trainOpen',
        isOpen: true,
        mode: 'train',
        contentHTML: "<p>See live departures, disruptions, timetables and nearest stops or stations.</p>"
      })
    ], {
      componentPath: "wmnds/patterns/find-stop-station-widget/",
      njk: true,
      njkProps: wmndsFindStopStationProps
    }
  )
}}

{% markdown %}

## Travel mode landing pages

<h3>What does it do?</h3>

- Helps users to find a bus stop, train station or tram stop near them

<h3>When to use it?</h3>

- On the bus landing page
- On the train landing page
- On the tram landing page

<h3>How it works?</h3>

- This will direct users to the Find a stop or station service
- The transport mode will be pre-selected for the user based on the landing page they come from
- Users will need to enter a postcode, road name or place of interest

{% endmarkdown %}

{% markdown %}

## Station and stop pages

<h3>What does it do?</h3>

- Helps users to find a bus stop, train station or tram stop near them

<h3>When to use it?</h3>

- On a bus stop page
- On a train station page
- On a tram stop page

<h3>How it works?</h3>

- This will direct users to the Find a stop or station service
- The bus, train and tram transport modes will be pre-selected for the user on the results page
- Users will need to enter a postcode, road name or place of interest

{% endmarkdown %}

{% markdown %}

## Nearest stops and stations

<h3>What does it do?</h3>

- Helps users to find a bus stop, train station or tram stop closest to the stop or station page they are on

<h3>When to use it?</h3>

- On a bus stop page
- On a train station page
- On a tram stop page

<h3>How it works?</h3>

- The nearest three bus stops, train stations or tram stops from the page location will be shown

{% endmarkdown %}

{{
  compExample([
      wmndsNearestStopStation({
        stops: [
          {
            mode: "rail",
            name: "Stourbridge Town",
            distance: "1 minute walk"
          },
          {
            mode: "bus",
            name: "Stourbridge, Town Centre",
            distance: "1 minute walk"
          },
          {
            mode: "metro",
            name: "Stourbridge, Foster St East (adjacent)",
            distance: "1 minute walk"
          }
        ]
      })
    ], {
      componentPath: "wmnds/patterns/nearest-stop-station/",
      njk: true,
      njkProps: wmndsNearestStopStationProps
    }
  )
}}

{% endblock %}
