{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Progress indicator" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}
{% markdown %}

{# Progress Indicator #}

## About

### What does it do?

- It is visual representation of progress through a set of steps that guides user in order to complete a specified process. Knowing where the user is in their progress can help improve their orientation within the system. It sets expectations and gives and impression of activity and progress.

### When to use it?

- When you want to tell users where they are in the process.
- When you want to reassure users that the system is working and reduce user’s uncertainty.

### When not to use it?

- When progress cannot be measured and therefore does not have a percentage that indicates the amount of progress.

{% endmarkdown %}

{% from "tfwmds/components/form-elements/progress-indicator/_progress-indicator.njk" import tfwmdsProgressIndicator %}
{{
  compExample([
    tfwmdsProgressIndicator()
  ],
  {
    componentPath: "tfwmds/components/form-elements/progress-indicator/",
    njk: true,
    njkProps: tfwmdsProgressIndicatorProps,
    js: false,
    iframe: false
  })
}}

{# End Progress Indicator #}

{% endblock %}
