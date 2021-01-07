{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Get started" %}
{% set section = "Docs" %}
{% from "wmnds/components/warning-text/_warning-text.njk" import wmndsWarningText %}

{% block content %}

{% markdown %}
{# Quick start #}

<h2>Start using the design system</h2>
<h3>Designing a new service</h3>
<p>You can <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=RetZCK7xCk6e-ubWa7tnL0kEZK0X_-9IoNQ__PZJI49UNlBZUFRPNENVTFRWV08xQk1SN0FPR0dDQi4u" target='_blank'>request the Sketch library</a>.</p>
<br>
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
<h3>Get help with using the design system</h3>
<p>The design system is maintained by the Digital and Data team at West Midlands Combined Authority.</p>
<p>You can <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=RetZCK7xCk6e-ubWa7tnL0kEZK0X_-9IoNQ__PZJI49UNlBZUFRPNENVTFRWV08xQk1SN0FPR0dDQi4u" title="Ask a question about using the design system" target='_blank'>ask a question using this form</a>.</p>
{% endmarkdown %}

{% endblock %}
