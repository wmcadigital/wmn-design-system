{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Content cards" %}
{% set section="Patterns" %}
{# Imports #}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}
{% markdown %}
{# About #}

## About

These are common applications of the content card component.

{# Map card #}

## Map card

{# What #}

<h3>What is it?</h3>

- A card with an interactive map component.

{# When to #}

<h3>When to use it?</h3>

- When there is a user need for an interactive map to display information.
- When there is an alternative way to view the information on the interactive map.

{# When not to #}

<h3>When not to use it?</h3>

- When it is the sole way of presenting the information, you must provide an alternative.
- When the map is a screenshot or image. This is called a static map. Do not use static maps on Transport for West Midlands products.
- When there is no user need for a map, use text description instead.

{% endmarkdown %}

{# Map example #}
{% from "tfwmds/patterns/content-cards/map/_map.njk" import tfwmdsContentCardMap %}

{{
    compExample([
        tfwmdsContentCardMap()
    ])
}}

{% markdown %}

{# Button card #}

## Button card

{# What #}

<h3>What is it?</h3>

- A card with several buttons in.

{# When to #}

<h3>When to use it?</h3>

- To direct users to different content relevant to their needs.
- At the end of the main page content. We found that users preferred to split lots of content into smaller, specific pages and that this was the best way to continue the journey after reading the main overview content.

{# When not to #}

<h3>When not to use it?</h3>

- To attract the user's attention if there is no benefit to them reading the content.
- To list links within a section or related content. Use the in-line navigation card instead.

{% endmarkdown %}

{# Set up buttons #}
{% from "tfwmds/patterns/content-cards/buttons/_buttons.njk" import tfwmdsContentCardButtons %}

{{
    compExample([
        tfwmdsContentCardButtons()
    ])
}}

{% markdown %}

{# Image card #}

## Image card

{# What #}

<h3>What is it?</h3>

- A card with an image in.

{# When to #}

<h3>When to use it?</h3>

- To display an image within a tile.
- When the image complements the text.

{# When to to #}

<h3>When not to use it?</h3>

- When the image has text in. This distracts the user and usually fails accessibility criteria.
- When the image is a cartoon or illustration. These are called vector images. Vector images display as poor quality for many users.

{% endmarkdown %}

{# Set up image #}
{% from "tfwmds/patterns/content-cards/image/_image.njk" import tfwmdsContentCardImage %}

{{
    compExample([
        tfwmdsContentCardImage()
    ])
}}

{% markdown %}
{# In-line navigation card #}

## In-line navigation card

{# What #}

<h3>What is it?</h3>

- A card with in-text links for navigation of sections and displaying related content.

{# When to #}

<h3>When to use it?</h3>

- To help the user navigate a collection of pages. This is called a section.
- To show related content which meets user needs.
- To help the user navigate a long page using in-text anchors.
- Only use this pattern in a sidebar.

{# When not to #}

<h3>When not to use it?</h3>

- When the page links you are listing to form part of a journey or process. The journey should be linear.
- When you are trying to attract the user's attention. This is called a call-to-action.

{# How to #}

<h3>How to use it</h3>

- The group of links must have a title to help users understand what the links are for. For example, 'Related content', 'On this page' or the section name.
- If the card is used to navigate a long page of content, it should be displayed on the left-hand side.
- If the card is used to navigate a set of pages, like a section or related content, it should be displayed on the right-hand side.
- The current page or section being viewed must be inset.

{% endmarkdown %}

{# Set up inline navigation #}
{% from "tfwmds/patterns/content-cards/inline-navigation/_inline-navigation.njk" import tfwmdsContentCardInlineNavigation %}

{{
    compExample([
        tfwmdsContentCardInlineNavigation()
    ])
}}

{% markdown %}
{# With current page #}

### In-line navigation with current page

{% endmarkdown %}

{{
    compExample([
        tfwmdsContentCardInlineNavigation({
            withCurrentPage: true
        })
    ])
}}

{% markdown %}

{# Email sign up card #}

## Email sign up card

{# What #}

<h3>What does it do?</h3>

- Allows the user to sign up for updates when information changes on a page.
- Sends personalised updates to users based on their location.

{# When to #}

<h3>When to use it?</h3>

- Use these content tiles on pages where users can sign-up for newsletter updates.
- For a standard newsletter sign up, use the content tile where the text fields expand.
- If you want to capture additional user data, then use the content block which links to an external form, e.g. Campaign Monitor.

When adding a sign up form from Campaign Monitor, you are provided with HTML markup, but make sure not to change any of the generated attributes except for classes.
They have been changed in the following examples to avoid accessibility errors.

{% endmarkdown %}

{# Set up email sign up #}
{% from "tfwmds/patterns/content-cards/email-sign-up/_email-sign-up.njk" import tfwmdsContentCardEmailSignUp %}

{% markdown %}
{# Collapsed #}

### Collapsed

This is the default state for the email sign up card.

{% endmarkdown %}

{{
    compExample([
        tfwmdsContentCardEmailSignUp({ exampleSuffix: "example-1"})
    ])
}}

{% markdown %}
{# Expanded #}

### Expanded

The collapsed card will expand when the 'continue' button is pressed/tapped.

{% endmarkdown %}

{{
    compExample([
        tfwmdsContentCardEmailSignUp({ expanded: true, exampleSuffix: "example-2" })
    ])
}}

{% markdown %}
{# External link #}

### External link

Use this content card when you want to send users to an external Campaign Monitor form if you want to capture more user data such as demographics, travel habits etc.

{% endmarkdown %}

{{
    compExample([
        tfwmdsContentCardEmailSignUp({ externalLink: true, exampleSuffix: "example-3" })
    ])
}}

{% from "tfwmds/patterns/content-cards/swift-card/_swift-card.njk" import tfwmdsContentCardSwiftCard %}
{% markdown %}
{# Swift card #}

## Swift card

<h3>What does it do?</h3>

- Shows the image of Swift card and explains how to purchase it

<h3>When to use it?</h3>

- Only on Swift product landing pages such as Swift Go and PAYG

<h3>When not to use it?</h3>

- On informational content pages. If you need to use a content card use a standard content card pattern.

<h3>How it works</h3>

- User can add Swift card image
- User can edit title
- User can add description with bullet points and links
- This card is not clickable

{% endmarkdown %}

{{
    compExample([
        tfwmdsContentCardSwiftCard()
    ])
}}

{% endblock %}
