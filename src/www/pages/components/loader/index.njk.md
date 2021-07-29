{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Loader" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}

{% markdown %}
{# Loader #}

## Loader

{# What #}

### What does it do?

- Helps users to understand they need to wait for something to finish happening
- Continues to play the animation until the action is complete

{# When #}

### When to use it?

- When you are calling an API
- In the area of the page that the action is occurring
- Example: within a search box

{# When not #}

### When not to use it?

- A service should not go live if there is a whole-page loading spinner
- Try to avoid using a loading spinner, our services should respond quickly
- If an action takes a long time, users will lose trust in the service

**By default you should aim to use the 'normal sized loader'.** <br>
Only when the normal sized loader is not fit for purpose should you use the large or small sized loader.

Change the text within <code class="tfwmds-website-inline-code">.tfwmds-loader\_\_content</code> from 'Content is loading...' to something that describes what it is you are loading, this will help with accessibility.

{% endmarkdown %}

{% from "tfwmds/components/loader/_loader.njk" import tfwmdsLoader %}
{{
  compExample([
    tfwmdsLoader({
      size: 'small'
    }),
    tfwmdsLoader(),
    tfwmdsLoader({
      size: 'large'
    })
  ], {
    componentPath: "tfwmds/components/loader/",
    njk: true,
    njkProps: tfwmdsLoaderProps,
    js: false,
    iframe: false
  })
}}

{% endblock %}
