{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Message" %}

{% from "wmnds/components/message/summary/_summary.njk" import wmndsMsgSummary %}
{% from "wmnds/components/message/help/_help.njk" import wmndsMsgHelp %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}

{% markdown %}
{# About #}

## About

### What does it do?

- Gives user feedback during the interaction with a website (informs about error, warning, success). Messages are colour coded and use symbols to reinforce the message. The structure of the message: what happened? what does it mean? what can user do about it?)

<h3>When to use it?</h3>

- When user needs explicit indication that something has gone wrong (user error or website/app error)
- When user is about to do something that is destructive or when the result of an action is unexpected but it is not an error (Warning Message)
- When user needs confirmation of success (Success message)
- When user needs key information about upcoming change (Information message).
- Real time inline validation to inform users about the correctness of provided data.

---

<br /><br />

{# Info message #}

## Information

{% endmarkdown %}
{{
  compExample([
    wmndsMsgSummary({
      type: 'info',
      title: 'Information about XXXXXXXXX was successfully updated!',
      contentText: 'Details added what happened and what to do next. Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum text.'
    })
  ],
  {
    componentPath: "wmnds/components/message/summary/",
    njk: true,
    njkProps: wmndsMsgSummaryProps,
    js: false,
    iframe: false
  })
}}
{# End info message #}

{% markdown %}

<br /><br />

{# Success message #}

## Success

{% endmarkdown %}
{{
  compExample([
    wmndsMsgSummary({
      type: 'success',
      title: 'Success confirmation',
      contentText: 'Details added if needed to confirm action.'
    })
  ],
  {
    componentPath: "wmnds/components/message/summary/",
    njk: true,
    njkProps: wmndsMsgSummaryProps,
    js: false,
    iframe: false
  })
}}
{# End success message #}

{% markdown %}

<br /><br />

{# Success message #}

## Success (fill)

{% endmarkdown %}

{{
  compExample([
    wmndsMsgSummary({
      type: 'success-fill',
      title: 'Success confirmation',
      contentText: 'Details added if needed to confirm action.'
    })
  ],
  {
    componentPath: "wmnds/components/message/summary/",
    njk: true,
    njkProps: wmndsMsgSummaryProps,
    js: false,
    iframe: false
  })
}}
{# End success message #}

{% markdown %}

<br /><br />

{# Warning message #}

## Warning

{% endmarkdown %}

{{
  compExample([
    wmndsMsgSummary({
      type: 'warning',
      title: 'Warning message',
      contentText: 'Details added what happened and what to do next. Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum.'
    })
  ],
  {
    componentPath: "wmnds/components/message/summary/",
    njk: true,
    njkProps: wmndsMsgSummaryProps,
    js: false,
    iframe: false
  })
}}
{# End Warning message #}

{% markdown %}

<br /><br />

{# Error message #}

## Error

{% endmarkdown %}

{{
  compExample([
    wmndsMsgSummary({
      type: 'error',
      title: 'Error message',
      contentText: 'Details added what happened and what to do next. Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum.'
    })
  ],
  {
    componentPath: "wmnds/components/message/summary/",
    njk: true,
    njkProps: wmndsMsgSummaryProps,
    js: false,
    iframe: false
  })
}}

{# End error message #}

{% markdown %}

<br /><br />

{# Close message variant #}

## Close message variant

<h3>What does it do?</h3>

- Allows the user to dismiss an Information, Success, Warning or Error message.

<h3>When to use it?</h3>

- When the information in the message is a response to a users action, or if the information is of low importance and only applies to a small set of users.

{% endmarkdown %}

{{
  compExample([
    wmndsMsgSummary({
      type: 'info',
      title: 'Information about XXXXXXXXX was successfully updated!',
      dismissable: true,
      contentText: 'Details added what happened and what to do next. Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum.'
    })
  ],
  {
    componentPath: "wmnds/components/message/summary/",
    njk: true,
    njkProps: wmndsMsgSummaryProps,
    js: false,
    iframe: false
  })
}}
{# End close message variant #}

{% markdown %}

<br /><br />

{# Help message #}

## Help

<h3>When to use it?</h3>

- The help message should be used when a user requires guidance on how to complete a digital task successfully.
- The user will be able to close the help message once they understand how to complete the task.

{% endmarkdown %}

{{ compExample
  ([
    wmndsMsgHelp({
      contentHTML: 'Details added what happened and what to do next.<br /> Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum.'
    })
  ],
  {
    componentPath: "wmnds/components/message/help/",
    njk: true,
    njkProps: wmndsMsgHelpProps,
    js: false,
    iframe: false
  })
}}

{# End Help message #}
{% endblock %}
