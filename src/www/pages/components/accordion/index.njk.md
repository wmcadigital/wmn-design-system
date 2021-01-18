{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Accordion" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/components/accordion/_accordion.njk" import wmndsAccordion %}
{% from "wmnds/components/disruption-indicator/small/_small.njk" import wmndsDisruptionIndicatorSmall %}

{% block content %}

{% markdown %}

{# About #}

## About

### What does it do?

- Allows users to reveal or hide related content on a page

### When to use it?

- When users need only a few key pieces of content on a single page
- When you want users to have control over the content by expanding it or hiding it (progressive
  disclosure).
- When you have long, content rich pages and you need to simplify and reduce the amount of content
  or keep the content on the single page separated by headings.
- When you want users to use headings to navigate quickly to specific sections of the page
  (Information architecture).

### When not to use it?

- When you are presenting essential information and users care about many topics on the page.
  If users need to open majority of subtopics to have their questions answered, it will
  require extra effort and click. Hiding content behind navigation diminishes user's awareness of
  it.

---

## Closed

In its closed state, the accordions
<code class="wmnds-website-inline-code">.wmnds-accordion\_\_content</code> is hidden from view.

Everything you can see whilst the accordion is in this state is nested within the
<code class="wmnds-website-inline-code">button.wmnds-accordion-summary-wrapper</code> element.

Take note that:

- The attribute <code class="wmnds-website-inline-code">aria-controls</code> is equal to the id
  set on the <code class="wmnds-website-inline-code">.wmnds-accordion\_\_content</code> element.
  This helps with accessibility, so that screen readers understand that x button controls x
  content.
- The attribute <code class="wmnds-website-inline-code">aria-expanded</code> is set to "false"
  when in the closed state. Again, this helps with accessibility.
- The only thing not visible in the
  <code class="wmnds-website-inline-code">button.wmnds-accordion-summary-wrapper</code> is the
  minimise icon.

{% endmarkdown %}

{{
  compExample([
      wmndsAccordion()
    ], {
      componentPath: "wmnds/components/accordion/",
      njk: true,
      njkProps: wmndsAccordionProps,
      js: true,
      iframe: false
    }
  )
}}

{% markdown %}

## Open

In the open state, the accordion shows all of the content it was initially hiding in the
<code class="wmnds-website-inline-code">.wmnds-accordion\_\_content</code> element.

To change the accordion to this state, you need to add the modifier class
<code class="wmnds-website-inline-code">wmnds-is--open</code> to the main
<code class="wmnds-website-inline-code">.wmnds-accordion</code> element as shown in the code
snippet.

Take note that:

- The attribute <code class="wmnds-website-inline-code">aria-expanded</code> is set to "true" when
  in the open state. Again, this helps with accessibility.
- The minus icon becomes visible in this state, whilst the plus icon is hidden.</li>

{% endmarkdown %}

{{
  compExample([
    wmndsAccordion({
        id: 'accordion-open-01',
        isOpen: true
      })
  ], {
    componentPath: "wmnds/components/accordion/",
    njk: true,
    njkProps: wmndsAccordionProps,
    js: true,
    iframe: false
  })
}}

{% markdown %}

## Custom

In the example below, you can see that we have customised the summary section of the accordion so
that it contains an
<a href="/components/disruption-indicator/" title="Disruption indicator component" target="\_self" class="wmnds-link">disruption indicator</a>
and some text.

The accordion has been built so that it can easily be customised. You can customise both the
summary and the content elements.

To customise the summary (title) section of the accordion, ensure that you nest valid and
accessible html within the
<code class="wmnds-website-inline-code">.wmnds-accordion\_\_summary</code> element.

To customise the content section of the accordion, ensure that you nest valid and accessible html
within the <code class="wmnds-website-inline-code">.wmnds-accordion\_\_content</code> element.

{% endmarkdown %}

{# Set vars for use in custom example below #}
{% set customheadingHTML ='

  <div class="wmnds-grid wmnds-grid--align-center">' +
    wmndsDisruptionIndicatorSmall({
      classes: "wmnds-col-auto wmnds-m-r-md",
      mode: "bus"
    }) +
    '<div class="wmnds-col-auto">Resurfacing Works at
      <strong>Abbey Street, Lower Gornal</strong>
    </div>
  </div>'
%}

{% set customContentHTML = '

  <p>
    <strong>Some random subtitle</strong>
  </p>
  <p>
    Lorem ipsum dolor sit...
  </p>'
%}

{{
  compExample([
    wmndsAccordion({
      id: 'accordion-custom-01',
      isOpen: true,
      headingHTML: customheadingHTML ,
      contentHTML: customContentHTML
    })
  ], {
    componentPath: "wmnds/components/accordion/",
    njk: true,
    njkProps: wmndsAccordionProps,
    js: true,
    iframe: false
  })
}}

{% endblock %}
