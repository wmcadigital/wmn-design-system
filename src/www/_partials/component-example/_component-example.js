const seeExampleFullScreen = () => {
  const fullScreenBtns = document.querySelectorAll('.wmnds-website-code-example__view-fullscreen');
  const { style } = document.documentElement;

  fullScreenBtns.forEach(btn => {
    const btnEle = btn; // Grab ele of btn and map to const to avoid mutation
    const codeExampleDiv = btnEle.parentElement; // Get parent div of button (inner wrap)

    // Func on what to do when closing full screen
    const closeFullScreen = () => {
      codeExampleDiv.classList.remove('wmnds-website-code-example--fullscreen'); // Remove full screen class
      btnEle.innerHTML = 'See this example in fullscreen'; // Change button text
      style.overflow = 'initial'; // Set body overflow back to initial, so we enable scrolling again
      style.overscrollBehaviorY = 'initial'; // Enables pull down to refresh in chrome on android
    };

    // Func to handle what to do when keys are pressed
    const handleFullScreenKeyDown = e => {
      const focusableElements =
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'; // Element we want to track

      const firstFocusableElement = codeExampleDiv.querySelectorAll(focusableElements)[0]; // Get first element to be focused
      const focusableContent = codeExampleDiv.querySelectorAll(focusableElements); // Get all focusable elements
      const lastFocusableElement = focusableContent[focusableContent.length - 1]; // Get last element to be focused

      const isTabPressed = e.key === 'Tab' || e.keyCode === 9; // Map to tab key
      const isEscPressed = e.key === 'Esc' || e.key === 'Escape' || e.keyCode === 27; // Map to esc key

      // If tabe or esc is not pressed then break out of func
      if (!isTabPressed && !isEscPressed) {
        return;
      }

      // If escape key pressed
      if (isEscPressed) {
        closeFullScreen();
        document.removeEventListener('keydown', handleFullScreenKeyDown); // Remove listener as we want to go back to normal keyboard events
      }
      // else if shift key pressed for shift + tab combination
      else if (e.shiftKey) {
        // if focused has reached to first focusable element then focus last focusable element after pressing shift + tab
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

    // Func to handle click of btn
    const handleClick = () => {
      // Func on what to do when opening full screen
      const openFullScreen = () => {
        codeExampleDiv.classList.add('wmnds-website-code-example--fullscreen'); // Add full screen class
        btnEle.innerHTML = 'Close this fullscreen example'; // Change button text
        style.overflow = 'hidden'; // Set body overflow to hidden, so we don't snap to body scrollbar
        style.overscrollBehaviorY = 'none'; // Stops pull down to refresh in chrome on android
        document.addEventListener('keydown', handleFullScreenKeyDown); // Add listener to key events for full screen
      };
      // If we are in fullscreen mode
      if (codeExampleDiv.classList.contains('wmnds-website-code-example--fullscreen')) {
        closeFullScreen(); // Close full screen
        document.removeEventListener('keydown', handleFullScreenKeyDown); /// Remove listener as we want to go back to normal keyboard events
      }
      // Else we want to go into fullscreen mode
      else {
        openFullScreen();
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
