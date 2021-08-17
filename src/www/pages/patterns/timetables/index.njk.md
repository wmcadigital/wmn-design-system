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
- The <a href="">Warning text</a> component informs users when the timetable was last updated and if there is an upcoming change to the timetable
- Users can download a PDF file of the timetable
- Users can see the service route page for a bus or tram by selecting the ‘View full route’ button

{% endmarkdown %}

{% from "wmnds/patterns/timetable/_bus-tram-timetable.njk" import wmndsBusAndTramTimetable %}
{{
    compExample([
        wmndsBusAndTramTimetable()
    ])
}}

{% endblock %}
