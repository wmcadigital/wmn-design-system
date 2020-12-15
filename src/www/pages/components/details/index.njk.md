{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Details" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}

{# Details component #}
{%- from "wmnds/components/details/_details.njk" import wmndsDetails -%}

{% markdown %}

## About

### What does it do?

    - Allows users to reveal more detailed information if they need it.
    - Allows users to scan the page more easily.

### When to use it?

    - When you need to provide more detailed information.
    - When you need to hide extra information that only some users will need.
    - When you only need to provide 1 piece of extra information on the given subject.

### When not to use it?

    - To hide information that is important to the majority of users
    - If you need to provide more than 1 piece of extra information related to a given subject. In this instance, use an Accordion.
    - To provide extra context inside a form. Users mistake it for a text link and worry they'll lose their data if they click.

### How it works?

    - The details component expands into more detailed text when a user clicks on it.
    - Inside the <code class="wmnds-website-inline-code">{{ "<details>" }}</code> tag, include 1 <code class="wmnds-website-inline-code">{{ "<summary>" }}</code> and 1 <code class="wmnds-website-inline-code">{{ "<div>" }}</code> tag as direct children of <code class="wmnds-website-inline-code">{{ "<details>" }}</code>
    - Place your link text inside <code class="wmnds-website-inline-code">{{ "<summary>" }}</code> and the important information inside the <code class="wmnds-website-inline-code">{{ "<div>" }}</code>.

---

## Reduced

{% endmarkdown %}
{{
    compExample([
        wmndsDetails({
            headingText: "Detail summary",
            contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        })
    ],
    {
      componentPath: "wmnds/components/details/",
      njk: true,
      njkProps: wmndsDetailsProps,
      js: false,
      iframe: false
    })
}}

{% markdown %}

## Expanded

{% endmarkdown %}
{{
    compExample([
        wmndsDetails({
            isOpen: true,
            headingText: "Detail summary",
            contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        })
    ],
    {
      componentPath: "wmnds/components/details/",
      njk: true,
      njkProps: wmndsDetailsProps,
      js: false,
      iframe: false
    })
}}
{% endblock %}
