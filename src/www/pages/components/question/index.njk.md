{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Question" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}

{% markdown %}

{# Question #}

## About

### What does it do?

- Asks the user a question about information the service needs.

### When to use it?

- When you are asking users for information as part of a service.

### When not to use it?

- When it's not part of a service.
- When there are multiple questions on the same page, unless you have user research that says it makes sense to group the question?

### How it works?

- Always test questions with users through user research
- Make sure your <a href="https://www.gov.uk/service-manual/design/designing-good-questions">question makes sense</a>
- Sometimes it makes sense to group a few questions on the same page
- Make sure users know why you're asking the question and only ask users for information you really need
- Add (optional) to the end of each question that is optional

{% endmarkdown %}

{% from "tfwmds/components/form-elements/question/_question.njk" import tfwmdsQuestion %}
{{
  compExample([
    tfwmdsQuestion()
  ],
  {
    componentPath: "tfwmds/components/form-elements/question/",
    njk: true,
    njkProps: tfwmdsQuestionProps,
    js: false,
    iframe: false
  })
}}
{# End question #}

{% endblock %}
