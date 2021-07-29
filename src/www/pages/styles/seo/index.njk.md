{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Ensuring good SEO on Umbraco" %}
{% set section = "Styles" %}

{% block content %}

{% markdown %}

Most of our traffic comes from search engines. It is important to set up SEO information for content pages.

If you do not use the SEO settings or review them regularly, your content will perform poorly.

## SEO Checker for content pages

We have installed an extension called SEO Checker on our content management system.

On every piece of content, you can set:

- [Focus keywords](https://yoast.com/focus-keyword/), keywords you want to rank the page for
- [An SEO title](https://yoast.com/page-titles-seo/), the title of the page for search engines
- [An SEO description](https://yoast.com/meta-descriptions/), the description of the page for search engines

You can also use the SEO Checker's validator to check for errors. Errors negatively impact your content's performance.

<div class="tfwmds-inset-text">
  Search engines change the way they rank search results all the time. You must review your content regularly otherwise your ranking might slip.
</div>

## SEO Checker for website issues

It is important that our website:

- Is kept up-to-date
- Does not have dummy content
- Has working links

Administrators have access to the SEO Checker tab on our content management system.

Use the **validate pages** tool to automatically check all content for SEO issues.

After you have run the tool under the **Issues** folder, you can see:

- Validation issues, errors with content
- Inbound link errors, links that users are trying to access but there is no content
- Configuration issues, errors with the set up of SEO checker

### Validation issues

The SEO checker will pick up content issues:

- Broken links, for example, a webpage on another website no longer exists
- Broken media
- Missing link titles
- Missing alternative text for images
- SEO title and description errors
- Lorem ipsum dummy text

You can fix the problem from the validation issues page. Click **edit** and the content page will appear in a pop up window.

### Inbound link errors

These are links where a user has tried to access a link but got an error page.

This can happen if someone has not set up a friendly link or you have a major content restructure.

You can choose where to redirect users who access that link. You can also see how many times the link has been accessed and where the last user accessed the link from.

<div class="tfwmds-inset-text">
  You do not need to redirect every inbound link. Sometimes they are typos or an old link.
</div>

### Configuration issues

You should talk to Digital and Data if SEO Checker picks up configuration issues.

{% endmarkdown %}
{% endblock %}
