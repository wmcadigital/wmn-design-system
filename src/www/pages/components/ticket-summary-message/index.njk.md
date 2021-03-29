{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Ticket summary message" %}

{% from "wmnds/components/ticket-summary-message/_ticket-summary-message.njk" import wmndsTicketSummaryMsg %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}

{% markdown %}

{# About #}

## About

### What does it do?

- The messages give an overall summary of what the ticket buyer can and cannot do, so they can understand the limits of the ticket they want to purchase

### How it works

- The relevant ticket messages appear on the ticket summary page below the full name and price of the ticket
- The You can and You cannot messages are shown on every ticket summary by default. You must and Swift card/photocard messages only appear if they are relevant to the chosen ticket

{# You can #}

## You can

{% endmarkdown %}

{{
  compExample([
    wmndsTicketSummaryMsg({
      type: 'you-can',
      listItemsHTML: [
        'Travel as much as you like for one month',
        'Travel by bus in the Regional bus area',
        'Travel using any bus operator',
        'Get <a href="#">discounts for local attractions</a>'
      ]
    })
  ],
  {
    componentPath: "wmnds/components/ticket-summary-message/",
    njk: true,
    njkProps: wmndsTicketSummaryMsgProps
  })
}}

{% markdown %}

{# You cannot #}

## You cannot

{% endmarkdown %}

{{
  compExample([
    wmndsTicketSummaryMsg({
      type: 'you-must',
      listItemsHTML: [
        'Be 5 to 15 years old or have a 16 to 18 Swift photocard'
      ]
    })
  ],
  {
    componentPath: "wmnds/components/ticket-summary-message/",
    njk: true,
    njkProps: wmndsTicketSummaryMsgProps
  })
}}

{% markdown %}

{# You must #}

## You must

### When to use it?

- If a ticket requires prerequisites for it to be valid, such as a photocard or if it requires a certain amount of people

{% endmarkdown %}

{{
  compExample([
    wmndsTicketSummaryMsg({
      type: 'you-cannot',
      listItemsHTML: [
        'Travel by train or tram',
        'Share your ticket with other people'
      ]
    })
  ],
  {
    componentPath: "wmnds/components/ticket-summary-message/",
    njk: true,
    njkProps: wmndsTicketSummaryMsgProps
  })
}}

{% markdown %}

## Swift card or photocard

{# Fix duplicate id error for 'When to use it sections' #}

<h3 id="when-to-use-it-swift">How to use it?</h3>

- When a ticket can be loaded onto a Swift card or Swift photocard
- This message must contain the terms and conditions for the relevant Swift card type

{% endmarkdown %}

{{
  compExample([
    wmndsTicketSummaryMsg({
      type: 'swift',
      listItemsHTML: [
        'This ticket will be on a Swift card with your photo on',
        'If you already have a Swift card, you can add this ticket to it. You\'ll need to collect your ticket before you travel',
        'If you need a Swift card, we\'ll send this in the post. It takes seven days to arrive. If you need it sooner, you can get one from a Swift kiosk or Travel Centre',
        'You must carry your Swift card whenever you\'re travelling. You\'ll need to tap in on buses, at tram stops and train stations',
        'You can replace your Swift card if it\'s lost or stolen. You won\'t have to buy a new ticket'
      ],
      contentAfterHTML: '<a href="#">Read the full terms and conditions</a>'
    })
  ],
  {
    componentPath: "wmnds/components/ticket-summary-message/",
    njk: true,
    njkProps: wmndsTicketSummaryMsgProps
  })
}}

{% endblock %}
