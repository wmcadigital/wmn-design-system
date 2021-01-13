{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "File upload" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "wmnds/components/form-elements/file-upload/_file-upload.njk" import wmndsFileUpload %}

{% block content %}
{% markdown %}

## About

### What does it do?

- Allows user to select and submit content of their own.

### When to use it?

- When it is essential for user to provide information for you so you can provide the service

### When not to use it?

- When information is not essential for your delivery of service
- When information can come from API or another source.

{% endmarkdown %}

{{
compExample(
    [
      wmndsFileUpload({
        fileSelected: false
      })
    ],
    {
      componentPath: "wmnds/components/form-elements/file-upload/",
      njk: true,
      njkProps: wmndsFileUploaderProps,
      js: false,
      iframe: false
    }
)
}}

{% markdown %}

### With file uploaded

{% endmarkdown %}

{{
    compExample([
      wmndsFileUpload({
        id: "uploaded-fileupload",
        fileSelected: true
      })
    ],{
      componentPath: "wmnds/components/form-elements/file-upload/",
      njk: true,
      njkProps: wmndsFileUploaderProps,
      js: false,
      iframe: false
    })
}}

{% markdown %}

### File upload with error

{% endmarkdown %}

{{
    compExample([
      wmndsFileUpload({
        id: "error-fileupload",
        fileSelected: false,
        error: true,
        errorMessage : {
          contentText: "Files must be jpeg or png file format and be less than 2mb"
        }
      })
    ],{
      componentPath: "wmnds/components/form-elements/file-upload/",
      njk: true,
      njkProps: wmndsFileUploaderProps,
      js: false,
      iframe: false
    })
}}

{% endblock %}
