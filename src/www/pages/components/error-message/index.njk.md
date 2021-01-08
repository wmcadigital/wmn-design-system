{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Error Message" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/components/form-elements/input/_input.njk" import wmndsInput %}

{% block content %}

{% markdown %}

## About

### What does it do?

- Lets the user know what is wrong with their answer.
- Tells the user how to correct their answer.
- Tells the user what format or characters it is expecting.
- Prevents the user from trying to submit information that will be rejected by the API.

### When to use it?

- A handling error is used in addition to an error summary, which shows all errors on a page.
- When there has been an error with validating the user's answer after they try to continue to the next step.
- When the error is a validation error that is fixable.
- Use a separate error for each group of answer fields. For example, one error for date fields.
- The corrective action should be read by a screen reader before data entry components.

### When not to use it?

- Do not show the error until the user tries to move to the next step. Immediate validation can distract a user from progressing, especially if it validates as the user is typing.
- Hint text should help the user to understand how the field will be validated.
- If the service is down the user should be shown a service unavailable page.

### How to use it

- Make sure questions and help text are well designed and tested with users to avoid errors in the first place.
- GOV.UK has advice to follow when <a href="https://design-system.service.gov.uk/components/error-message/">writing error messages</a>.
- GOV.UK has advice for <a href="https://design-system.service.gov.uk/patterns/validation/">helping users to recover from validation errors</a>.

{% endmarkdown %}

{{
    compExample([
      wmndsInput({
        id: 'errorExample',
        error:true,
        errorMessage: {
            contentText: "Custom error message"
        }
      })
    ],
    {
        componentPath: "wmnds/components/error-message/",
        njk: true,
        njkProps: wmndsErrorMessageProps,
        js: false,
        iframe: false
    }
  )
}}
{# End handling errors #}

{% endblock %}
