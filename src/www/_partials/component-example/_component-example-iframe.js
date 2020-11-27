import 'iframe-resizer/js/iframeResizer'; // Import iframe resizer logic

const componentExampleIframe = () => {
  const iframeExamples = document.querySelectorAll('.wmnds-website-code-example__iframe');

  iframeExamples.forEach(iframeElement => {
    const ifrm = iframeElement;

    // get iframe content
    const html = ifrm.dataset.src;
    // clear unnecessary html
    ifrm.innerHTML = '';

    const host = `//${window.location.host}`;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', `${host}/img/wmnds-icons.min.svg`, true); // Fire off ajax to get spritesheet
    ajax.send();
    // When spritesheet has loaded
    ajax.onload = () => {
      // CONSTRUCT HTML TO INJECT IN IFRAME
      const svgSprite = `<div style="display:none">${ajax.responseText}</div>`; // Set spritesheet to hidden dom element
      // set up iframe content structure
      const source = `
      <!DOCTYPE html>
        <html>
          <head>
            <base href="${host}" target="_blank">
            <link rel="stylesheet" type="text/css" href="${host}/css/wmnds.min.css" />
            <link rel="stylesheet" type="text/css" href="${host}/css/wmnds-website.min.css" />
          </head>
          <body>
            <div class="wmnds-p-md wmnds-iframe-content">
              ${svgSprite}
              ${html || ''}
            </div>
            <script src="https://unpkg.com/iframe-resizer@3.5.7/js/iframeResizer.contentWindow.min.js"></script>
            <script src="https://polyfill.io/v3/polyfill.min.js?features=Promise%2CObject.assign%2CString.prototype.includes%2CNumber.isNaN"></script>
            <script src="${host}/js/wmnds-website.min.js"></script>
          </body>
        </html>
      `;
      ifrm.contentWindow.document.open(); // Open the iframe doc to write to
      ifrm.contentWindow.document.write(source); // Put in html
      ifrm.contentWindow.document.close(); // Cloe the iframe doc

      ifrm.onload = () => {
        window.iFrameResize({ checkOrigin: [`http:${host}`, `https:${host}`] }, ifrm);
      }; // When the iframe has loaded then run resize function to give correct height/width, checkOrigin is an array that contains the allow hosts that can change the iframe
    };

    return ifrm;
  });
};

export default componentExampleIframe;
