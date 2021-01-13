{% extends "www/_layouts/layout-docs.njk" %}
{% set pageTitle = "Releases" %}
{% set section = "Docs" %}
{% from "wmnds/components/warning-text/_warning-text.njk" import wmndsWarningText %}

{% block content %}

{% markdown %}

## About

West Midlands Network Design System follows <a href="http://semver.org/" target="_blank" rel="noopener noreferrer" class="wmnds-link">Semantic Versioning</a> and stores all versions of the design system on <a href="https://github.com/wmcadigital/wmn-design-system/releases" target="_blank" rel="noopener noreferrer" class="wmnds-link">Github</a> and <a href="https://www.npmjs.com/package/wmn-design-system" target="_blank" rel="noopener noreferrer" class="wmnds-link">NPM</a>.

Using this method of versioning enables West Midlands Network Design System to release new versions without breaking any projects dependant on previous releases.

This method also allows you to upgrade your project to the latest version of the design system when you are able to.

---

## Accessing a previous releases

It is recommened that you use the latest release of West Midlands Network Design System in your project. This guide explains how to access a previous release for older documentation.

1. Install <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer" class="wmnds-link">Node.js</a>
   If you have not already installed version 4.2.0 or later of Node.js, install the latest Long Term Support(LTS) version.

2. Visit <a href="https://github.com/wmcadigital/wmn-design-system/releases" target="_blank" rel="noopener noreferrer" class="wmnds-link">West Midlands Network Design System releases</a> for previous releases. This log includes a list of bug fixes, new features, as well as any breaking changes.

3. Click the link of the version number (prefixed with "v", for example <a href="https://github.com/wmcadigital/wmn-design-system/releases/tag/v1.1.0" target="_blank" rel="noopener noreferrer" class="wmnds-link">v1.1.0</a>).

4. Under the <code class="wmnds-website-inline-code">Assets</code> tab, download <code class="wmnds-website-inline-code">Source code (zip)</code> and extract it to a folder on your computer.

5. Navigate to the extracted folder and open a terminal. In your terminal, run:
<pre><code class="bash wmnds-show-more-ignore" tabindex="0">npm install</code></pre>

6. When the installation finishes in step 5. In your terminal, run:
   <pre><code class="bash wmnds-show-more-ignore" tabindex="0">npm start</code></pre>

   This will launch a local webserver. When ready, your default web browser will automatically open with your selected release of the West Midlands Network Design System.

   You can now browse the documentation for your selected release.

{% endmarkdown %}

{% endblock %}
