{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Inset Text" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "tfwmds/components/inset-text/_inset-text.njk" import tfwmdsInsetText %}

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
- To highlight important information that is key to the transaction/service or time critical. Use <a href="/components/warning-text" target="_self">Warning Text</a> instead.

### How to use it?

- Use inset text sparingly. They're less effective if overused.
- Users with visual disabilities may not be able to see the colour that helps it stand out. Instead, they may rely on a hidden label to recognise it. Hide <span>Information:</span> inside the Inset Text <code class="tfwmds-website-inline-code"> div </code> so that users with screen readers understand this information is different to body text.

{% endmarkdown %}

{{
    compExample([
        tfwmdsInsetText({
            contentHTML: "Example of inset text"
        })
    ], {
      componentPath: "tfwmds/components/inset-text/",
      njk: true,
      njkProps: tfwmdsInsetTextProps,
      js: false,
      iframe: false
    })
  }}
{# End inset text #}

{% markdown %}

{# Question #}

## Example Callout

<h3>What does it do?</h3>

- Highlight a contextual example to provide help users understand the broader page content.

<h3>When to use it?</h3>

- When a contextual example might help the user understand the information.

<h3>When not to use it?</h3>

- When the information is simple enough for our user's to understand. Don't give an example for the sake of it.

<h3>How to use it?</h3>

- Use a concise heading that a user can easily scan and understand.
- Make sure the heading is relevant to both the content it's supporting and the context it is providing in the main body text.
- Add an <code class="tfwmds-website-inline-code">aria-label</code> to the parent Example Callout <code class="tfwmds-website-inline-code"> div </code> so that users with screen readers understand that the information is important.

{% endmarkdown %}

{{
    compExample([
        tfwmdsInsetText({
            contentHTML:  "Example Callout title<br>Example callout description.",
            label: "Example Callout"
        })
    ], {
      componentPath: "tfwmds/components/inset-text/",
      njk: true,
      njkProps: tfwmdsInsetTextProps,
      js: false,
      iframe: false
    })
  }}
{# End inset text #}

{% endblock %}
