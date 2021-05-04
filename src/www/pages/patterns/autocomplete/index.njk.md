{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Autocomplete" %}
{% set section="Patterns" %}
{# Imports #}
{% from "wmnds/patterns/autocomplete/_autocomplete.njk" import wmndsAutocomplete %}
{% from "www/_partials/component-example/component-example.njk" import compExample %}

{% block content %}

{% markdown %}
{# About #}

## About

{# What #}

### What does it do?

The autocomplete component is an input field that offers the user text suggestions as they type.
This is often done by hitting an API endpoint with the users query when the user has finished typing.

The autocomplete pattern is a combination of the <a href="/components/form-elements/" title="Input component" target="_self" class="wmnds-link">input</a> and <a href="/components/loader/" title="Loader component" target="_self" class="wmnds-link">loader</a> components.

{# When #}

### When to use it?

- As a progressive enhancement to make a users journey shorter/easier when searching
- When you have a smaller data set/list that is quick to query
- When you want to ensure the user submits a relevant query/value

{# When not #}

### When not to use it?

- When you have a massive set of data, instead you should have an input/search that shows results after submission.
- Don't use this component as if it is a search box. Autocomplete is to suggest a value to a user via it's results not act as a results page for a search.

{# Default #}

## Default state

In its default state, the autcomplete component is made up of a text input with a search icon.

For best practice, ensure that the placeholder and aria-label describes what the autocompletes intended purpose is.

Notice that there is also a <code class="wmnds-website-inline-code">wmnds-loader</code> component nested within the autocomplete, more on that in the next section.

{% endmarkdown %}

{{
  compExample([
    wmndsAutocomplete({
      id: "autoComplete",
      query: ''
    })
  ])
}}

{% markdown %}

{# Loading #}

## Loading

When a user types in a query, you may want to have some code that hits an API or gets the data/suggestions for the autocomplete from somewhere. To help users understand that they need to wait for something we can change the autocomplete to a loading state.
We do this by adding the class <code class="wmnds-website-inline-code">wmnds--is-loading</code> to the top level of the autocomplete (this is the only difference between the loading state and default state code snippets).

As mentioned in the previous section, there is a <code class="wmnds-website-inline-code">wmnds-loader</code> component nested in the autocomplete. When adding the <code class="wmnds-website-inline-code">wmnds--is-loading</code> class, it will hide the search icon and show the loading spinner in it's place.
Below is an example of how the autocomplete looks when a user has typed in 'My query' and is waiting for autocomplete suggestions to load.

**It is good practice to:**

- Show loading state when waiting for data to load
- Let the user finish typing before you fetch autocomplete suggestions (add a debounce)
- Add the <code class="wmnds-website-inline-code">wmnds-is--loading</code> class as soon as you are fetching data

{% endmarkdown %}

{{
  compExample([
    wmndsAutocomplete({
      id: "autoCompleteQuery",
      query: 'My query',
      loading: true
    })
  ])
}}

{% markdown %}
{# Results #}

## Suggestions

The final state of the autocomplete is showing the suggestions.

You'll notice there is a new section in the code snippet called <code class="wmnds-website-inline-code">wmnds-autocomplete-suggestions</code>, this should be shown/visible when your API/data has loaded the suggestions.

**It's good practice to:**

- Show the suggestions in an unordered list
- Ensure there is a title tag on the <code class="wmnds-website-inline-code">.wmnds-autocomplete-suggestions\_\_li</code> describing further information about the suggestion
- Ensure there is a <code class="wmnds-website-inline-code">tabindex="0"</code> attribute on the <code class="wmnds-website-inline-code">.wmnds-autocomplete-suggestions\_\_li</code> to allow users to tab through the results with a keyboard

### Default (text)

The most commonly used suggestions will be displayed as text only.

**It is good practice to:**

- Bold characters that match the users query

{% endmarkdown %}

{{
  compExample([
    wmndsAutocomplete({
      id: "autoCompleteSuggestions",
      showSuggestions: true,
      textSuggestions: true,
      query: 'My query'
    })
  ])
}}

{% markdown %}

{# With disruption indicator #}

### With disruption indicator

This autocomplete is combined with the <a href="/components/disruption-indicators/" title="Disruption indicator component" target="_self" class="wmnds-link">medium / normal - disruption indicator component</a>.

You will notice that the suggestions are much bigger than text only results, and have an overflow scrollbar. This scrollbar will appear if the height of the suggestion container goes over a certain height.

As you can see from the code snippet, the main <code class="wmnds-website-inline-code">wmnds-autocomplete-suggestions</code> and <code class="wmnds-website-inline-code">wmnds-autocomplete-suggestions\_\_li</code> classes are prevelant on the ul and li elements. Within the li element we have nested the disruption indicator component whilst also using the <a href="/styles/utility-classes/" title="WMNDS grid system" target="_self" class="wmnds-link">WMNDS grid</a>. This gives enough flexibility to style the suggestions to how we want, find out more in the next section.

{% endmarkdown %}

{{
  compExample([
    wmndsAutocomplete({
      showSuggestions: true,
      query: 'x15'
    })
  ])
}}

{% markdown %}

### Customising suggestions

There are many ways in which you can show the suggestions, as the autocomplete component has been built in a way that the suggestion results can be custom styled to how you like.

As long as you have the ul element with the class <code class="wmnds-website-inline-code">wmnds-autocomplete-suggestions</code> which contains a direct child li element that has the class <code class="wmnds-website-inline-code">wmnds-autocomplete-suggestions\_\_li</code> then you can fully customise how you want the suggestions to look.

{% endmarkdown %}
{% endblock %}
