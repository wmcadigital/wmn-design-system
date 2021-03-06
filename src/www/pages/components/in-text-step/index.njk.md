{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "In-text step" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}
{% markdown %}
{# In-text Step #}

## In-text step

### What does it do?

- Show a series of steps in an order within a piece of content

### When to use it?

- When there are multiple steps to a process
- When you are explaining this within a piece of content

### When not to use it?

- Numbered (ordered) lists are better to show a list
- When you are not displaying a process

{% endmarkdown %}

{% from "wmnds/components/in-text-step/_in-text-step.njk" import wmndsInTextStep %}
{{
    compExample([
        wmndsInTextStep({
            items: [
                {
                    contentText: "Step text must end with a full stop."
                },
                {
                    contentText: "Step text must end with a full stop."
                },
                {
                    contentText: "Step text must end with a full stop."
                }
            ]
        })
    ],
    {
        componentPath: "wmnds/components/in-text-step/",
        njk: true,
        njkProps: wmndsInTextStepProps,
        js: false,
        iframe: false
    })
}}

{# End label #}

{% endblock %}
