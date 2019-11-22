function showCode() {
  // for each button we create below
  document.querySelectorAll('.wmnds-js-show-code').forEach(ele => {
    // when clicked
    ele.addEventListener('click', e => {
      // expand code height to 100%
      e.target.parentElement.querySelector('.hljs').style.maxHeight = '100%';
    });
  });
}

export default () => {
  const { hljs } = window; // declare higlightJS as global var
  document.querySelectorAll('pre code').forEach(element => {
    // Run highlightJS for each pre code element found */
    hljs.highlightBlock(element);

    if (element.clientHeight >= 192) {
      const htmlString = '<span class="wmnds-link wmnds-js-show-code">Show code</span>';

      element.parentElement.insertAdjacentHTML('afterend', htmlString);
    }

    showCode();
  });
}
