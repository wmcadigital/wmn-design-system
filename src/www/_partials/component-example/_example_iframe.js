const createIframes = () => {
  const iframeExamples = document.querySelectorAll('.wmnds-website-code-example__iframe');

  iframeExamples.forEach(iframeElement => {
    const iframe = iframeElement.querySelector('iframe');

    const fullscreenLink = iframeElement.querySelector('.wmnds-website-code-example__fullscreen-link');
    // toggle full screen iframe view
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
            <link rel="stylesheet" type="text/css" href="${host}/css/wmnds-components.min.css" />
            <link rel="stylesheet" type="text/css" href="${host}/css/wmnds-website.min.css" />
            <script src="${host}/js/wmnds-website.min.js"></script>
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
      obj.style.height = `${obj.contentWindow.document.documentElement.scrollHeight}px`; // eslint-disable-line no-param-reassign
    };

    // adjust iframe height on load
    iframe.onload = () => {
      resizeIframe(iframe);
    };
  });
};

export default createIframes;
