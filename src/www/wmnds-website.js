import * as Sentry from '@sentry/browser';
import * as polyfills from './assets/vendor/js/polyfills/polyfills';
import colorPalettes from './pages/styles/colour-palettes/_color-palettes';
import aToZContentStyleGuide from './pages/styles/a-to-z-content-style-guide/_a-to-z-content-style-guide';
import highlightJS from './_partials/component-example/_component-example';
import createIframes from './_partials/component-example/_example_iframe';
import cookies from '../wmnds/patterns/cookies/cookies';
import headerJs from '../wmnds/patterns/header-v2/_header-v2';
import footerJs from '../wmnds/patterns/footer/_footer';
import accordionsJS from '../wmnds/components/accordion/_accordion';
import searchFilterJs from '../wmnds/patterns/search/search-filter/_search-filter';

Sentry.init({ dsn: 'https://c72ff3aefb3e4a4585c61e5807411ae9@o378798.ingest.sentry.io/5285374' });

const icons = () => {
  // Ajax SVG in, SVGS are referenced in app (Icon component)
  const ajax = new XMLHttpRequest();
  ajax.open('GET', '/img/wmnds-sprite.min.svg', true);
  ajax.send();
  ajax.onload = () => {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  };
};

// onload lets js functions run properly in iframes
window.onload = () => {
  headerJs();
  cookies();
  footerJs();
  searchFilterJs();
  accordionsJS();
};

window.addEventListener(
  'DOMContentLoaded',
  (polyfills, createIframes(), icons(), aToZContentStyleGuide(), colorPalettes(), highlightJS)
);
