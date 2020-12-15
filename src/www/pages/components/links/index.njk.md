{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle="Links" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/components/link/link/_link.njk" import wmndsLink %}

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

### What do the **link** attritubes mean?

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

---

<br><br>

## Default link

### What does it do?

- Highlight that the word or phrase is different from other body text

### When to use it?

- When the link is within text
- When the link is part of a list of links

### When not to use it?

- The start of a process
- When the link is a destructive action

{% endmarkdown %}

{{
compExample([
  wmndsLink( {
      contentText: "Button text"
    }
  )
],
{
componentPath: "wmnds/components/link/link/",
njk: true,
njkProps: wmndsLinkProps,
js: false,
iframe: false
})
}}

{% markdown %}
<br><br>

## Back link

### What does it do?

- Help users go back to the previous page in a multi-page transaction

### When to use it?

- Only use a back link on transactional services or multi-page forms.

### When not to use it?

- Never use it together with breadcrumbs. Do user research to find out if users find breadcrumbs or the back link easier to use.
- Within COVID-19 services, user research found that too many links on the page distracted users.
- Do not use the back link on a content page.

### How it works?

- Always place back links at the top of the page.
- Make sure the link takes users to the previous page they were on, in the state they last saw it.
- If you cannot do this you should hide the back link. For example, when JavaScript is not available.

{% endmarkdown %}

{{
  compExample([
    wmndsLink( { isBackLink: true } )
  ],
  {
    componentPath: "wmnds/components/link/link/",
    njk: true,
    njkProps: wmndsLinkProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}
<br><br>

## Link with chevron

### What does it do?

- Directs users to a related page which contains further information.
- Allows users to navigate forwards and backwards between search results.

### When to use it?

- When you want to direct users to a page with additional information.
- Only use the Previous variant for the search results page.

### When not to use it?

- In body text. Use the Default link component instead.
- On transactional services or multi-page forms. You should use the Back link component for this.

### How does it work?

- If used on a site-wide banner, such as the Emergency banner, then the link will need to be hidden on the page which it links to.
- The colour of the chevron icon must meet graphical object colour contrast requirements of at least 3:1.

{% endmarkdown %}
{{
  compExample([
    wmndsLink({
      text: "Link",
      withChevronLeft: true
    }),
    wmndsLink({
      text: "Link",
      withChevronRight: true
    })
  ],
  {
    componentPath: "wmnds/components/link/link/",
    njk: true,
    njkProps: wmndsLinkProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}
<br><br>

## Call to action buttons

### What does it do?

- Encourages the most desired action you want visitors to take.
- Attracts attention on the page.

### When to use it?

- When you need a strong visual indicator to help user to complete their journey and do their task.
- When you need action oriented button. Think: 'Done', 'Save', 'Next', 'Submit'.

### When not to use it?

- What action you want users to take is not essential in completing their task.
- When a button is a destructive action.
- When a button starts a process or journey.

{% endmarkdown %}

{%- from "wmnds/components/link/as-button/_as-button.njk" import wmndsLinkAsButton as cta %}
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
    componentPath: "wmnds/components/link/as-button/",
    njk: true,
    njkProps: wmndsLinkAsButtonProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}
<br><br>

## Primary buttons

### What does it do?

- Gives users alternative to the call to action button.

### When to use it?

- When action is not as important as a call to action so it shouldn’t call as much attention.
- When a button typically indicates actions that are important but not the call to action on a page.
- Can be used in isolation or in conjunction with call to action button and secondary.

### When not to use it?

- When a button is essential for continuing the user journey
- When a button is a destructive action
- When a button starts a process or journey

{% endmarkdown %}

{%- from "wmnds/components/link/as-button/_as-button.njk" import wmndsLinkAsButton as primary -%}
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
    componentPath: "wmnds/components/link/as-button/",
    njk: true,
    njkProps: wmndsLinkAsButtonProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}
<br><br>

## Secondary buttons

### What does it do?

- Indicates action that is less important than call to action primary.
- When used together with call to action and primary button it creates visual hierarchy.
- Highlights an inessential action.

### When to use it?

- To indicate lower priority than call to action and primary button.
- To create a clear hierarchy of priority and importance of actions.
- When a button is inessential for continuing the user journey.

### When not to use it?

- When you need a strong visual indicator to help user to complete their journey and do their task.
- When a button is essential for continuing the user journey
- When a button is a destructive action
- When a button starts a process or journey

{% endmarkdown %}

{%- from "wmnds/components/link/as-button/_as-button.njk" import wmndsLinkAsButton as secondary -%}
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
    componentPath: "wmnds/components/link/as-button/",
    njk: true,
    njkProps: wmndsLinkAsButtonProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}
<br><br>

## Destructive button as link

### What does it do?

- Shows that the button's action deletes or removes something

### When to use it?

- When an action is destructive
- Example: deleting a favourite route, removing a swift card, deleting an account

### When not to use it?

- When a button starts a process or journey
- When a button is trying to attract the user's attention

{% endmarkdown %}

{%- from "wmnds/components/link/as-button/_as-button.njk" import wmndsLinkAsButton as destructive -%}
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
    componentPath: "wmnds/components/link/as-button/",
    njk: true,
    njkProps: wmndsLinkAsButtonProps,
    js: false,
    iframe: false
  })
}}

{% markdown %}
<br><br>

## Start button as link

### What does it do?

- Shows that the button starts a process or journey

### When to use it?

- When a button starts a process or journey

### When not to use it?

- When a button is a destructive action
- When a button is trying to attract the user's attention
- When the button is inessential for continuing the user journey

{% endmarkdown %}

{%- from "wmnds/components/link/as-button/_as-button.njk" import wmndsLinkAsButton as start -%}
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
    componentPath: "wmnds/components/link/as-button/",
    njk: true,
    njkProps: wmndsLinkAsButtonProps,
    js: false,
    iframe: false
  })
}}
{% endblock %}
