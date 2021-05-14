{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Buy a ticket" %}
{% set section="Patterns" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/patterns/buy-a-ticket/_buy-a-ticket.njk" import wmndsBuyATicket %}

{% block content %}

{% markdown %}

## What does it do?

- Helps users to enter the ticket purchase journey straight from the homepage

## When to use it?

- On the homepage

## How it works?

- This pattern directs users to the ticket finder service, where they can continue with purchasing a relevant ticket based on the ticket options they have selected

{% endmarkdown %}

{{
    compExample([
        wmndsBuyATicket()
    ])
}}

{% endblock %}
