{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Timetables" %}
{% set section="Patterns" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}
{% markdown %}

## Bus and Tram

### What does it do?

- Shows the full timetable for a bus service or tram service

### When to use it?

- On a bus stop page
- On a tram stop page

### How it works

- Selecting a departure time will display the full route of the bus or tram service from that time
- Users can choose a day of the week, including bank holidays
- The <a href="/components/warning-text/">Warning text</a> component informs users when the timetable was last updated and if there is an upcoming change to the timetable
- Users can download a PDF file of the timetable
- Users can see the service route page for a bus or tram by selecting the ‘View full route’ button

{% endmarkdown %}

{% from "wmnds/patterns/timetable/bus-and-tram/_bus-tram-timetable.njk" import wmndsBusAndTramTimetable %}
{{
    compExample([
        wmndsBusAndTramTimetable()
    ])
}}

{% markdown %}

## Train

<h3>What does it do?</h3>

- Directs users to the train operator(s) website so they can view full timetables
- Helps users to find which train operator(s) run services between two rail stations

<h3>When to use it?</h3>

- On a train station page

<h3>How it works?</h3>

- Users enter their departure and arrival station
- The results will tell users which operator(s) run services between the two rail stations and link them to the train operator(s) homepage

{% endmarkdown %}

<h4>Default</h4>

{% from "wmnds/patterns/timetable/train/_train-timetable.njk" import wmndsTrainTimetable %}
{{
    compExample([
        wmndsTrainTimetable()
    ])
}}

<h4>Results</h4>

{{
    compExample([
        wmndsTrainTimetable({
            id: 'resultsExample',
            showResults: true
        })
    ])
}}

{% markdown %}

## Bus and tram route

<h3>What does it do?</h3>

- Shows the full route for a bus or tram service

<h3>When to use it?</h3>

- On a bus service route page
- On a tram service route page

<h3>How it works?</h3>

- Users can view bus or tram stop pages by selecting the link

{% endmarkdown %}

{% from "wmnds/patterns/timetable/bus-and-tram-route/_bus-tram-route.njk" import wmndsBusAndTramRoute %}
{{
    compExample([
        wmndsBusAndTramRoute({
            stops: [
                "Wolverhampton Bus Station (Stand L)",
                "Thornley Street (Stop AV)",
                "Art Gallery",
                "Beatties (Stop BF)",
                "Skinner Street",
                "Salop Street (Stop CS)",
                "Church Street (Stop CJ)",
                "Lea Road (adj)",
                "Blakenhall, Marston Road (after)",
                "Goldthorn Road (adj)"
            ]
        })
    ])
}}

{% endblock %}
