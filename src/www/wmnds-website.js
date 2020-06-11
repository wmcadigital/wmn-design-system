import forEachPolyfill from './assets/vendor/js/polyfills/ie11-forEach';
import colorPalettes from './pages/styles/colour-palettes/_color-palettes';
import highlightJS from './_partials/component-example/_component-example';

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

window.addEventListener('DOMContentLoaded', (forEachPolyfill, icons(), colorPalettes, highlightJS));
