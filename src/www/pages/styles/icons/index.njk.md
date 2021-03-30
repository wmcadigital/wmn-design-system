{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Icons" %}
{% set section = "Styles" %}
{# The icon vars are an array that match the folders they come from in src/assets/icon/{foldername} #}
{% set iconGeneral = [
  "arrow",
  "caret-down",
  "caret-up",
  "checkmark",
  "chevron-right",
  "circle-hollow",
  "circle-solid",
  "clock",
  "closed",
  "cross",
  "compress",
  "current-location",
  "disabled",
  "electric",
  "expand",
  "favourite",
  "file",
  "filter",
  "id-card",
  "info",
  "list",
  "location-arrow",
  "location-pin",
  "minimise",
  "n-ticket",
  "paperclip",
  "parking",
  "route",
  "search",
  "share",
  "star",
  "star-empty",
  "success",
  "swap",
  "sync",
  "ticket",
  "trash",
  "wallet",
  "warning-circle",
  "warning-triangle"
] %}

{% set iconSwift = [
  "bird-icon",
  "card",
  "card-full-logo",
  "full-logo"
] %}

{% set iconSocial = [
  "facebook",
  "twitter",
  "instagram"
] %}

{% set iconModesIsolated = [
  "bus",
  "coach",
  "cycle",
  "eBike",
  "metro",
  "plane",
  "rail",
  "roads",
  "walk",
  "eScooter"
] %}

{% set iconModesBackground = [
  "bus",
  "coach",
  "cycle",
  "eBike",
  "metro",
  "p-r",
  "plane",
  "rail-nr",
  "rail",
  "roads",
  "walk",
  "eScooter"
] %}

{% from "wmnds/components/icon/_icon.njk" import wmndsIcon %}

{% block content %}

{% markdown %}

## About

### What does it do?

- Icons are images used in context to communicate a meaning (a visual representation of an object, action, or idea).

### When to use it?

- Only use icons and images if there’s a real user need.

### When not to use it?

- Do not use it for unnecessary decoration.

## Using icons

WMN Design System icons are available as an SVG sprite to include in your HTML page.

### How to use

#### Recommended

The Recommended method of using the icon sprite sheet is to refer directly to the one used in the design system. This ensures that your icons will always be up to date.
To get started, include the below snippet of javascript somewhere in your codebase. This will:

- the latest SVG icon spritesheet to be used within your web app or service
- Will ensure the icons work with older browsers such as Internet Explorer 11
- Keep the icon set consistent with other West Midlands Network Servic

  <pre>
    <code class="html wmnds-show-more-ignore" tabindex="0">
    {%- filter forceescape -%}
    <!-- Ajax SVGs from WMN Design System -->
    <script>
      const ajax = new XMLHttpRequest();
      ajax.open('GET', 'https://unpkg.com/wmn-design-system@$*version/build/img/wmnds-icons.min.svg', true);
      ajax.send();
      ajax.onload = function () {
        const div = document.createElement('div');
        div.style.display = 'none';
        div.innerHTML = ajax.responseText;
        document.body.insertBefore(div, document.body.childNodes[0]);
      };
    </script>

  {%- endfilter %}
  </code></pre>

#### Displaying an icon

To display an icon or glyph, use an icon tag (from the icon section at the bottom of the page) with a href attribute and xlink:href (as a fallback). Make sure that the xlink and href tags are pointing to the location of your downloaded icon sprite sheet.
The <code class="wmnds-website-inline-code">ICON-TAG-NAME</code> should be replaced with the icon tag name of the icon you want to show from the Icons section below, for example <code class="wmnds-website-inline-code">#wmnds-general-arrow</code> should be in the <code class="wmnds-website-inline-code">xlink:href</code> and <code class="wmnds-website-inline-code">href</code> attributes of the svg's <code class="wmnds-website-inline-code">&lt;use&gt;</code> element.

<pre><code class="html " tabindex="0" >
    {{-
      wmndsIcon({
        icon: 'ICON-TAG-NAME'
      }) | formatHTML
    -}}
</code></pre>

#### Can't include via recommended method? Try hosting the sprites locally

- <a class="wmnds-link" target="\_blank" href="https://unpkg.com/wmn-design-system@$*version/build/img/wmnds-icons.min.svg" download="wmnds-icons.min.svg">Download the icon svg sprite</a>.
- Include the downloaded icon sprite in to your project locally.
- You can now start using the icon svg sprite sheet using the instructions from the "Displaying an icon" section abov

## Icons

Find below a list of all our icons and their tags below. To use, don't forget to prefix the tag with 'wmnds-'

### General

{% endmarkdown %}

<div class="wmnds-grid website-icons">
  {% for icon in iconGeneral %}
    <div class="wmnds-col-1-2 wmnds-col-sm-1-6 text-center">
      {{
        wmndsIcon({
          icon: 'general-' + icon
        }) | safe
      }}
      <p>{{ 'general-' + icon }}</p>
    </div>
  {% endfor %}
</div>

{% markdown %}

### Swift

{% endmarkdown %}

<div class="wmnds-grid website-icons">
  {% for icon in iconSwift %}
    <div class="wmnds-col-1-2 wmnds-col-sm-1-6 text-center">
      {{
        wmndsIcon({
          icon: 'swift-' + icon
        })
      }}
      <p>{{ 'swift-' + icon }}</p>
    </div>
  {% endfor %}
</div>

{% markdown %}

### Social

{% endmarkdown %}

<div class="wmnds-grid website-icons">
  {% for icon in iconSocial %}
    <div class="wmnds-col-1-2 wmnds-col-sm-1-6 text-center">
      {{
        wmndsIcon({
          icon: 'social-' + icon
        })
      }}
      <p>{{ 'social-' + icon }}</p>
    </div>
  {% endfor %}
</div>

{% markdown %}

### Modal

**Isolated**
{% endmarkdown %}

<div class="wmnds-grid website-icons">
  {% for icon in iconModesIsolated %}
    <div class="wmnds-col-1-2 wmnds-col-lg-1-4 text-center">
      {{
        wmndsIcon({
          icon: 'modes-isolated-' + icon
        })
      }}
      <p>{{ 'modes-isolated-' + icon }}</p>
    </div>
  {% endfor %}
</div>

{% markdown %}
**With background**

{% endmarkdown %}

<div class="wmnds-grid website-icons">
  {% for icon in iconModesBackground %}
    <div class="wmnds-col-1-2 wmnds-col-lg-1-4 text-center">
      {{
        wmndsIcon({
          icon: 'modes-bg-' + icon
        })
      }}
      <p>{{ 'modes-bg-' + icon }}</p>
    </div>
  {% endfor %}
</div>

{% endblock %}
