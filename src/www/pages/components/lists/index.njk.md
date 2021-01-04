{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Lists" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}

{% markdown %}

{# Ordered List #}

## Ordered List

### What does it do?

- Shows a list of related items in a specific order. List items are marked with numbers.

{# When #}

### When to use it?

- When you want to show that items follow a specific order.

{# When not #}

### When not to use it?

- When the order of list items is not relevant.

{# How to #}

### How to use it?

- List items should have similar line lengths so the one doesn’t overpower another.
- Start first list with 1, and second with 1.1, third 1.1.1 and fourth with 1.1.1.1.

{% endmarkdown %}

{% from "wmnds/components/lists/ordered-list/_ordered-list.njk" import wmndsOrderedList %}
{{
  compExample([
    wmndsOrderedList(
      {
        html: "<li>Text
                  <ol>
                    <li>Text
                      <ol>
                        <li>Text</li>
                        <li>Text
                          <ol>
                            <li>Text</li>
                          </ol>
                        </li>
                        <li>Text</li>
                      </ol>
                    </li>
                    <li>Text</li>
                  </ol>
              </li>
              <li>Text</li>"
      }) | trim
  ])
}}
{% markdown %}
{# Unordered list #}

## Unordered List

{# What #}

<h3>What does it do?</h3>

- Shows a list of items in no particular order

{# When #}

<h3>When to use it?</h3>

- When the order of the items is not relevant. List items are marked with a bullet.

{# When not #}

<h3>When not to use it?</h3>

- When order of list items is relevant and needs to follow a specific order.

{# How to #}

<h3>How to use it?</h3>

- List items should have similar line lengths, doesn’t overpower another.
- Include related items that are a similar level of importance.

{% endmarkdown %}

{% from "wmnds/components/lists/unordered-list/_unordered-list.njk" import wmndsUnorderedList %}
{{
compExample([
wmndsUnorderedList(
{
html:
    "<li>Text
      <ul>
        <li>Text
          <ul>
            <li>Text
              <ul>
                <li>Text</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>"
    }) | trim
  ])
}}

{% endblock %}
