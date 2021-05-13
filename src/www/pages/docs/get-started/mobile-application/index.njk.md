{% extends "www/_layouts/layout-docs.njk" %}
{% set pageTitle = "Mobile application" %}
{% set section = "Docs" %}
{% from "wmnds/components/warning-text/_warning-text.njk" import wmndsWarningText %}

{% block content %}

{% markdown %}

## About

Transport for West Midlands Design System currently supports one method of including styles within your mobile application.

### Developing an app for mobile devices - React Native

If you are using React Native, you can import our styles by adding the following code to your project:

<pre><code class="javascript" tabindex="0">
{%- filter forceescape -%}
// Import react native styles for WMN Design System
import wmndsStyles from "https://unpkg.com/wmn-design-system@$*version/build/css/react-native/wmnds.min.js"
{%- endfilter -%}
</code></pre>

When you have added the code to your project, you can start using the Transport for West Midlands Design System. See [using the design system](../using-the-design-system/).

{% endmarkdown %}

{% endblock %}
