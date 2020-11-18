import 'iframe-resizer';

// Resize iframe to content within
const resizeIFrameToFitContent = iFrame => {
  const setiFrame = iFrame; // set iframe to clean var
  setiFrame.width = '100%'; // set the width to 100%
  setiFrame.height = `${
    iFrame.contentWindow.document.body.querySelector('.wmnds-iframe-content').scrollHeight + 32
  }px`; // set height of iframe to content within it (this div is found in the html we construct within the "html" var)
  console.log('ran');
  return setiFrame; // Then return the updated iframe
};

const createIframe = () => {
  const iframeExamples = document.querySelectorAll('.wmnds-website-code-example__iframe');

  iframeExamples.forEach(iframeElement => {
    const ifrm = iframeElement;

    // get iframe content
    const html = ifrm.dataset.src;
    // clear unnecessary html
    ifrm.innerHTML = '';

    const host = `http://${window.location.host}`;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', `${host}/img/wmnds-sprite.min.svg`, true); // Fire off ajax to get spritesheet
    ajax.send();
    // When spritesheet has loaded
    ajax.onload = () => {
      // CONSTRUCT HTML TO INJECT IN IFRAME
      const svgSprite = `<div style="display:none">${ajax.responseText}</div>`; // Set spritesheet to hidden dom element
      // set up iframe content structure
      const source = `
        <html>
          <head>
            <base href="${host}" target="_blank">
            <link rel="stylesheet" type="text/css" href="${host}/css/wmnds-components.min.css" />
            <link rel="stylesheet" type="text/css" href="${host}/css/wmnds-website.min.css" />
          </head>
          <body>
            <div class="wmnds-p-md wmnds-iframe-content">
              ${svgSprite}
              ${html || ''}
            </div>
          </body>
        </html>
      `;
      ifrm.contentWindow.document.open(); // Open the iframe doc to write to
      ifrm.contentWindow.document.write(source); // Put in html
      ifrm.contentWindow.document.close(); // Cloe the iframe doc

      ifrm.onload = () => {
        iFrameResize({ log: true }, ifrm);
        // resizeIFrameToFitContent(ifrm);
      }; // When the iframe has loaded then run resize function to give correct height/width
    };

    return ifrm;
  });
};

export default createIframe;
