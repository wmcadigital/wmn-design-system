{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Contact details" %}
{% set section="Patterns" %}
{# Imports #}
{% from "tfwmds/patterns/contact-details/_contact-details.njk" import tfwmdsContactDetails %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}
{% markdown %}

## About

{# What #}

### What does it do?

- Show users the channels they can use to get in contact with you

{# When #}

### When to use it?

- When users need to have a way to contact someone
- To provide users with an alternative way to do something

{# When not #}

### When not to use it?

- On pages where a service is not being offered

{# How it works #}

### How it works?

- Order contact channels consistently: telephone, email, online chat, postal address and social media
- In the Umbraco CMS, you can create a contact detail block to ensure

GOV.UK has detailed information about [how to display contact details](https://design-system.service.gov.uk/patterns/contact-a-department-or-service-team/).

## Contact Details - Address

{% endmarkdown %}

{{
    compExample([
        tfwmdsContactDetails({
            department: "Customer Services",
            organisation: "Transport for West Midlands",
            address: "16 Summer Lane<br>Birmingham<br>B19 3SD"
        })
    ])
}}

<h2>Contact Details - Template</h2>

{{
    compExample([
        tfwmdsContactDetails({
            organisation: "Transport for West Midlands",
            alertMessage: "We are currently experiencing problems with our <br>telephone systems and cannot answer calls",
            alertIcon: "general-warning-triangle",
            email: "customerservice@tfwm.org.uk",
            telephone: "0345 303 6760",
            workingHours: "Monday to Tuesday and Thursday to Friday, 9am - 5pm, <br>Wednesday, 9.30am - 5pm"
        })
    ])
}}

<h2>Contact Details - Template TfWM</h2>

{{
    compExample([
        tfwmdsContactDetails({
            organisation: "Transport for West Midlands",
            twitter: "https://twitter.com/wmnetwork",
            facebook: "https://www.facebook.com/westmidlandsnetwork",
            enquiryLink: "https://www.wmnetwork.co.uk/get-in-touch/contact-us/",
            telephone: "0345 303 6760",
            workingHours: "Monday to Tuesday and Thursday to Friday, 9am - 5pm, <br>Wednesday, 9.30am - 5pm<br>Saturday and Sunday, closed"
        })
    ])
}}

{% endblock %}
