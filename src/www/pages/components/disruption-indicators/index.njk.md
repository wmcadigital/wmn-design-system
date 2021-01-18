{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Disruption indicators" %}
{# Get macros #}
{% from "wmnds/components/disruption-indicator/small/_small.njk" import wmndsDisruptionIndicatorSmall %}
{% from "wmnds/components/disruption-indicator/medium/_medium.njk" import wmndsDisruptionIndicatorMedium %}
{% from "wmnds/components/disruption-indicator/large/_large.njk" import wmndsDisruptionIndicatorLarge %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% set modes = [
  "bus",
  "coach",
  "cycle",
  "metro",
  "plane",
  "rail",
  "roads",
  "walk"
] %}

{% block content %}
{% markdown %}
{# About #}

## About

Disruption indicators are used to show the current service status within interfaces and maps.
There are three types all giving different levels of detail.

---

{# Map pin #}

## Small

{# What #}

### What does it do?

- A pin to place on a map
- Shows the modal icon
- Shows severity of the disruption with background colour and icon

{# When #}

### When to use it?

- On a live map

{# Small:Minor disruptions #}

### Minor disruption

{% endmarkdown %}
{{
  compExample([
    wmndsDisruptionIndicatorSmall({
      mode: 'bus'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'coach'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'cycle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'metro'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'plane'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'rail'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'roads'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'walk'
    })
  ],
  {
    displayInline: true,
    componentPath: "wmnds/components/disruption-indicator/small/",
    njk: true,
    njkProps: wmndsDisruptionIndicatorSmallProps,
    js: false,
    iframe: false
  })
}}
{% markdown %}
{# Small:Major disruptions #}

### Major disruption

{% endmarkdown %}

{{
  compExample([
    wmndsDisruptionIndicatorSmall({
      mode: 'bus',
      classes: 'wmnds-disruption-indicator-small--error',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'coach',
      classes: 'wmnds-disruption-indicator-small--error',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'cycle',
      classes: 'wmnds-disruption-indicator-small--error',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'metro',
      classes: 'wmnds-disruption-indicator-small--error',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'plane',
      classes: 'wmnds-disruption-indicator-small--error',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'rail',
      classes: 'wmnds-disruption-indicator-small--error',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'roads',
      classes: 'wmnds-disruption-indicator-small--error',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'walk',
      classes: 'wmnds-disruption-indicator-small--error',
      iconRight: 'general-warning-triangle'
    })
  ],
  {
    displayInline: true,
    componentPath: "wmnds/components/disruption-indicator/small/",
    njk: true,
    njkProps: wmndsDisruptionIndicatorSmallProps,
    js: false,
    iframe: false
  })
}}
{% markdown %}
{# Small:Severe disruptions #}

### Severe disruption

{% endmarkdown %}
{{
  compExample([
    wmndsDisruptionIndicatorSmall({
      mode: 'bus',
      classes: 'wmnds-disruption-indicator-small--severe',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'coach',
      classes: 'wmnds-disruption-indicator-small--severe',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'cycle',
      classes: 'wmnds-disruption-indicator-small--severe',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'metro',
      classes: 'wmnds-disruption-indicator-small--severe',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'plane',
      classes: 'wmnds-disruption-indicator-small--severe',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'rail',
      classes: 'wmnds-disruption-indicator-small--severe',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'roads',
      classes: 'wmnds-disruption-indicator-small--severe',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorSmall({
      mode: 'walk',
      classes: 'wmnds-disruption-indicator-small--severe',
      iconRight: 'general-warning-triangle'
    })
  ],
  {
    displayInline: true,
    componentPath: "wmnds/components/disruption-indicator/small/",
    njk: true,
    njkProps: wmndsDisruptionIndicatorSmallProps,
    js: false,
    iframe: false
  })
}}
{% markdown %}
{# Medium:Normal #}

## Medium - Normal

{# What #}

<h3>What does it do?</h3>

- Shows the route number
- Shows the severity with the background colour and icon where there is data, purple where there is no data

{# When #}

<h3>When to use it?</h3>

- In search results, when searching for a bus route

{% endmarkdown %}
{{
  compExample([
    wmndsDisruptionIndicatorMedium(),
    wmndsDisruptionIndicatorMedium({
      classes: 'wmnds-disruption-indicator-medium--success',
      iconRight: 'general-success'
    }),
    wmndsDisruptionIndicatorMedium({
      classes: 'wmnds-disruption-indicator-medium--warning',
      iconRight: 'general-warning-circle'
    }),
    wmndsDisruptionIndicatorMedium({
      classes: 'wmnds-disruption-indicator-medium--error',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorMedium({
      classes: 'wmnds-disruption-indicator-medium--severe',
      iconRight: 'general-warning-triangle'
    })
  ],
  {
    componentPath: "wmnds/components/disruption-indicator/medium/",
    njk: true,
    njkProps: wmndsDisruptionIndicatorMediumProps,
    js: false,
    iframe: false
  })
}}

{# Medium - Narrow #}
{% from "wmnds/components/disruption-indicator/medium/_medium.njk" import wmndsDisruptionIndicatorMedium as wmndsDisruptionIndicatorNarrow %}
{% markdown %}

## Medium - Narrow

{# What #}

<h3>What does it do?</h3>

- Shows the route number
- Shows the modal icon
- Shows the disruption severity with the background

{# When #}

<h3>When to use it?</h3>

- When showing a specific bus route's disruption status
- Example: homepage travel updates widget or major roadworks sidebar

{# When not #}

<h3>When not use it?</h3>

- If the service is not a route

{% endmarkdown %}
{{
  compExample([
    wmndsDisruptionIndicatorNarrow({
      comment: '<!-- Bus (good service) -->',
      iconLeft: 'modes-isolated-bus',
      iconRight: 'general-success',
      displayNarrow: true,
      classes: 'wmnds-disruption-indicator-medium--success'
    }),
    wmndsDisruptionIndicatorNarrow({
      comment: '<!-- Bus (mindor disruption) -->',
      iconLeft: 'modes-isolated-bus',
      iconRight: 'general-warning-circle',
      displayNarrow: true,
      classes: 'wmnds-disruption-indicator-medium--warning'
    }),
    wmndsDisruptionIndicatorNarrow({
      comment: '<!-- Bus (major disruption) -->',
      iconLeft: 'modes-isolated-bus',
      iconRight: 'general-warning-triangle',
      displayNarrow: true,
      classes: 'wmnds-disruption-indicator-medium--error'
    }),
    wmndsDisruptionIndicatorNarrow({
      comment: '<!-- Bus (severe disruption) -->',
      iconLeft: 'modes-isolated-bus',
      iconRight: 'general-warning-triangle',
      displayNarrow: true,
      classes: 'wmnds-disruption-indicator-medium--severe'
    }),
    wmndsDisruptionIndicatorNarrow({
      comment: '<!-- Bus (delete) -->',
      iconLeft: 'modes-isolated-bus',
      iconRight: 'general-trash',
      iconRightBtn: true,
      displayNarrow: true,
      classes: 'wmnds-disruption-indicator-medium--error'
    })
  ],
  {
    componentPath: "wmnds/components/disruption-indicator/medium/",
    njk: true,
    njkProps: wmndsDisruptionIndicatorMediumProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}

{# LARGE #}

## Large</h2>

{# What #}

<h3>What does it do?</h3>

- Shows the route name or number
- Shows the modal name and icon
- Shows the disruption severity with the background colour, icon and text

{# When #}

<h3>When to use it?</h3>

- Showing a specific train, tram or road's disruption status
- Example: homepage travel updates widget or major roadworks sidebar

{# Research #}

<h3>Research</h3>

- During user testing for the home page travel update widget, users preferred having a text description of the mode in addition to the modal icons, as the train and tram brand icons are very similar when small

### Train

{% endmarkdown %}
{{
  compExample(
    [
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Train (good service) -->',
        mode: 'Train',
        primaryText: 'Good service',
        contentText: 'Cross City Line',
        iconLeft: 'modes-isolated-rail',
        iconRight: 'general-success'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Train (minor disruption) -->',
        classes: 'wmnds-disruption-indicator-large--warning',
        mode: 'Train',
        primaryText: 'Minor disruption',
        contentText: 'Cross City Line',
        iconLeft: 'modes-isolated-rail',
        iconRight: 'general-warning-circle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Train (major disruption) -->',
        classes: 'wmnds-disruption-indicator-large--error',
        mode: 'Train',
        primaryText: 'Major disruption',
        contentText: 'Cross City Line',
        iconLeft: 'modes-isolated-rail',
        iconRight: 'general-warning-triangle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Train (severe disruption) -->',
        classes: 'wmnds-disruption-indicator-large--severe',
        mode: 'Train',
        primaryText: 'Severe disruption',
        contentText: 'Cross City Line',
        iconLeft: 'modes-isolated-rail',
        iconRight: 'general-warning-triangle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Train (delete) -->',
        classes: 'wmnds-disruption-indicator-large--error',
        mode: 'Train',
        primaryText: 'Major disruption',
        contentText: 'Cross City Line',
        iconLeft: 'modes-isolated-rail',
        iconRight: 'general-trash',
        iconRightBtn: true
      })
    ],
    {
      componentPath: "wmnds/components/disruption-indicator/large/",
      njk: true,
      njkProps: wmndsDisruptionIndicatorLargeProps,
      js: false,
      iframe: false
    }
  )
}}

{% markdown %}
{# Tram #}

### Tram

{% endmarkdown %}
{{
  compExample(
    [
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Tram (good service) -->',
        mode: 'Tram',
        primaryText: 'Good service',
        iconLeft: 'modes-isolated-metro',
        iconRight: 'general-success'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Tram (minor disruption) -->',
        classes: 'wmnds-disruption-indicator-large--warning',
        mode: 'Tram',
        primaryText: 'Minor disruption',
        contentText: 'Between Jewellery Quarter and Wolverhampton',
        iconLeft: 'modes-isolated-metro',
        iconRight: 'general-warning-circle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Tram (major disruption) -->',
        classes: 'wmnds-disruption-indicator-large--error',
        mode: 'Tram',
        primaryText: 'Major disruption',
        contentText: 'Between Jewellery Quarter and Wolverhampton',
        iconLeft: 'modes-isolated-metro',
        iconRight: 'general-warning-triangle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Tram (severe disruption) -->',
        classes: 'wmnds-disruption-indicator-large--severe',
        mode: 'Tram',
        primaryText: 'Severe disruption',
        contentText: 'Between Jewellery Quarter and Wolverhampton',
        iconLeft: 'modes-isolated-metro',
        iconRight: 'general-warning-triangle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Tram (delete) -->',
        classes: 'wmnds-disruption-indicator-large--error',
        mode: 'Tram',
        primaryText: 'Major disruption',
        contentText: 'Between Jewellery Quarter and Wolverhampton',
        iconLeft: 'modes-isolated-metro',
        iconRight: 'general-trash',
        iconRightBtn: true
      })
    ],
    {
      componentPath: "wmnds/components/disruption-indicator/large/",
      njk: true,
      njkProps: wmndsDisruptionIndicatorLargeProps,
      js: false,
      iframe: false
    }
  )
}}
{% markdown %}
{# Roads #}

### Roads

{% endmarkdown %}
{{
  compExample(
    [
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Roads (good service) -->',
        mode: 'Roads',
        primaryText: 'Usual traffic',
        contentText: 'A38',
        iconLeft: 'modes-isolated-roads',
        iconRight: 'general-success'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Roads (minor disruption) -->',
        classes: 'wmnds-disruption-indicator-large--warning',
        mode: 'Roads',
        primaryText: 'Minor disruption',
        contentText: 'A38',
        iconLeft: 'modes-isolated-roads',
        iconRight: 'general-warning-circle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Roads (major disruption) -->',
        classes: 'wmnds-disruption-indicator-large--error',
        mode: 'Roads',
        primaryText: 'Major disruption',
        contentText: 'A38',
        iconLeft: 'modes-isolated-roads',
        iconRight: 'general-warning-triangle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Roads (severe disruption) -->',
        classes: 'wmnds-disruption-indicator-large--severe',
        mode: 'Roads',
        primaryText: 'Severe disruption',
        contentText: 'A38',
        iconLeft: 'modes-isolated-roads',
        iconRight: 'general-warning-triangle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Roads (delete) -->',
        classes: 'wmnds-disruption-indicator-large--error',
        mode: 'Roads',
        primaryText: 'Major disruption',
        contentText: 'A38',
        iconLeft: 'modes-isolated-roads',
        iconRight: 'general-trash',
        iconRightBtn: true
      })
    ],
    {
      componentPath: "wmnds/components/disruption-indicator/large/",
      njk: true,
      njkProps: wmndsDisruptionIndicatorLargeProps,
      js: false,
      iframe: false
    }
  )
}}

{% endblock %}
