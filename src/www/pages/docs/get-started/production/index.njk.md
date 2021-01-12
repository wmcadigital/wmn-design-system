{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Production" %}
{% set section = "Docs" %}
{% from "wmnds/components/warning-text/_warning-text.njk" import wmndsWarningText %}

{% block content %}

{% markdown %}

## Start using the design system

To start using our styles, components and patterns in your production project, you'll first need to include West Midlands Network Design System in your project.

There are currently two ways of including the design system within your poject. You can either install it using node package manager (npm) or include the compiled files in your application.

---

### Option 1: include compiled files (recommended)

Getting started is as simple as including West Midlands Network Design System's minified CSS file and adding <code class="wmnds-website-inline-code">.wmnds-html</code> to the html element in your service/application:

#### Quick setup

1. Add the below snippet of code to your page(s) within your project
   <pre><code class="html wmnds-show-more-ignore" tabindex="0">
     {%- filter forceescape %}
     <!DOCTYPE html>
     <html lang="en-gb" class="wmnds-html">
       <head>
         <!-- CSS for WMN Design System -->
         <link rel="stylesheet" href="https://unpkg.com/wmn-design-system@$*version/build/css/wmnds.min.css" />
       </head>
       <body>
         <!-- site content... -->
       </body>
     </html>
     {%- endfilter %}
     </code></pre>

2. Add <a href='/styles/icons/#using-icons' title='Documentation about using icons' target='_blank'>West Midlands Network Design System icons</a> to your project.

#### Start developing

You should now be able to include West Midlands Network Design System components and patterns using the design system documentation. Expand the HTML markup tabs on each page to see how to include that component/pattern to your project.

---

### Option 2: install using npm

West Midlands Network Design System is available on npm as <a href="https://www.npmjs.com/package/wmn-design-system" target="_blank" class="wmnds-link">wmn-design-system</a>. This package contains all of West Midlands Network Design System [styles](/styles/), [components](/components/) or [patterns](/patterns/) and documentation.

#### Add design system package to your project

1. Install <a href="https://nodejs.org/en/" target="_blank" class="wmnds-link">Node.js</a>
   If you have not already installed version 4.2.0 or later of Node.js, install the latest Long Term Support(LTS) version.

2. Navigate to the root folder of your new project

3. Ensure you have a <a href="https://docs.npmjs.com/files/package.json" target="_blank" class="wmnds-link">package.json file</a>. If you do not have the file, create it by opening the terminal and running:
<pre><code class="bash wmnds-show-more-ignore" tabindex="0">npm init</code></pre>

4. In your terminal, run:
   <pre><code class="bash wmnds-show-more-ignore" tabindex="0">npm install wmn-design-system --save</code></pre>

   When the installation finishes, the <code class="wmnds-website-inline-code">wmn-design-system</code> will be in your <code class="wmnds-website-inline-code">node_modules</code> folder and will appear in your <code class="wmnds-website-inline-code">package.json</code> file.

#### Setup CSS

1. Add the following to the main Sass file in your project, so that your compiler adds all of West Midlands Network Design System's styles to your compiled CSS file.

   <pre><code class="scss wmnds-show-more-ignore" tabindex="0">@import "node_modules/wmn-design-system/src/wmnds/sass/wmnds.scss</code></pre>

2. Add your CSS file to your page layout if you need to, for example:
<pre><code class="html wmnds-show-more-ignore" tabindex="0">
  {%- filter e -%}
  <head>
        <link rel="stylesheet" href="YOUR-CSS-FILE.css" />
  </head>
  {%- endfilter -%}
</code></pre>

#### Start developing

You should now be able to include West Midlands Network Design System components and patterns using the design system documentation. Expand the nunjucks markup and properties tabs on each page to see how to include that component/pattern to your project.

{% endmarkdown %}

{% endblock %}
