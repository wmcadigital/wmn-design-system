{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Links" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "tfwmds/components/link/link/_link.njk" import tfwmdsLink %}

{% block content %}
{% markdown %}

## About

**Buttons** and **links** are items used to perform an action on a
page

It's important to know when to use a **link** or a
**[button](/components/buttons/)**

**Links** should be used when a users action won’t affect the website at all,
examples of these
are:

- Certain call to actions
- Links to internal or external pages

<h3>What do the **link** attritubes mean?</h3>

The **href** attritube is used to define the link address
The **target** attritube is used to define where to open the linked document.
See below to find
out more about the **target** attritube
The **title** attritube is used to define additional information about the
link. It's useful for
your users and accessibility. Try not to duplicate your link text- this hurts usability as
hard of sight users
using screen readers will here the same text twice.

**Target** attritube values:

- **\_blank**: Will load clicked link in a new window
- **\_self**: Will load clicked link in the same frame as it was clicked in

- **\_parent**: Will load clicked link in the parent frameset
- **\_top**: Will load clicked link in the full body of the window
- **framename**: Will load clicked link in a named frame

<br><br>

## Default link

<h3>What does it do?</h3>

- Highlight that the word or phrase is different from other body text

<h3>When to use it?</h3>

- When the link is within text
- When the link is part of a list of links

<h3>When not to use it?</h3>

- The start of a process
- When the link is a destructive action

{% endmarkdown %}

{{
compExample([
  tfwmdsLink( {
      contentText: "Button text"
    }
  )
],
{
componentPath: "tfwmds/components/link/link/",
njk: true,
njkProps: tfwmdsLinkProps,
js: false,
iframe: false
})
}}

{% markdown %}
<br><br>

## Back link

<h3>What does it do?</h3>

- Help users go back to the previous page in a multi-page transaction

<h3>When to use it?</h3>

- Only use a back link on transactional services or multi-page forms.

<h3>When not to use it?</h3>

- Never use it together with breadcrumbs. Do user research to find out if users find breadcrumbs or the back link easier to use.
- Within COVID-19 services, user research found that too many links on the page distracted users.
- Do not use the back link on a content page.

<h3>How it works?</h3>

- Always place back links at the top of the page.
- Make sure the link takes users to the previous page they were on, in the state they last saw it.
- If you cannot do this you should hide the back link. For example, when JavaScript is not available.

{% endmarkdown %}

{{
  compExample([
    tfwmdsLink( { isBackLink: true } )
  ],
  {
    componentPath: "tfwmds/components/link/link/",
    njk: true,
    njkProps: tfwmdsLinkProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}
<br><br>

## Link with chevron

<h3>What does it do?</h3>

- Directs users to a related page which contains further information.
- Allows users to navigate forwards and backwards between search results.

<h3>When to use it?</h3>

- When you want to direct users to a page with additional information.
- Only use the Previous variant for the search results page.

<h3>When not to use it?</h3>

- In body text. Use the Default link component instead.
- On transactional services or multi-page forms. You should use the Back link component for this.

<h3>How does it work?</h3>

- If used on a site-wide banner, such as the Emergency banner, then the link will need to be hidden on the page which it links to.
- The colour of the chevron icon must meet graphical object colour contrast requirements of at least 3:1.

{% endmarkdown %}
{{
  compExample([
    tfwmdsLink({
      text: "Link",
      withChevronLeft: true
    }),
    tfwmdsLink({
      text: "Link",
      withChevronRight: true
    })
  ],
  {
    componentPath: "tfwmds/components/link/link/",
    njk: true,
    njkProps: tfwmdsLinkProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}
<br><br>

## Call to action buttons

<h3>What does it do?</h3>

- Encourages the most desired action you want visitors to take.
- Attracts attention on the page.

<h3>When to use it?</h3>

- When you need a strong visual indicator to help user to complete their journey and do their task.
- When you need action oriented button. Think: 'Done', 'Save', 'Next', 'Submit'.

<h3>When not to use it?</h3>

- What action you want users to take is not essential in completing their task.
- When a button is a destructive action.
- When a button starts a process or journey.

{% endmarkdown %}

{%- from "tfwmds/components/link/as-button/_as-button.njk" import tfwmdsLinkAsButton as cta %}
{{
  compExample([
    cta({
      contentText: "Call to action button",
      linkTitle: "This is a call to action link"
    }),
    cta({
      contentText: "Call to action icon button",
      iconRight: "general-chevron-right",
      linkTitle: "This is a call to action link"
    })
  ],
  {
    componentPath: "tfwmds/components/link/as-button/",
    njk: true,
    njkProps: tfwmdsLinkAsButtonProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}
<br><br>

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

{%- from "tfwmds/components/link/as-button/_as-button.njk" import tfwmdsLinkAsButton as primary -%}
{{
  compExample([
    primary({
      type: "primary",
      contentText: "Primary button",
      linkTitle: "This is a primary link"
    }),
    primary({
      type: "primary",
      contentText: "Primary icon button",
      iconRight: "general-chevron-right",
      linkTitle: "This is a primary link"
    })
  ],
  {
    componentPath: "tfwmds/components/link/as-button/",
    njk: true,
    njkProps: tfwmdsLinkAsButtonProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}
<br><br>

## Secondary buttons

<h3>What does it do?</h3>

- Indicates action that is less important than call to action primary.
- When used together with call to action and primary button it creates visual hierarchy.
- Highlights an inessential action.

<h3>When to use it?</h3>

- To indicate lower priority than call to action and primary button.
- To create a clear hierarchy of priority and importance of actions.
- When a button is inessential for continuing the user journey.

<h3>When not to use it?</h3>

- When you need a strong visual indicator to help user to complete their journey and do their task.
- When a button is essential for continuing the user journey
- When a button is a destructive action
- When a button starts a process or journey

{% endmarkdown %}

{%- from "tfwmds/components/link/as-button/_as-button.njk" import tfwmdsLinkAsButton as secondary -%}
{{
  compExample([
    secondary({
      type: "secondary",
      contentText: "Secondary button",
      linkTitle: "This is a secondary link"
    }),
    secondary({
      type: "secondary",
      contentText: "Secondary icon button",
      iconRight: "general-chevron-right",
      linkTitle: "This is a secondary link"
    })
  ],
  {
    componentPath: "tfwmds/components/link/as-button/",
    njk: true,
    njkProps: tfwmdsLinkAsButtonProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}
<br><br>

## Destructive button as link

<h3>What does it do?</h3>

- Shows that the button's action deletes or removes something

<h3>When to use it?</h3>

- When an action is destructive
- Example: deleting a favourite route, removing a swift card, deleting an account

<h3>When not to use it?</h3>

- When a button starts a process or journey
- When a button is trying to attract the user's attention

{% endmarkdown %}

{%- from "tfwmds/components/link/as-button/_as-button.njk" import tfwmdsLinkAsButton as destructive -%}
{{
  compExample([
    destructive({
      type: "destructive",
      contentText: "Destructive button",
      linkTitle: "This is a destructive link"
    }),
    destructive({
      type: "destructive",
      contentText: "Destructive icon button",
      iconRight: "general-chevron-right",
      linkTitle: "This is a destructive link"
    })
  ],
  {
    componentPath: "tfwmds/components/link/as-button/",
    njk: true,
    njkProps: tfwmdsLinkAsButtonProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}
<br><br>

## Start button as link

<h3>What does it do?</h3>

- Shows that the button starts a process or journey

<h3>When to use it?</h3>

- When a button starts a process or journey

<h3>When not to use it?</h3>

- When a button is a destructive action
- When a button is trying to attract the user's attention
- When the button is inessential for continuing the user journey

{% endmarkdown %}

{%- from "tfwmds/components/link/as-button/_as-button.njk" import tfwmdsLinkAsButton as start -%}
{{
  compExample([
    start({
      type: "start",
      contentText: "Start button",
      linkTitle: "This is a start link"
    }),
    start({
      type: "start",
      contentText: "Start icon button",
      iconRight: "general-chevron-right",
      linkTitle: "This is a start link"
    })
  ],
  {
    componentPath: "tfwmds/components/link/as-button/",
    njk: true,
    njkProps: tfwmdsLinkAsButtonProps,
    js: false,
    iframe: false
  })
}}
{% endblock %}
