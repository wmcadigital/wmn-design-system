import * as Sentry from '@sentry/browser';
import forEachPolyfill from './assets/vendor/js/polyfills/ie11-forEach';
import colorPalettes from './pages/styles/colour-palettes/_color-palettes';
import aToZContentStyleGuide from './pages/styles/a-to-z-content-style-guide/_a-to-z-content-style-guide';
import highlightJS from './_partials/component-example/_component-example';
import cookies from '../wmnds/patterns/cookies/cookies';
import headerJs from '../wmnds/patterns/header-v2/_header-v2';
import footerJs from '../wmnds/patterns/footer/_footer';
import accordionsJS from '../wmnds/components/accordion/_accordion';

Sentry.init({ dsn: 'https://c72ff3aefb3e4a4585c61e5807411ae9@o378798.ingest.sentry.io/5285374' });

const createIframes = () => {
  const iframeExamples = document.querySelectorAll('.wmnds-website-code-example__iframe');

  iframeExamples.forEach(iframeElement => {
    const iframe = iframeElement.querySelector('iframe');

    const fullscreenLink = iframeElement.querySelector('.wmnds-website-code-example__fullscreen-link');
    let iframeFullscreen = false;
    fullscreenLink.addEventListener('click', e => {
      e.preventDefault();
      iframeFullscreen = !iframeFullscreen;
      if (iframeFullscreen) {
        iframeElement.classList.add('wmnds-website-code-example__iframe-container--fullscreen');
        fullscreenLink.innerHTML = 'Leave full screen';
        document.documentElement.style.overflow = 'hidden';
      } else {
        iframeElement.classList.remove('wmnds-website-code-example__iframe-container--fullscreen');
        fullscreenLink.innerHTML = 'View component full screen';
        document.documentElement.style.overflow = null;
      }
    });

    // get iframe content
    const iframeContent = iframe.innerHTML;
    // clear unnecessary html
    iframe.innerHTML = '';

    const getGeneratedPageURL = ({ html }) => {
      // create pseudo url to feed to the iframe
      const getBlobURL = (code, type) => {
        const blob = new Blob([code], { type });
        return URL.createObjectURL(blob);
      };

      const host = `http://${window.location.host}`;
      // set up iframe content structure
      const source = `
      <html>
        <head>
          <base href="${host}" target="_blank">
          <link rel="stylesheet" type="text/css" href="/css/wmnds-components.min.css" />
          <link rel="stylesheet" type="text/css" href="/css/wmnds-website.min.css" />
          <script src="/js/wmnds-website.min.js"></script>
        </head>
        <body>
          ${html || ''}
        </body>
      </html>
    `;

      return getBlobURL(source, 'text/html');
    };
    // add specified content to html
    const url = getGeneratedPageURL({
      html: iframeContent
    });

    iframe.src = url;

    const resizeIframe = obj => {
      obj.style.height = `${obj.contentWindow.document.documentElement.scrollHeight}px`;
    };

    // adjust iframe height on load
    iframe.onload = () => {
      resizeIframe(iframe);
    };
  });
};

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
  accordionsJS();
};

window.addEventListener(
  'DOMContentLoaded',
  (forEachPolyfill, createIframes(), icons(), aToZContentStyleGuide(), colorPalettes(), highlightJS)
);
