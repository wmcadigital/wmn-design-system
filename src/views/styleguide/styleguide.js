/* eslint-disable no-loop-func */
// Define DOM elements
const iframe = document.getElementById('resizer');
// const logo = document.getElementById('header-logo');
const links = document.getElementsByClassName('side-menu__sub-menu__item-link');

// Define url vars
let currentUrl;
const pagesDir = 'pages/';
const pages = {
    Home: {
        title: 'home',
        link: `${pagesDir}/home.html`,
    },
    ColorPalette: {
        title: 'colorPalette',
        link: `${pagesDir}/colorPalette.html`,
    },
    Typography: {
        title: 'typography',
        link: `${pagesDir}/typography.html`,
    },
    Marks: {
        title: 'marks',
        link: `${pagesDir}/marks.html`,
    },
    Tables: {
        title: 'tables',
        link: `${pagesDir}/tables.html`,
    },
    Buttons: {
        title: 'buttons',
        link: `${pagesDir}/buttons.html`,
    },
    Header: {
        title: 'header',
        link: `${pagesDir}/header.html`,
    },
};

function LoadPage(href) {
    currentUrl = href;
    switch (href) {
    case pages.Typography.title:
        iframe.setAttribute('src', pages.Typography.link);
        break;
    case pages.ColorPalette.title:
        iframe.setAttribute('src', pages.ColorPalette.link);
        break;
    case pages.Marks.title:
        iframe.setAttribute('src', pages.Marks.link);
        break;
    case pages.Tables.title:
        iframe.setAttribute('src', pages.Tables.link);
        break;
    case pages.Buttons.title:
        iframe.setAttribute('src', pages.Buttons.link);
        break;
    case pages.Header.title:
        iframe.setAttribute('src', pages.Header.link);
        break;
    default:
        iframe.setAttribute('src', pages.Home.link);
        break;
    }
}

for (let link = 0; link < links.length; link += 1) {
    links[link].addEventListener('click', () => {
        // get the anchor element that wraps around the link
        const parent = links[link].parentElement.parentElement;
        let href;

        // check if parent element exists and if it does get the
        // value of the href attribute and remove any hashtags
        if (parent) {
            href = parent.getAttribute('href').replace('#', '');
        }

        // Check if link matches the current page
        if (currentUrl !== href) {
            LoadPage(href);
        }
    });
}

// LoadPage(window)
