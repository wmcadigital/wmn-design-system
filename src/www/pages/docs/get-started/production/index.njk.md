{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Production" %}
{% set section = "Docs" %}
{% from "wmnds/components/warning-text/_warning-text.njk" import wmndsWarningText %}

{% block content %}

{% markdown %}

## Start using the design system

To start using our styles, components and patterns in your production project, you'll first need to include West Midlands Network Design System in your project.

There are currently two ways of including the design system within your poject. You can either install it using node package manager (npm) or include the compiled files in your application.

### Option 1: install using npm

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

### Option 2: include compiled files

<h3>Developing a web service</h3>
<p class="wmnds-col-md-3-4">
  Getting started is as simple as including West Midlands Network Design System's minified CSS file and adding <code class="wmnds-website-inline-code">.wmnds-html</code> to the html element in your service/application:
</p>
<pre>
  <code class="html wmnds-show-more-ignore" tabindex="0">
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
  </code>
</pre>
<br>
{{
   wmndsWarningText({
      contentHTML: "You should read <a href='/styles/icons/#using-icons' title='Documentation about using icons' target='_blank'>documentation about using icons in your service</a>.",
      icon: warning-triangle
    })
}}
<br>
<br>
<h3>Developing an app for mobile devices</h3>
<p>If you are using React Native, you can import our styles like the example:</p>
<pre>
  <code class="javascript" tabindex="0">
    {% filter forceescape %}// Import react native styles for WMN Design System
    import wmndsStyles from "https://unpkg.com/wmn-design-system@$*version/build/css/react-native/wmnds.min.js"
    {%- endfilter %}
  </code>
</pre>
<h3>Before making a service live</h3>
<p>You must:
<ul>
  <li>Make sure you've tested your service with real users</li>
  <li>Make sure you meet <a href="https://www.gov.uk/guidance/make-your-website-or-app-accessible-and-publish-an-accessibility-statement?utm_source=CampaignPage1&utm_campaign=access_regs" target='_blank'>accessibility regulations</a> else you might be <a href="https://www.legislation.gov.uk/uksi/2018/952/made" title="The Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018" target='_blank'>breaking the law</a></li>
  <li><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=RetZCK7xCk6e-ubWa7tnL0kEZK0X_-9IoNQ__PZJI49UNlBZUFRPNENVTFRWV08xQk1SN0FPR0dDQi4u" title="Let us know you're using the design system" target='_blank'>Let us know</a> you're using the design system on a live service</li>
</ul>
</p>
<br>

{% endmarkdown %}

{% endblock %}
