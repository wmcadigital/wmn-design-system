{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Content card" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{# Imports #}
{% from "wmnds/components/content-card/_content-card.njk" import wmndsContentCard %}

{% block content %}

{% markdown %}
{# About #}

## About

Content cards contain components and text. Against the page background, they help to draw the users attention to important information and help users to navigate content.
The cards have many common use cases and applications, all of which can be found on the <a href="/patterns/content-cards" target="_self">content cards pattern page</a>.

---

<br><br>

{# Content card #}

## Content card

{# What #}

### What is it?

- A container with a white background and purple underline.
- Any components and text can be used within a card.

{# When not to #}

### When not to use it?

- When it is used in a set of cards for navigation purposes. Instead, use a Navigation card.

{% endmarkdown %}

{{
    compExample([
        wmndsContentCard()
    ], {
      componentPath: "wmnds/components/content-card/",
      njk: true,
      njkProps: wmndsContentCardProps,
      js: false,
      iframe: false
    })
}}

<br><br>

{% markdown %}
{# Navigation card #}

## Navigation card

{# What #}

### What is it? <a name="nav-card-what-is-it"></a>

- A variation of the Content card where the whole card area is clickable.

{# When to #}

### When to use it? <a name="nav-card-when-to-use-it"></a>

- When it is part of a set of cards used for navigation.
- When the whole card needs to be clickable.

{# When not to #}

### When not to use it? <a name="nav-card-when-not-to-use-it"></a>

- When multiple interactive components within the card are used. Instead, use a Content card.

{% endmarkdown %}

{{
    compExample([
        wmndsContentCard({
            clickable: true,
            href: "https://designsystem.wmnetwork.co.uk/components/content-card/"
        })
    ], {
      componentPath: "wmnds/components/content-card/",
      njk: true,
      njkProps: wmndsContentCardProps,
      js: false,
      iframe: false
    })
}}

<br><br>

{% markdown %}
{# Yellow modifier #}

## Yellow modifier

{# What #}

### What is it? <a name="yellow-what-is-it"></a>

- The styling of the card changes to match disruption yellow branding
- The styling helps users through their journey to major roadworks and events information

{# When to #}

### When to use it? <a name="yellow-when-to-use-it"></a>

- When you are linking to a disruptions (major roadworks and events) page
- Only one card should be yellow on a page

{# When not to #}

### When not to use it? <a name="yellow-when-not-to-use-it"></a>

- When you are not linking to a disruptions (major roadworks and events) page
- To attract the user's attention to a campaign other than disruptions
- When there is another yellow card on the page

{% endmarkdown %}

{{
    compExample([
        wmndsContentCard({
            yellow: true
        })
    ], {
      componentPath: "wmnds/components/content-card/",
      njk: true,
      njkProps: wmndsContentCardProps,
      js: false,
      iframe: false
    })
}}

{% endblock %}
