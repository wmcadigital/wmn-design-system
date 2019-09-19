/* eslint-disable no-loop-func */
// Define DOM elements
const iframe = document.getElementById('resizer');
const logo = document.getElementById('header-logo');
const links = document.getElementsByClassName('side-menu__sub-menu__item-link');

// Define url vars
let currentUrl;
const pagesDir = 'pages/';
const pages = {
    Typography: {
        title: 'typography',
        link: `${pagesDir}/typography.html`,
    },
    ColorPalette: {
        title: 'colorPalette',
        link: `${pagesDir}/colorPalette.html`,
    },
    Home: {
        title: 'home',
        link: `${pagesDir}/home.html`,
    },
};

function LoadPage(href) {
    currentUrl = href;
    switch (href) {
    case pages.Typography.title:
        iframe.setAttribute('src', pages.Typography.link);
        // content.innerHTML = await fetchHtmlAsText(pages.Typography.link);
        break;
    case pages.ColorPalette.title:
        iframe.setAttribute('src', pages.ColorPalette.link);
        // content.innerHTML = await fetchHtmlAsText(pages.ColorPalette.link);
        break;
    default:
        iframe.setAttribute('src', pages.Home.link);
        // content.innerHTML = await fetchHtmlAsText(pages.Home.link);
        break;
    }
}

for (let link = 0; link < links.length; link += 1) {
    links[link].addEventListener('click', () => {
        // get the anchor el that wraps around the link
        const parent = links[link].parentElement.parentElement;
        let href;

        // check if parent element exists and if it does get the
        // value of the href attribute
        if (parent) {
            // remove any hashtags if they exist
            href = parent.getAttribute('href').replace('#', '');
        }

        // Check if link matches the current page
        if (currentUrl !== href) {
            LoadPage(href);
        }
    });
}


logo.addEventListener('click', () => {
    LoadPage('');
});
