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
      classModifiers: 'wmnds-disruption-indicator-medium--success',
      iconRight: 'general-success'
    }),
    wmndsDisruptionIndicatorMedium({
      classModifiers: 'wmnds-disruption-indicator-medium--warning',
      iconRight: 'general-warning-circle'
    }),
    wmndsDisruptionIndicatorMedium({
      classModifiers: 'wmnds-disruption-indicator-medium--error',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorMedium({
      classModifiers: 'wmnds-disruption-indicator-medium--severe',
      iconRight: 'general-warning-triangle'
    })
  ])
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
      classModifiers: 'wmnds-disruption-indicator-medium--success wmnds-disruption-indicator-medium--narrow',
      iconLeft: 'modes-isolated-bus',
      iconRight: 'general-success'
    }),
    wmndsDisruptionIndicatorNarrow({
      comment: '<!-- Bus (mindor disruption) -->',
      classModifiers: 'wmnds-disruption-indicator-medium--warning wmnds-disruption-indicator-medium--narrow',
      iconLeft: 'modes-isolated-bus',
      iconRight: 'general-warning-circle'
    }),
    wmndsDisruptionIndicatorNarrow({
      comment: '<!-- Bus (major disruption) -->',
      classModifiers: 'wmnds-disruption-indicator-medium--error wmnds-disruption-indicator-medium--narrow',
      iconLeft: 'modes-isolated-bus',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorNarrow({
      comment: '<!-- Bus (severe disruption) -->',
      classModifiers: 'wmnds-disruption-indicator-medium--severe wmnds-disruption-indicator-medium--narrow',
      iconLeft: 'modes-isolated-bus',
      iconRight: 'general-warning-triangle'
    }),
    wmndsDisruptionIndicatorNarrow({
      comment: '<!-- Bus (delete) -->',
      classModifiers: 'wmnds-disruption-indicator-medium--error wmnds-disruption-indicator-medium--narrow',
      iconLeft: 'modes-isolated-bus',
      iconRight: 'general-trash'
    })
  ],
  {
    displayInline: true
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
        strongText: 'Good service',
        text: 'Cross City Line',
        iconLeft: 'modes-isolated-rail',
        iconRight: 'general-success'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Train (minor disruption) -->',
        classModifier: 'warning',
        mode: 'Train',
        strongText: 'Minor disruption',
        text: 'Cross City Line',
        iconLeft: 'modes-isolated-rail',
        iconRight: 'general-warning-circle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Train (major disruption) -->',
        classModifier: 'error',
        mode: 'Train',
        strongText: 'Major disruption',
        text: 'Cross City Line',
        iconLeft: 'modes-isolated-rail',
        iconRight: 'general-warning-triangle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Train (severe disruption) -->',
        classModifier: 'severe',
        mode: 'Train',
        strongText: 'Severe disruption',
        text: 'Cross City Line',
        iconLeft: 'modes-isolated-rail',
        iconRight: 'general-warning-triangle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Train (delete) -->',
        classModifier: 'error',
        mode: 'Train',
        strongText: 'Major disruption',
        text: 'Cross City Line',
        iconLeft: 'modes-isolated-rail',
        iconRight: 'general-trash',
        iconRightBtn: true
      })
    ]
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
        strongText: 'Good service',
        iconLeft: 'modes-isolated-metro',
        iconRight: 'general-success'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Tram (minor disruption) -->',
        classModifier: 'warning',
        mode: 'Tram',
        strongText: 'Minor disruption',
        text: 'Between Jewellery Quarter and Wolverhampton',
        iconLeft: 'modes-isolated-metro',
        iconRight: 'general-warning-circle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Tram (major disruption) -->',
        classModifier: 'error',
        mode: 'Tram',
        strongText: 'Major disruption',
        text: 'Between Jewellery Quarter and Wolverhampton',
        iconLeft: 'modes-isolated-metro',
        iconRight: 'general-warning-triangle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Tram (severe disruption) -->',
        classModifier: 'severe',
        mode: 'Tram',
        strongText: 'Severe disruption',
        text: 'Between Jewellery Quarter and Wolverhampton',
        iconLeft: 'modes-isolated-metro',
        iconRight: 'general-warning-triangle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Tram (delete) -->',
        classModifier: 'error',
        mode: 'Tram',
        strongText: 'Major disruption',
        text: 'Between Jewellery Quarter and Wolverhampton',
        iconLeft: 'modes-isolated-metro',
        iconRight: 'general-trash',
        iconRightBtn: true
      })
    ]
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
        strongText: 'Usual traffic',
        text: 'A38',
        iconLeft: 'modes-isolated-roads',
        iconRight: 'general-success'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Roads (minor disruption) -->',
        classModifier: 'warning',
        mode: 'Roads',
        strongText: 'Minor disruption',
        text: 'A38',
        iconLeft: 'modes-isolated-roads',
        iconRight: 'general-warning-circle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Roads (major disruption) -->',
        classModifier: 'error',
        mode: 'Roads',
        strongText: 'Major disruption',
        text: 'A38',
        iconLeft: 'modes-isolated-roads',
        iconRight: 'general-warning-triangle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Roads (severe disruption) -->',
        classModifier: 'severe',
        mode: 'Roads',
        strongText: 'Severe disruption',
        text: 'A38',
        iconLeft: 'modes-isolated-roads',
        iconRight: 'general-warning-triangle'
      }),
      wmndsDisruptionIndicatorLarge({
        comment: '<!-- Roads (delete) -->',
        classModifier: 'error',
        mode: 'Roads',
        strongText: 'Major disruption',
        text: 'A38',
        iconLeft: 'modes-isolated-roads',
        iconRight: 'general-trash',
        iconRightBtn: true
      })
    ]
  )
}}

{% endblock %}
