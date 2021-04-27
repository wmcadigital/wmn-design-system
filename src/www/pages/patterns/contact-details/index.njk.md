{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Contact details" %}
{% set section="Patterns" %}
{# Imports #}
{% from "wmnds/patterns/contact-details/_contact-details.njk" import wmndsContactDetails %}
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
        wmndsContactDetails(
            {
                contentBeforeWarning: "Customer Services<br>Transport for West Midlands<br>16 Summer Lane<br>Birmingham<br>B19 3SD"
            }
        )
    ])
}}

<h2>Contact Details - Template</h2>

{% set contactDetailsTemplateAfter = "

<p>
    <a href=\"mailto:customerservice@tfwm.org.uk\">customerservice@tfwm.org.uk</a><br>
    Telephone: <a href=\"tel:03453036760\">0345 303 6760</a>
</p>
Monday to Tuesday and Thursday to Friday, 9am - 5pm, <br>
Wednesday, 9.30am - 5pm" %}

{{
    compExample([
        wmndsContactDetails({
            contentBeforeWarning: "Transport for West Midlands",
            warningText: "We are currently experiencing problems with our <br>telephone systems and cannot answer calls",
            warningIcon: "general-warning-triangle",
            contentAfterWarning: contactDetailsTemplateAfter
        })
    ])
}}

<h2>Contact Details - Template TfWM</h2>

{% set templateTFWMExample= "

<address class='wmnds-contact-details'>
    <p>Transport for West Midlands</p>
    <p>
        <a href=\"https://twitter.com/wmnetwork\">Twitter</a><br>
        <a href=\"https://www.facebook.com/westmidlandsnetwork\">Facebook</a><br>
    </p>
    <p>
        <a href=\"https://www.wmnetwork.co.uk/get-in-touch/contact-us/\">Submit an enquiry</a><br>
        Telephone: <a href=\"tel:03453036760\">0345 303 6760<br></a>
    </p>
    Monday to Tuesday and Thursday to Friday, 9am - 5pm, <br>
    Wednesday, 9.30am - 5pm<br>
    Saturday and Sunday, closed
    </address>"
%}

{{
    compExample([
        wmndsContactDetails({
            facebook: "https://www.facebook.com/westmidlandsnetwork"
        })
    ])
}}

{% endblock %}
