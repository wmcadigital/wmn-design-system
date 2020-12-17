{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Inset Text" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/components/inset-text/_inset-text.njk" import wmndsInsetText %}

{% block content %}

{% markdown %}
{# About #}

## Inset Text

### What does it do?

- Allows users to identify important content on the page as they scan the page.

### When to use it?

- When you have content that needs to standout from what's around it, such as a quote, example or additional information.

### When not to use it?

- In close proximity to visually prominent elements. Users don't notice it.
- To highlight important information that is key to the transaction/service or time critical. Use Warning Text instead.

### How to use it?

- Use inset text sparingly. They're less effective if overused.
- Users with visual disabilities may not be able to see the colour that helps it stand out. Instead, they may rely on a hidden label to recognise it. Hide <span>Information:</span> inside the Inset Text <code class="wmnds-website-inline-code"> div </code> so that users with screen readers understand this information is different to body text.

{% endmarkdown %}

{{
    compExample([
        wmndsInsetText({
            html: "Example of inset text"
        })
    ])
  }}
{# End inset text #}

<br><br>

{% markdown %}

{# Question #}

## Example Callout

### What does it do?

- Highlight a contextual example to provide help users understand the broader page content.

### When to use it?

- When a contextual example might help the user understand the information.

### When not to use it?

- When the information is simple enough for our user's to understand. Don't give an example for the sake of it.

### How to use it?

- Use a concise heading that a user can easily scan and understand.
- Make sure the heading is relevant to both the content it's supporting and the context it is providing in the main body text.
- Add an <code class="wmnds-website-inline-code">aria-label</code> to the parent Example Callout <code class="wmnds-website-inline-code"> div </code> so that users with screen readers understand that the information is important.

{% endmarkdown %}

{% from "wmnds/components/inset-text/_inset-text.njk" import wmndsInsetText %}
{{
    compExample([
        wmndsInsetText({
            html:  "Example Callout title<br>Example callout description.",
            label: "Example Callout"
        })
    ])
  }}
{# End inset text #}

{% endblock %}
