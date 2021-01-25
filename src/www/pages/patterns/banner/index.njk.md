{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Banner" %}
{% set section="Patterns" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/patterns/banner/_banner.njk" import wmndsBanner %}

{% block content %}

{% markdown %}

## Normal

{% endmarkdown %}

{{
  compExample([
    wmndsBanner()
  ])
}}

{% markdown %}

{# Banner with phase indicator #}

## With phase indicator

{# What #}

### What does it do?

- Helps users to identify when a service is new
- Offers users the opportunity to give feedback about a new service
  {# When to #}

### When to use it?

- When a service is new

{# When not to #}

### When not to use it?

- On a service that has matured and has a steadily positive rate of satisfaction

{# How #}

### How it works

- A service can be in Alpha (prototype stage) or Beta (when it is on a publicly-accessible website)
- The survey link must point to a Hotjar or service feedback survey, with the service name within the URL. For example, <code class="wmnds-website-inline-code">/?serviceName=descriptiveName</code>.
  A service can either be in Alpha (prototype stage) or Beta (when it is on a publicly accessible website).

{% endmarkdown %}

{{
  compExample([
    wmndsBanner({
      phase: true
    })
  ])
}}

{% markdown %}

{# Emergency banner #}

## Emergency banner

{# What #}

<h3>What does it do</h3>

- It communicates emergency information and provides advice on what to do.
- When an emergency is no longer relevant, the content will be archived or removed.

{# When to #}

<h3>When to use it?</h3>

- When you need to communicate information that is urgent or critical, which will potentially affect a large group of our users. For example, if there is an emergency situation announced in Birmingham, the banner would advise all users on travel updates and guidance.
- The emergency banner should be placed directly below the main navigation.
- Only show one emergency banner notification at a time.

{# When not to #}

<h3>When not to use it?</h3>

- When a warning or emergency is directly related to a task the user is completing. In this case, use the appropriate <a href="/components/message">Message</a> component to notify users of any issues.
- If the issue is related to a service we are providing such as our customer service, you should place the <a href="/components/warning-text">Warning text</a> and <a href="/components/inset-text">Inset text</a> components next to the affected service, detailing the issue.
- Any disruptions to travel will be highlighted on the home page through the <a href="/components/disruption-indicators">Disruption indicator</a> components.

{# How #}

<h3>How it works</h3>

- The user can dismiss the Emergency banner through the 'Close' link. This will remove the current emergency banner from all pages they visit on the website.
- The On-page variant is only shown when a user is on the Emergency advice page, which can be accessed through the 'Read our latest advice' link.

---

{# Sitewide #}

### Sitewide

{% endmarkdown %}

{{
  compExample([
    wmndsBanner({
      emergency: true
    })
  ])
}}

{% markdown %}
{# On-page #}

### On-page variant

{% endmarkdown %}

{{
  compExample([
    wmndsBanner({
      emergency: true,
      onPage: true
    })
  ])
}}
{% markdown %}

{# About #}

## Travel Mode Page Banner

{# What #}

<h3>What does it do?</h3>

- Helps users to identify the travel mode service
- Provides users with a short description of the travel service in the West Midlands

{# When #}

<h3>When to use it?</h3>

- Only on Travel Mode Landing Pages

<h3>When not to use it?</h3>

- On pages where the mode of travel is not operated by West Midlands Network, such as E-scooters

<h3>How it works</h3>

- The image container width will expand if users are viewing the page with a browser width higher than 1280px.
- The image within the container will zoom to fill the size of the image container.
- The image will be hidden on mobile devices. Our previous research found mobile users do not see the value of images on mobile pages.
- The image, modal icon and the West Midlands Network logo variant will change for each travel mode landing page.

{% endmarkdown %}

{% from "wmnds/patterns/page-banner/_page-banner.njk" import wmndsPageBanner %}

{{
  compExample([
    wmndsPageBanner({
      logo: "/img/logos/WM Bus/Landscape/White.png",
      logoAltText: "West Midlands Bus"
    })
  ], {
    componentPath: "wmnds/patterns/page-banner/",
    njk: true,
    njkProps: wmndsPageBannerProps,
    js: false,
    iframe: true
  })
}}

{% endblock %}
