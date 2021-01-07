{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Form elements" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}
{% markdown %}
{# Label #}

## Form Label

### What does it do?

- Tells users what a field is for.

### When to use it?

- When you are requesting multiple pieces of information to answer the same question. For example, the day, month and year of a date.
- The label must appear directly above the field.

### When not to use it?

- Do not use this component to ask more questions within a question - instead, ask a new question.
- When you're giving extra information and hints to help the user answer a question.

{% endmarkdown %}

{% from "wmnds/components/form-elements/label/_label.njk" import wmndsLabel %}
{{
  compExample([wmndsLabel()])
}}
{# End label #}

{% markdown %}

{# Question #}

## Question

<h3>What does it do?</h3>

- Asks the user a question about information the service needs.

<h3>When to use it?</h3>

- When you are asking users for information as part of a service.

<h3>When not to use it?</h3>

- When it's not part of a service.
- When there are multiple questions on the same page, unless you have user research that says it makes sense to group the question?

<h3>How it works?</h3>

- Always test questions with users through user research
- Make sure your <a href="https://www.gov.uk/service-manual/design/designing-good-questions">question makes sense</a>
- Sometimes it makes sense to group a few questions on the same page
- Make sure users know why you're asking the question and only ask users for information you really need
- Add (optional) to the end of each question that is optional

{% endmarkdown %}

{% from "wmnds/components/form-elements/question/_question.njk" import wmndsQuestion %}
{{
  compExample([wmndsQuestion()])
}}
{# End question #}

{% markdown %}

{# Progress Indicator #}

## Progress Indicator

<h3>What does it do?</h3>

- It is visual representation of progress through a set of steps that guides user in order to complete a specified process. Knowing where the user is in their progress can help improve their orientation within the system. It sets expectations and gives and impression of activity and progress.

<h3>When to use it?</h3>

- When you want to tell users where they are in the process.
- When you want to reassure users that the system is working and reduce user’s uncertainty.

<h3>When not to use it?</h3>

- When progress cannot be measured and therefore does not have a percentage that indicates the amount of progress.

{% endmarkdown %}

{% from "wmnds/components/form-elements/progress-indicator/_progress-indicator.njk" import wmndsProgressIndicator %}
{{
  compExample([wmndsProgressIndicator()])
}}

{# Progress Indicator #}

{% markdown %}

{# Dropdown #}

## Dropdown

<h3>What does it do?</h3>

- Navigation expands when user hovers or clicks on it revealing options to select.
<h3>When to use it?</h3>

- When there is limited space and you need to reduce the space taken on the page
- When an input is nonessential, e.g. sorting list
- When you need flexibility because you do not know how many options there will be. All options are contained within the drop down component.

<h3>When not to use it?</h3>

- Drop down creates more work for your user because it is a multi-step process, they hide available options and they slow users down by defaults therefore if possible use another component to display options e.g. radio buttons, text field, input selector
- Do not use when drop down option has more than 36 characters because users will not be able to read them on some mobile devices

{% endmarkdown %}

{% from "wmnds/components/form-elements/dropdown/_dropdown.njk" import wmndsDropdown %}
{{
  compExample([wmndsDropdown()])
}}
{# End Dropdown #}

{% markdown %}

{# Input #}

## Text Input / Text Field

<h3>What does it do?</h3>

- Allows users to enter text.

<h3>When to use it?</h3>

- When user needs to enter short amount of text, e.g. name, email.

<h3>When not to use it?</h3>

- When user needs to add a lot of text that might go over multiple lines<
- Use fixed width inputs for content that has known length, e.g. postcode.

{% endmarkdown %}

{% from "wmnds/components/form-elements/input/_input.njk" import wmndsInput %}
{{
  compExample([wmndsInput()])
}}
{# End Input #}

{% markdown %}

{# Radios #}

## Radios

<h3>What does it do?</h3>

- Allows users select one option from multiple options.

<h3>When to use it?</h3>

- When user can select just one option from multiple options.

<h3>When not to use it?</h3>

- When user may need to select more than one option.

{% endmarkdown %}

{% from "wmnds/components/form-elements/radios/_radios.njk" import wmndsRadios %}
{{
  compExample([wmndsRadios()])
}}

{% markdown %}

### Inline Radios

{% endmarkdown %}

{{
  compExample([
    wmndsRadios({
      inline: true
    })
  ])
}}
{# End Radios #}

{% markdown %}

{# File uploader #}

## File uploader

<h3>What does it do?</h3>

- Allows user to select and submit content of their own.

<h3>When to use it?</h3>

- When it is essential for user to provide information for you so you can provide the service

<h3>When not to use it?</h3>

- When information is not essential for your delivery of service
- When information can come from API or another source.

{% endmarkdown %}

{% from "wmnds/components/form-elements/file-upload/_file-upload.njk" import wmndsFileUpload %}
{{
  compExample([wmndsFileUpload()])
}}

{% markdown %}

### With file uploaded

{% endmarkdown %}
{{
  compExample([
    wmndsFileUpload({
      fileSelected: true
    })
  ])
}}
{# End File uploader #}

{% markdown %}

{# Textarea #}

## Textarea

<h3>What does it do?</h3>

- Allows users to enter more than one line of text.
- Allows users to write whatever they like, also called free text.

<h3>When to use it?</h3>

- When the user needs to enter lots of text. For example, a paragraph.

<h3>When not to use it?</h3>

- When the user needs to enter one line of text. Use the input component instead.
- Use fixed-width inputs for content that has a known length, e.g. postcode.
- When there are limited options. Use a different form element that limits the options.

{% endmarkdown %}

{% from "wmnds/components/form-elements/textarea/_textarea.njk" import wmndsTextarea %}
{{
  compExample([
    wmndsTextarea()
  ])
}}

{# End Textarea #}

{% markdown %}

{# Handling error #}

## Handling errors

<h3>What does it do?</h3>

- Lets the user know what is wrong with their answer.
- Tells the user how to correct their answer.
- Tells the user what format or characters it is expecting.
- Prevents the user from trying to submit information that will be rejected by the API.

<h3>When to use it?</h3>

- A handling error is used in addition to an error summary, which shows all errors on a page.
- When there has been an error with validating the user's answer after they try to continue to the next step.
- When the error is a validation error that is fixable.
- Use a separate error for each group of answer fields. For example, one error for date fields.
- The corrective action should be read by a screen reader before data entry components.

<h3>When not to use it?</h3>

- Do not show the error until the user tries to move to the next step. Immediate validation can distract a user from progressing, especially if it validates as the user is typing.
- Hint text should help the user to understand how the field will be validated.
- If the service is down the user should be shown a service unavailable page.

<h3>How to use it</h3>

- Make sure questions and help text are well designed and tested with users to avoid errors in the first place.
- GOV.UK has advice to follow when <a href="https://design-system.service.gov.uk/components/error-message/">writing error messages</a>.
- GOV.UK has advice for <a href="https://design-system.service.gov.uk/patterns/validation/">helping users to recover from validation errors</a>.

{% endmarkdown %}

{{
  compExample([
    wmndsInput({
      id: 'errorExample',
      error:true
    })
  ])
}}

{# End handling errors #}

{% endblock %}
