{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Buttons" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}

{% markdown %}

## About

**Buttons** should be used in situations where a user might need to preform an
action, such as:

- Submitting a form
- Uploading
- Specify a next or previous step in a process
- Begin a new task

There are two types of button used in this design system - buttons and [link buttons](/components/links/):

- A **button** performs an action on a page
- A [link button](/components/links/) takes the user to a different page

Icons should only be used where it is deemed absolutely necessary to communicate the meaning of an action.

### Button Size

- The button width on desktop should be proportional with the text inside the button. Desktop buttons are aligned to the left edge of the content container.
- Buttons are full-width on mobile. This is so users can easily tap on a button without stretching their thumb.

## Call to action buttons

<h3>What does it do?</h3>

- Encourages the most desired action you want visitors to take.
- Attracts attention on the page.

<h3>When to use it?</h3>

- When you need a strong visual indicator to help user to complete their journey and do their task.
- When you need action oriented button. Think: 'Done', 'Save', 'Next', 'Submit'.
- Use the Dark background variant when a Call to action button will be used against a background with a dark colour, such as primary purple.

<h3>When not to use it? </h3>

- What action you want users to take is not essential in completing their task.
- When a button is a destructive action.
- When a button starts a process or journey.

{% endmarkdown %}

{% from "wmnds/components/button/_button.njk" import wmndsButton as cta %}
{{
  compExample([
    cta({
      contentText: "Call to action button"
    }),
    cta({
      isActive: true,
      contentText: "Call to action active button"
    }),
    cta({
      isDisabled: true,
      contentText: "Call to action disabled button"
    }),
    cta({
      iconRight: "general-chevron-right",
      contentText: "Call to action icon button"
    }),
    cta({
      isLoading: true,
      contentText: "Call to action loading button"
    }),
    cta({
      iconRight: "general-chevron-right",
      isDisabled: true,
      contentText: "Call to action icon disabled button"
    })
  ],
  {
    componentPath: "wmnds/components/button/",
    njk: true,
    njkProps: wmndsButtonProps,
    js: false,
    iframe: false
  }
)
}}

{% markdown %}

<h3>Dark background variant</h3>

{% endmarkdown %}

{{
  compExample([
    cta({
      isDarkBg: true,
      contentText: "Call to action dark bg button"
    }),
    cta({
      isDarkBg: true,
      isActive: true,
      contentText: "Call to action dark bg active button"
    })
  ],
  {
    componentPath: "wmnds/components/button/",
    njk: true,
    njkProps: wmndsButtonProps,
    js: false,
    iframe: false
  }
)
}}

{% markdown %}

## Primary buttons

<h3>What does it do?</h3>

- Gives users alternative to the call to action button.

<h3>When to use it?</h3>

- When action is not as important as a call to action so it shouldn’t call as much attention.
- When a button typically indicates actions that are important but not the call to action on a page.
- Can be used in isolation or in conjunction with call to action button and secondary.

<h3>When not to use it?</h3>

- When a button is essential for continuing the user journey
- When a button is a destructive action
- When a button starts a process or journey

{% endmarkdown %}

{%- from "wmnds/components/button/_button.njk" import wmndsButton as primary -%}
{{
  compExample([
    primary({
      contentText: "Primary button",
      type: "primary"
    }),
    primary({
      isActive: true,
      contentText: "Primary active button",
      type: "primary"
    }),
    primary({
      isDisabled: true,
      contentText: "Primary disabled button",
      type: "primary"
    }),
    primary({
      iconRight: "general-chevron-right",
      contentText: "Primary icon button",
      type: "primary"
    }),
    primary({
      iconRight: "general-chevron-right",
      isDisabled: true,
      contentText: "Primary icon disabled button",
      type: "primary"
    })
  ],
  {
    componentPath: "wmnds/components/button/",
    njk: true,
    njkProps: wmndsButtonProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}

## Pay with Swift buttons

<h3>What does it do?</h3>

- Enables users to pay for [West Midlands Cycle Hire](https://www.wmcyclehire.co.uk/) using Swift

<h3>When to use it?</h3>

- When a ticket or fare can be purchased using Swift in a travel operator app

<h3>When not to use it?</h3>

- When buying a ticket on the Transport for West Midlands website

{% endmarkdown %}

{%- from "wmnds/components/button/_button.njk" import wmndsButton as primary -%}
{{
  compExample([
    primary({
      contentHTML: "Pay with <svg class=\"wmnds-swift-logo-inline\"><use xlink:href=\"#wmnds-swift-full-logo\" href=\"#wmnds-swift-full-logo\"></use></svg>", 
      type: "primary"
    }),
    primary({
      isActive: true,
      contentHTML: "Pay with <svg class=\"wmnds-swift-logo-inline\"><use xlink:href=\"#wmnds-swift-full-logo\" href=\"#wmnds-swift-full-logo\"></use></svg> (active)", 
      type: "primary"
    }),
    primary({
      isDisabled: true,
      contentHTML: "Pay with <svg class=\"wmnds-swift-logo-inline\"><use xlink:href=\"#wmnds-swift-full-logo\" href=\"#wmnds-swift-full-logo\"></use></svg> (disabled)", 
      type: "primary"
    }),
    primary({
      iconRight: "general-chevron-right",
      contentHTML: "Pay with <svg class=\"wmnds-swift-logo-inline\"><use xlink:href=\"#wmnds-swift-full-logo\" href=\"#wmnds-swift-full-logo\"></use></svg>", 
      type: "primary"
    }),
    primary({
      iconRight: "general-chevron-right",
      isDisabled: true,
      contentHTML: "Pay with <svg class=\"wmnds-swift-logo-inline\"><use xlink:href=\"#wmnds-swift-full-logo\" href=\"#wmnds-swift-full-logo\"></use></svg> (disabled)", 
      type: "primary"
    })
  ],
  {
    componentPath: "wmnds/components/button/",
    njk: true,
    njkProps: wmndsButtonProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}

## Secondary buttons

<h3>What does it do?</h3>

- Indicates action that is less important than call to action primary.
- When used together with call to action and primary button it creates visual hierarchy.
- Highlights an inessential action.

<h3>When to use it?</h3>

- To indicate lower priority than call to action and primary button.
- To create a clear hierarchy of priority and importance of actions.
- When a button is inessential for continuing the user journey.
- Use the Dark background variant when a Secondary button will be used against a background with a dark colour, such as primary purple.

<h3>When not to use it?</h3>

- When you need a strong visual indicator to help user to complete their journey and do their task.
- When a button is essential for continuing the user journey
- When a button is a destructive action
- When a button starts a process or journey

{% endmarkdown %}

{%- from "wmnds/components/button/_button.njk" import wmndsButton as secondary -%}
{{
  compExample([
    secondary({
      contentText: "Secondary button",
      type: "secondary"
    }),
    secondary({
      isActive: true,
      contentText: "Secondary active button",
      type: "secondary"
    }),
    secondary({
      isDisabled: true,
      contentText: "Secondary disabled button",
      type: "secondary"
    }),
    secondary({
      iconRight: "general-chevron-right",
      contentText: "Secondary icon button",
      type: "secondary"
    }),
    secondary({
      iconRight: "general-chevron-right",
      isDisabled: true,
      contentText: "Secondary icon disabled button",
      type: "secondary"
    })
  ],
  {
    componentPath: "wmnds/components/button/",
    njk: true,
    njkProps: wmndsButtonProps,
    js: false,
    iframe: false
  }
  )
}}

{% markdown %}

<h3>Dark background variant</h3>

{% endmarkdown %}

{{
  compExample([
    secondary({
      isDarkBg: true,
      contentText: "Secondary dark bg button",
      type: "secondary"
    }),
    secondary({
      isActive: true,
      isDarkBg: true,
      contentText: "Secondary dark bg active button",
      type: "secondary"
    })
  ],
    {
    componentPath: "wmnds/components/button/",
    njk: true,
    njkProps: wmndsButtonProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}

## Destructive buttons

<h3>What does it do?</h3>

- Shows that the button's action deletes or removes something

<h3>When to use it?</h3>

- When an action is destructive
- Example: deleting a favourite route, removing a swift card, deleting an account

<h3>When not to use it?</h3>

- When a button starts a process or journey
- When a button is trying to attract the user's attention

{% endmarkdown %}

{%- from "wmnds/components/button/_button.njk" import wmndsButton as destructive -%}
{{
  compExample([
    destructive({
      contentText: "Destructive button",
      type: "destructive"
    }),
    destructive({
      isActive: true,
      contentText: "Destructive active button",
      type: "destructive"
    }),
    destructive({
      isDisabled: true,
      contentText: "Destructive disabled button",
      type: "destructive"
    }),
    destructive({
      iconRight: "general-chevron-right",
      contentText: "Destructive icon button",
      type: "destructive"
    }),
    destructive({
      iconRight: "general-chevron-right",
      isDisabled: true,
      contentText: "Destructive icon disabled button",
      type: "destructive"
    })
  ],
    {
    componentPath: "wmnds/components/button/",
    njk: true,
    njkProps: wmndsButtonProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}

## Start buttons

<h3>What does it do? </h3>

- Shows that the button starts a process or journey

<h3>When to use it?</h3>

- When a button starts a process or journey

<h3>When not to use it?</h3>

- When a button is a destructive action
- When a button is trying to attract the user's attention
- When the button is inessential for continuing the user journey

{% endmarkdown %}

{%- from "wmnds/components/button/_button.njk" import wmndsButton as start -%}
{{
  compExample([
    start({
      contentText: "Start button",
      type: "start"
    }),
    start({
      isActive: true,
      contentText: "Start active button",
      type: "start"
    }),
    start({
      isDisabled: true,
      contentText: "Start disabled button",
      type: "start"
    }),
    start({
      iconRight: "general-chevron-right",
      contentText: "Start icon button",
      type: "start"
    }),
    start({
      iconRight: "general-chevron-right",
      isDisabled: true,
      contentText: "Start icon disabled button",
      type: "start"
    })
  ],
  {
    componentPath: "wmnds/components/button/",
    njk: true,
    njkProps: wmndsButtonProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}

## Mode buttons

<h3>What does it do?</h3>

- Lets the user select a mode of transport by which to filter

<h3>When to use it?</h3>

- Filtering results or data by mode
- Filtering a map by mode

<h3>When not to use it?</h3>

- When a button is essential for continuing the user journey
- When a button is a destructive action
- When a button starts a process or journey

{% endmarkdown %}

{%- from "wmnds/components/button/_button.njk" import wmndsButton as mode -%}
{{
  compExample([
    mode({
      iconLeft: "modes-isolated-bus",
      contentText: "Bus",
      type: "mode"
    }),
    mode({
      isActive: true,
      iconLeft: "modes-isolated-bus",
      contentText: "Bus active",
      type: "mode"
    }),
    mode({
      iconLeft: "modes-isolated-rail",
      contentText: "Train",
      type: "mode"
    }),
    mode({
      iconLeft: "modes-isolated-metro",
      contentText: "Metro",
      type: "mode"
    }),
    mode({
      iconLeft: "modes-isolated-roads",
      contentText: "Roads",
      type: "mode"
    }),
    mode({
      iconLeft: "modes-isolated-bus",
      isDisabled: true,
      contentText: "Disabled mode button",
      type: "mode"
    })
  ],
  {
    componentPath: "wmnds/components/button/",
    njk: true,
    njkProps: wmndsButtonProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}

## Button as Link

<h3>What does it do?</h3>

- Behaves the same as a button, but uses the Link styling
- Performs an action on the page instead of directing the user to an internal or external page
- Uses the tag for accessibility

<h3>When to use it?</h3>

- When a user needs to perform an action on a page
- When there is limited space for a button

<h3>When not to use it?</h3>

- The start of a process
- When you want to direct the user to an internal or external page

{% endmarkdown %}

{%- from "wmnds/components/button/_button.njk" import wmndsButton -%}
{{
  compExample([
    wmndsButton({
      contentText: "Button as link",
      type: "link"
    })
  ],
  {
    componentPath: "wmnds/components/button/",
    njk: true,
    njkProps: wmndsButtonProps,
    js: false,
    iframe: false
  }
  )
}}

{% markdown %}

## Accordion Buttons

<h3>What does it do?</h3>

- Automatically opens or closes all [accordions](/components/accordion) on the page

<h3>When to use it?</h3>

- When 5 or more accordions are grouped together on a page

<h3>When not to use it?</h3>

- When there are less than 4 accordions grouped together
- For any components other than accordions

{% endmarkdown %}

{%- from "wmnds/components/button/_button.njk" import wmndsButton -%}

{{
  compExample([
    wmndsButton({
      contentText: "Open all",
      type: "primary"
    }),
    wmndsButton({
      contentText: "Close all",
      classes: "wmnds-m-l-xs",
      type: "primary"
    })
  ],
  {
    displayInline: true,
    njk: true,
    js: false,
    iframe: false
  })
}}

{% endblock %}
