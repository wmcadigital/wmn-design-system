# Layouts

## About

This folder should contain all the layout files that njk pages will reference.
You can use a page layout by placing `{% extends "www/_layouts/layout-example.njk" %}` in your nunjucks page.

If creating a new layout it should named with the prefix `layout-` followed by a short name to describe what it's intended purpose is.

Below are more details on how to utilise each page layout.

- `\_master-layout.njk`

  - This is the master layout page which contains globally used items and it should never be referenced directly via page. It should only be extended in another layout templates.

- `layout-fullwidth.njk`

  - This should be used when you want to create a page which utilises the fullwidth of the container

- `layout-left-pane.njk`
  - Used when you want a layout with a sidebar on the left
  - Uses the variable `{% set section = "example" %}`
    - Set this to the section you would like to render on the page as a sub nav. The sub nav of a section can be configured in the [data.njk.json file](../data.njk.json). The section being the top-level "names" from the data.njk.json file.

## Global vars

All pages referencing layouts can set global variables using the syntax

`{% set exampleVar = "example" %}`

Below are a list of the variables that can be set and what they do.

- `pageTitle`
  - Sets the page title of the current page whilst appending the suffix "- WMN Design System"
