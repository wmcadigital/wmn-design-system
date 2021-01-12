{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Mobile application" %}
{% set section = "Docs" %}
{% from "wmnds/components/warning-text/_warning-text.njk" import wmndsWarningText %}

{% block content %}

{% markdown %}

## About

West Midlands Network Design System currently supports one method of including styles within your mobile application.

### Developing an app for mobile devices - React Native

If you are using React Native, you can import our styles like the example:

<pre><code class="javascript" tabindex="0">
{%- filter forceescape -%}
// Import react native styles for WMN Design System
import wmndsStyles from "https://unpkg.com/wmn-design-system@$*version/build/css/react-native/wmnds.min.js"
{%- endfilter -%}
</code></pre>

{% endmarkdown %}

{% endblock %}
