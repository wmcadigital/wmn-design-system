import * as Sentry from '@sentry/browser';
import * as polyfills from './assets/vendor/js/polyfills/polyfills';
import colorPalettes from './pages/styles/colour-palettes/_color-palettes';
import aToZContentStyleGuide from './pages/styles/a-to-z-content-style-guide/_a-to-z-content-style-guide';
import cookies from '../wmnds/patterns/cookies/cookies-manager/_example';
import headerJs from '../wmnds/patterns/header-v2/_example';
import footerJs from '../wmnds/patterns/footer/_example';
import accordionsJS from '../wmnds/components/accordion/_example';
import travelUpdatesWidgetJs from '../wmnds/patterns/travel-updates/_example';
import timetableJs from '../wmnds/patterns/timetable/bus-and-tram/_example';
import searchFilterJs from '../wmnds/patterns/search/search-filter/_example';
import feedbackLoopsJS from '../wmnds/patterns/feedback-loop/_example';
import nIcons from '../wmnds/components/icon/n-icon/_example';
import headerSearchJS from './_layouts/_header-search';

import { componentExample, componentExampleIframe } from './_partials/component-example';

const isInIframe = window.frameElement && window.frameElement.nodeName === 'IFRAME'; // check if we are in an iframe
// If not in iframe and we are in prod, then run sentry
if (!isInIframe && process.env.NODE_ENV === 'production')
  Sentry.init({
    dsn: 'https://c72ff3aefb3e4a4585c61e5807411ae9@o378798.ingest.sentry.io/5285374'
  });

const icons = () => {
  // Ajax SVG in, SVGS are referenced in app (Icon component)
  const ajax = new XMLHttpRequest();
  ajax.open('GET', '/img/wmnds-icons.min.svg', true);
  ajax.send();
  ajax.onload = () => {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  };
};

window.addEventListener(
  'DOMContentLoaded',
  (polyfills,
  icons(),
  nIcons(),
  aToZContentStyleGuide(),
  colorPalettes(),
  headerJs(),
  footerJs(),
  accordionsJS(),
  cookies(),
  feedbackLoopsJS(),
  travelUpdatesWidgetJs(),
  timetableJs(),
  searchFilterJs(),
  headerSearchJS(),
  componentExampleIframe(),
  componentExample)
);
