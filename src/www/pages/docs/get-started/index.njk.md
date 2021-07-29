{% extends "www/_layouts/layout-docs.njk" %}
{% set pageTitle = "Get started" %}
{% set section = "Docs" %}
{% from "tfwmds/components/warning-text/_warning-text.njk" import tfwmdsWarningText %}

{% block content %}
{% markdown %}
The Transport for West Midlands Design System provides a collection of reusable HTML components to build custom services and experiences that adhere to Transport for West Midlands's design standards.

There are many different ways to get started with our design system. It all depends on your project's needs and whether you are developing, designing or somewhere in the middle.

**These are our guides for getting started:**

- [Prototype Kit](prototype-kit/)
- [Production](production/)
- [Mobile application](mobile-application/)
- [Design](design/)

## Using styles, components and patterns

When something is published in the Transport for West Midlands design system as a [style](/styles/), [component](/components/) or [pattern](/patterns/) we include details of what it is, how to use it, and when to use it based on our [user research](/user-research/). This should help you decide whether it’s something you can use or adapt for your service.

The guide, [using the design system](using-the-design-system/) contains more information on how to use the Transport for West Midlands Design System.

## Before making a service live

You must:

- Make sure you've tested your service with real users
- Make sure you meet <a href="https://www.gov.uk/guidance/make-your-website-or-app-accessible-and-publish-an-accessibility-statement?utm_source=CampaignPage1&utm_campaign=access_regs" target="_blank" rel="noopener noreferrer">accessibility regulations</a> else you might be <a href="https://www.legislation.gov.uk/uksi/2018/952/made" title="The Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018" target="_blank" rel="noopener noreferrer">breaking the law</a>
- <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=RetZCK7xCk6e-ubWa7tnL0kEZK0X_-9IoNQ__PZJI49UNlBZUFRPNENVTFRWV08xQk1SN0FPR0dDQi4u" title="Let us know you're using the design system" target="_blank" rel="noopener noreferrer">Let us know</a> you're using the design system on a live service

## Something missing?

If something is missing in the documentation or you found some part confusing, you can <a class="tfwmds-link" href="https://github.com/wmcadigital/wmn-design-system/issues/new?assignees=mrmjprice%2CKaterinaKir%2Cdaylesalmon&labels=question&template=question.md&title=" target="_blank" rel="noopener noreferrer" >raise an issue</a> or <a class="tfwmds-link" href="https://github.com/wmcadigital/wmn-design-system/discussions/new" target="_blank" rel="noopener noreferrer">start a discussion</a> with our team.

We always look forward to hearing from you!

{% endmarkdown %}
{% endblock %}
