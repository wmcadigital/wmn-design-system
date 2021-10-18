{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Facilities" %}

{% set section="Patterns" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/patterns/facilities/_facilities.njk" import wmndsFacilities %}

{% block content %}

{% markdown %}

## Station facilities

### What does it do?

- Shows users what facilities are available at a train station
- Shows users what accessible facilities are available at a train station

### When to use it?

- On a train station page

### How it works?

- If a facility is not available at a station, then it won't be shown in the list

{% endmarkdown %}

{{
  compExample([
      wmndsFacilities()
    ], {
      componentPath: "wmnds/patterns/facilities/",
      njk: true,
      iframe: true
    }
  )
}}

{% markdown %}

## Station parking

<h3>What does it do?</h3>

- Shows users if car parking is available at a train station
- Tells users who operates the car park

<h3>When to use it?</h3>

- On a train station page

{% endmarkdown %}

{{
  compExample([
      wmndsFacilities({
        parkingExample: true
      })
    ], {
      componentPath: "wmnds/patterns/facilities/",
      njk: true
    }
  )
}}

{% endblock %}
