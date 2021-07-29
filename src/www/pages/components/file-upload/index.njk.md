{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "File upload" %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}
{% from "tfwmds/components/form-elements/file-upload/_file-upload.njk" import tfwmdsFileUpload %}

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
      tfwmdsFileUpload({
        fileSelected: false
      })
    ],
    {
      componentPath: "tfwmds/components/form-elements/file-upload/",
      njk: true,
      njkProps: tfwmdsFileUploaderProps,
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
      tfwmdsFileUpload({
        id: "uploaded-fileupload",
        fileSelected: true
      })
    ],{
      componentPath: "tfwmds/components/form-elements/file-upload/",
      njk: true,
      njkProps: tfwmdsFileUploaderProps,
      js: false,
      iframe: false
    })
}}

{% markdown %}

### File upload with error

{% endmarkdown %}

{{
    compExample([
      tfwmdsFileUpload({
        id: "error-fileupload",
        fileSelected: true,
        error: true,
        errorMessage : {
          contentText: "File must less than 2mb"
        }
      })
    ],{
      componentPath: "tfwmds/components/form-elements/file-upload/",
      njk: true,
      njkProps: tfwmdsFileUploaderProps,
      js: false,
      iframe: false
    })
}}

{% endblock %}
