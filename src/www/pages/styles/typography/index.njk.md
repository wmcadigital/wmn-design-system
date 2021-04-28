{% extends "www/_layouts/layout-left-pane.njk" %}
{% set pageTitle = "Typography" %}
{% set section = "Styles" %}

{% block content %}
{% markdown %}
{# About #}

## About

We have tested our typography with users, including those with dyslexia and those with low vision. The questionnaire presented respondents with two body fonts, set out in different sizes, line spacing and kerning. The options were shown randomly for each participant.

Our findings were as such:

- 55.2% of respondents found Noto Sans easiest to read, with a further 24.1% of respondents having no preference
- 69% of respondents found a larger font size easiest to read, with a further 5.2% having no preference
- 55.2% of respondents preferred increased line spacing, with a further 12.1% having no preference

As a public sector organisation, in addition to testing the above we are required to meet []<a href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag#applying-wcag-21-guidelines" target="_blank">WCAG 2.1 guidelines at AA standard</a>.
Therefore, features will be useable when text size is increased up to 200% and content reflowed for 400%.

{# Fonts #}

## Fonts

We utilise <a href="https://fonts.google.com/" target="_blank">Google Fonts</a> in our typography and all fonts used are pre-bundled in our design system CSS, so you won't need to include them seperately.

Find below, various examples of our typography in use.

{# DM Sans / Headings #}

### DM Sans / headings

The font DM Sans is used with font weight of 400 (regular) and 700 (bold) for heading elements only. <br/>
<a href="https://fonts.google.com/specimen/DM+Sans?selection.family=DM+Sans:700" target="_blank">DM Sans font reference</a>

#### Things to note:

- On mobile devices (less than 768px wide), the H1 and H2 elements are reduced in size by 15%.
- Use the regular font weight only as an alternative to the Heading 4 style.

# 46px - Heading 1

## 32px - Heading 2

### 23px - Heading 3

#### 18px - Heading 4

#### Styles

<div class="wmnds-heading-font">
<h4 class="wmnds-m-none wmnds-weight-400">400 - Regular<br/></h4>
<h4 class="wmnds-m-none">700 - Bold</h4>
</div>

{# Noto sans / body copy #}

### Noto Sans / body copy

The font Noto Sans is used with the font weight of 400 (regular) and 700 (bold) for all elements other than headings. The default font size used is 16px.<br/>
<a href="https://fonts.google.com/specimen/Noto+Sans?selection.family=Noto+Sans:400,700" target="_blank">Noto Sans font reference</a>

#### Characters

    **Font size: 16px / 1rem**
    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br/>
    a b c d e f g h i j k l m n o p q r s t u v w x y z<br/>
    1 2 3 4 5 6 7 8 9 0<br/>

{% filter escape %}
‘ ? ’ “ ! ” (%) [#] {@} / & \ < - + ÷ × = > ® © $ € £ ¥ ¢ : ; , . \*
{% endfilter %}

#### Styles

400 - Regular<br/>
_400 - Regular italic_<br/>
**700 - Bold**<br/>
_**700 - Bold italic**_

{% endmarkdown %}
{% endblock %}
