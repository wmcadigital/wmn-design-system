const seeExampleFullScreen = () => {
  const fullScreenBtns = document.querySelectorAll('.wmnds-website-code-example__view-fullscreen');
  const { documentElement } = document;

  const handleKeyDown = (e, ele) => {
    const fullScreenEle = ele;
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    const firstFocusableElement = fullScreenEle.querySelectorAll(focusableElements)[0];
    const focusableContent = fullScreenEle.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

    const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    }
    // if tab key is pressed
    else if (document.activeElement === lastFocusableElement) {
      // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  };

  fullScreenBtns.forEach(btn => {
    const btnEle = btn;

    const closeFullScreen = () => {
      btnEle.innerHTML = 'See this example in fullscreen';
      documentElement.style.overflow = 'initial'; // Set body overflow to hidden, so we don't snap to body scrollbar
      documentElement.style.overscrollBehaviorY = 'initial'; // Stops pull down to refresh in chrome on android
      document.removeEventListener('keydown', e => handleKeyDown(e, btnEle.parentElement));
    };

    const handleEscape = e => {
      const isEscPressed = e.key === 'Esc' || e.key === 'Escape' || e.keyCode === 27;

      if (!isEscPressed) {
        return;
      }
      if (isEscPressed) {
        btnEle.parentElement.classList.remove('wmnds-website-code-example--fullscreen');
        closeFullScreen();
        btnEle.parentElement.removeEventListener('keydown', handleEscape);
      }
    };

    const openFullScreen = () => {
      btnEle.innerHTML = 'Close this fullscreen example';
      documentElement.style.overflow = 'hidden'; // Set body overflow to hidden, so we don't snap to body scrollbar
      documentElement.style.overscrollBehaviorY = 'none'; // Stops pull down to refresh in chrome on android
      document.addEventListener('keydown', e => handleKeyDown(e, btnEle.parentElement));
      btnEle.parentElement.addEventListener('keydown', handleEscape);
    };

    const handleClick = () => {
      btnEle.parentElement.classList.toggle('wmnds-website-code-example--fullscreen');

      if (btnEle.parentElement.classList.contains('wmnds-website-code-example--fullscreen')) {
        openFullScreen();
      } else {
        closeFullScreen();
        btnEle.parentElement.removeEventListener('keydown', handleEscape);
      }
    };

    btnEle.addEventListener('click', handleClick);
  });
};

function showCode(ele) {
  // for each button we create below
  function showMore(e) {
    const btn = e.target || e.srcElement; // Set btn to the element from which the click came

    // if the btn clicked contains this class, then it must be active, so reset it back to the norm
    if (btn.classList.contains('wmnds-js-show-code--active')) {
      btn.previousSibling.querySelector('.hljs').style.maxHeight = '200px';
      btn.classList.remove('wmnds-js-show-code--active');
      btn.innerText = 'Show more code';
    } else {
      // Else expand the code preview to 100%
      btn.previousSibling.querySelector('.hljs').style.maxHeight = '100%';
      btn.classList.add('wmnds-js-show-code--active');
      btn.innerText = 'Show less code';
    }
  }

  // when clicked
  ele.addEventListener('click', e => {
    e.preventDefault();
    showMore(e);
  });

  // When keyboard "enter" pressed
  ele.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      showMore(e);
    }
  });
}

export { showCode };

const displayShowMore = element => {
  // If the code preview is 192 height (without padding) then we need to display the 'show more code' button
  if (element.clientHeight >= 192 && !element.classList.contains('wmnds-show-more-ignore')) {
    const htmlString = '<a href="#" class="wmnds-link wmnds-js-show-code">Show more code</a>';

    element.parentElement.insertAdjacentHTML('afterend', htmlString);
  }
};

export { displayShowMore };

export default () => {
  const { hljs } = window; // declare higlightJS as global var
  document.querySelectorAll('pre code').forEach(element => {
    // Run highlightJS for each pre code element found */
    hljs.highlightBlock(element);
    displayShowMore(element);
  });
  document.querySelectorAll('.wmnds-js-show-code').forEach(ele => {
    showCode(ele); // run show code function above when hljs has init
  });

  seeExampleFullScreen();
};
