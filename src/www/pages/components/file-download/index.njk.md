{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "File download" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{# Macros #}
{% from "wmnds/components/file-download/_file-download.njk" import wmndsFileDownload %}

{% block content %}

{% markdown %}
{# About #}

## About

{# What #}

### What does it do?

- Allows users to download an offline version of the on-page content.
- Allows users who rely on assistive technology to access an offline version of the on-page content.
- Shows users how big the file is so they can decide if they want to download it.

---

{# Accessible file #}

## Accessible file

{# When to #}

### When to use it?

- When you have an accessible, offline version of the on-page content.
- When you have additional information within an accessible document.

{# When not to #}

### When not to use it?

- If the download document is not accessible to users with assistive technology. In that instance, use the non-accessible file component.

{% endmarkdown %}

{{
    compExample([
        wmndsFileDownload()
    ], {
        componentPath: "wmnds/components/file-download/",
        njk: true,
        njkProps: wmndsFileDownloadProps,
        js: false,
        iframe: false
    })
}}

{% markdown %}
{# Non-accessible file #}

## Non-accessible file

{# What #}

### What does it do?

- Shows the user that the file is not accessible
- Offers the user a way to get the file in a different format

{# When to #}

### When to use it?

- When you have an offline version of the on-page content which is not accessible
- When the file cannot be made accessible. For example, complex maps.

{# When not to #}

### When not to use it?

- If the document is accessible to users with assistive technology. In that instance, use the accessible file component.
- You still need to make the document accessible as soon as possible. Ideally before publishing it.

{% endmarkdown %}

{{
    compExample([
        wmndsFileDownload({
            accessible: false
        })
    ])
}}

{% endblock %}
