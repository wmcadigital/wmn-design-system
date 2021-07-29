{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Friendly links (short URLs)" %}
{% set section = "Styles" %}

{% block content %}

{% markdown %}
{# About #}

## Introduction

A short URL (friendly link) is used when:

- someone needs to remember a link
- someone needs to type the link in a time-sensitive situation

A friendly link takes the user to a specific area of content or link.

## When you need a friendly link

You must only create a friendly link for a:

- Billboard
- Poster
- Test message
- Road sign
- Real-time information screen

## When you do not need a friendly link

You do not need a friendly link if:

- You want to link to an external website, we have removed this restriction
- You are renaming a page or section, the system automatically handles this

<div class="tfwmds-inset-text">
  You should not use our website as a link shortener for a different or external website. For example, redirecting <code class="tfwmds-website-inline-code">wmnetwork.co.uk/google</code> to <code class="tfwmds-website-inline-code">google.com</code>.
  <p class="tfwmds-m-none">Users associate these redirects with scams and viruses. Instead, link straight to the external website.
</div>

## Choosing a friendly link

It is important that your friendly link is easy to remember. It must:

- be less than 20 characters
- be lowercase
- use hyphens instead of spaces

Do not use:

- articles, for example 'a', 'an' or 'the'
- special characters
- abbreviations, for example <code class="tfwmds-website-inline-code">bham</code> and <code class="tfwmds-website-inline-code">westmids</code>
- uppercase
- <code class="tfwmds-website-inline-code">wmn</code>, <code class="tfwmds-website-inline-code">tfwm</code> or <code class="tfwmds-website-inline-code">wmca</code>

### Examples of good links

- <code class="tfwmds-website-inline-code">/baby-on-board</code>
- <code class="tfwmds-website-inline-code">/cycle-hire</code>
- <code class="tfwmds-website-inline-code">/dudley</code>
- <code class="tfwmds-website-inline-code">/tram</code>
- <code class="tfwmds-website-inline-code">/16-18</code>
- <code class="tfwmds-website-inline-code">/sms-feedback</code>
- <code class="tfwmds-website-inline-code">/2041</code>

## Creating a friendly link

### Friendly links for specific pages

Content editors can create a friendly link for a piece of content using the <strong>friendly links</strong> tab when editing a page.

### Friendly links that go to another website

Only administrators can set up this type of link.
These links are accessed in the SEO Checker part of the Back Office. Click <strong>redirect manager</strong> to see all active redirects and friendly links.

<div class="tfwmds-inset-text">
  <p class="tfwmds-m-none">You do not need to create a redirect if you are linking to an external website
</div>

## Checking if your friendly link is being used

Using the friendly links tab when editing a page, you can see:

- Last referrer, the webpage the user was on when they clicked the friendly link
- Accessed, the number of times the link has been used
- Last time accessed, the last date and time someone used the friendly link

## Deleting a friendly link

Friendly links need to be carefully managed.

You should delete friendly links when your campaign is over. If you do not delete it, someone else might be afraid to in the future.

When a friendly link is deleted, the user will be taken to a 404 'content not found' page.
Sometimes friendly links cannot be deleted because they are part of passenger information. Passenger information is usually only replaced when there is a timetable change.
In this case, you can delete the redirect and add it to a related piece of content. The user will be taken there instead.

## Credit

We have written these standards based on:

- <a href="https://content.tfl.gov.uk/onl-std-077-short-url-and-domain-name-standard.pdf" target="_blank" rel="nofollow">Transport for London's short URL and domain name standard</a>
- <a href="https://www.gov.uk/guidance/content-design/url-standards-for-gov-uk" target="_blank" rel="nofollow">GOV.UK's URL standards for GOV.UK</a>

{% endmarkdown %}
{% endblock %}
