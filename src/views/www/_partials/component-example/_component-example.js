function showCode() {
  document.querySelectorAll('.wmnds-js-show-code').forEach(ele => {
    ele.addEventListener('click', e => {
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
