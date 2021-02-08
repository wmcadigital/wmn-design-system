{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Layout" %}
{% set section = "Styles" %}

{% block content %}
{% markdown %}

## Standard content template

### What does it do?

- A template is based on 2/3 column for content and a 1/3 column right-hand side for widgets to publish functional content.
- Content editors will be able to use the design system components in Umbraco to structure content effectively and create visual hierarchy.

### When to use it?

- When you need to publish functional content based on a clear user task.
- When your content enables users to complete a specific task. For example, Get a refund, Update a Direct Debit, Find discount vouchers etc.

### When not to use it?

- When you need to create a page for a marketing campaign and you need to use promotional images.

### Guidance for content editors

- Only use a header image when there is a clear user need for the image and it serves a purpose. For example, on a 'Travel by tram' page, you may want to use a header image of a tram so users unfamiliar with the West Midlands Network will instantly know what our trams look like throughout the region.
- Use the [Link component](/components/links/) in your body content if you want to direct the user to additional content. Do not use buttons for any links. Do not use the same link twice as this confuses users.
- Only use [buttons](/components/buttons/) in your body content when a user needs to complete an action as part of a process, or if a user is confirming their details e.g. newsletter sign-up.

  Warning text with exclamation mark icon component: <b>Please read the Creating effective content section below before writing content or placing content into your page.</b>

## Publicity campaign template

### What does it do?

- A template based on a flexible grid provides content editors with an option to create a marketing campaign page.
- Content editors will be able to use the design system components in Umbraco to structure content effectively and create visual hierarchy.

### When to use it?

- When you want to create a marketing campaign to promote and introduce a new service or a product.

### When not to use it?

- When you need to publish functional content based on a clear user task. For example, Get a refund, Update a Direct Debit, Find discount vouchers etc. For this, you will need to use the Standard content template.

### Guidance for content editors

- Use a header image to draw attention and to increase the visual appeal of the page. Our User research found that 78% of users prefer pages with header images, with the most popular reason being that they make the page look more attractive. Remember to keep your header image relevant to your content.
- If you are creating a hub page, use Content cards to direct users to the other pages. For marketing campaign pages, please use [Content cards with images](/patterns/content-cards/) as this helps users to locate information faster. We recommend using a total of four content cards on one page. However, you can use up to six content cards on a page if absolutely necessary.
- Restrict the body copy to a maximum of three paragraphs. The body copy introduces the page and should be brief and to the point. The main content your users require needs to be as higher up the page as possible, to reduce scrolling time.
- Marketing campaign pages should be user tested prior to going live. This is to identify if users can locate the content that they need. Generating heatmaps through Hotjar will help track how the pages are used.

## Travel mode landing page template

### What does it do?

- A template for the different travel modes which West Midlands Network offers
- The template layout has been designed to showcase each of our travel mode brands

### When to use it?

- Use this template as the landing page for each of our travel modes

### When not to use it?

- For modes of travel which are not operated by West Midlands Network, such as E-scooters

### Guidance for content editors

- Each landing page heading should follow the same title structure: '[transport mode] in the West Midlands'
- Use an attractive header image that focuses on the mode of transport. Do not use a busy image. This will help users who are unfamiliar with the West Midlands Network to know what out transport looks like across the region.
- The appropriate modal icon and West Midlands Network logo variant should be used for each travel landing page
- Where content cards are used, the coloured line should be changed from primary purple to the appropriate travel mode brand colour

## Creating effective content

There is no minimum or maximum page length, however:

- <a href="https://www.nngroup.com/articles/how-little-do-users-read/" target="_blank">People only read 20 to 28% of text on a web page</a> anyway
- Remember that the pressure on the brain to understand increases for every 100 words you put on a page.

Use clear and concise content because the longer text, the lower rate of readability and <a href="https://insidegovuk.blog.gov.uk/2014/08/04/sentence-length-why-25-words-is-our-limit/" target="_blank">comprehension drops significantly</a>.

Always place content with higher importance at the top of the page, with less important content following after.

If you have to use long content, break it down into smaller sections to make it easier for user to understand information. You can:

- Use [Content cards](/components/content-cards/) for important content which you want to draw attention to. You can use a maximum of six content cards on a page. Do not use more than six because user research shows that users prefer less information, especially on the mobile. Our user research showed that content tiles with images help users locate relevant content faster
- Use the [Accordion component](/components/accordion/) to organise and group related information at the bottom of the page, below body copy and content tiles. Accordions can shorten pages and reduce scrolling when your content does not need to be read in full. We also recommend using accordions when space is at a premium and you are placing long content on a mobile interface or in a side panel
- Use the [Inset text component](/components/inset-text/) to highlight crucial information
- Use the [In-text step component](/components/in-text-step/) to show a series of steps in a process
- Place the [In-line navigation component](/patterns/content-cards/) on the left side of a desktop page so users can skip to the relevant section without scrolling. This is especially useful for users on mobile, as the page content component will be placed after the page title.

{% endmarkdown %}

{% endblock %}
