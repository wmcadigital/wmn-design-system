{% extends "www/_layouts/layout-left-pane.njk" %} {% set pageTitle = "Cookies" %}

{% set section="Patterns" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/patterns/cookies/cookies-banner/_cookies-banner.njk" import wmndsCookiesBanner %}
{% from "wmnds/patterns/cookies/cookies-manager/_cookies-manager.njk" import wmndsCookiesManager %}


{% block content %}

{% markdown %}

## About

### What does it do?

  - Allows users to accept or amend our website's cookie settings.
  - Our cookie preferences should be confirmed before a user can use our website.
  - The Manage cookies pattern allows users to change their cookie preferences.



## Cookie banner

### When to use it?

- When a user first visits the West Midlands Network website and has not accepted or amended the cookie preferences.

- The banner should be above the header on every page and only disappear when a user has accepted or amended their
  cookie preferences.


### When not to use it?

  - When a user has accepted or amended the website's cookies.
  - When a returning user visits the West Midlands Network website and has already accepted or amended their cookies in a previous session.
  

### How it works

- When a user has accepted or amended the website's cookies.
- When a returning user visits the West Midlands Network website and has already accepted or amended their cookies in a previous session.

The Cookies banner should be placed above the main header and be on every page

{% endmarkdown %}

{{
  compExample([
    wmndsCookiesBanner()
  ],
  {
    componentPath: "wmnds/patterns/cookies/cookies-banner/",
    njk: true,
    js: false,
    iframe: true
  })
}}

{% markdown %}
<h2 id="cookies_manager">Manage Cookies

<h3>When to use it?</h3>

  - Users can manage their cookies through the 'Manage cookies' button in the Cookie banner.
  - The Manage cookies pattern is also accessible from the main Policies page, so users can amend their cookie preferences at any time.
  
{% endmarkdown %}

{{
  compExample([
    wmndsCookiesManager()
  ],
  {
    componentPath: "wmnds/patterns/cookies/cookies-manager/",
    njk: true,
    njkProps: wmndsCookiesManagerProps,
    js: true,
    iframe: true
  }) 
}}


<h2 id="cookies_manager_success_message">Success Message

{{
  compExample([
    wmndsCookiesManager({
      showSuccessMessage: true
    })
  ],
  {
    componentPath: "wmnds/patterns/cookies/cookies-manager/",
    njk: true,
    njkProps: wmndsCookiesManagerProps,
    js: false,
    iframe: true
  })
}}

{% endblock %}
