function aToZContentStyleGuide() {
  // FUNCTIONS
  // Change accordion state
  const changeAccordionState = (accordionElem, changeStateToOpen = true) => {
    const accordionBtn = accordionElem.querySelector('.wmnds-accordion__summary-wrapper');
    if (changeStateToOpen) {
      accordionElem.classList.add('wmnds-is--open');
      accordionBtn.setAttribute('aria-expanded', true);
    } else {
      accordionElem.classList.remove('wmnds-is--open');
      accordionBtn.setAttribute('aria-expanded', false);
    }
  };

  // Change all accordion states at once
  const changeAllAccordionStates = changeStateToOpen => {
    const accordions = document.querySelectorAll('main .wmnds-accordion');
    accordions.forEach(accordion => changeAccordionState(accordion, changeStateToOpen));
  };

  // Scroll to an anchor within an accordion
  const scrollToAnchor = idWithHash => {
    // Check if element is on the page
    const elem = document.querySelector(idWithHash);
    if (!elem || elem.classList.contains('wmnds-accordion__summary-wrapper')) {
      return;
    }
    // Open accordion and scroll to element
    changeAccordionState(elem.parentElement.parentElement);
    elem.scrollIntoView();
  };

  //  Check for anchor to scroll to onload
  const scrollToAnchorOnLoad = () => {
    if (document.location.hash) {
      scrollToAnchor(document.location.hash);
    }
  };

  //   Add event listener to all section links on the page
  const setupScrollToAnchor = () => {
    const anchors = document.querySelectorAll('main a[href^="#"]:not([href="#"])');
    // Loop through an add event listener
    anchors.forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        scrollToAnchor(anchor.hash);
      });
    });
  };

  // Set up controls
  const setupAccordionControls = () => {
    const controls = document.querySelectorAll('main .js-accordion-controls button');

    controls.forEach(control => {
      control.addEventListener('click', () => {
        changeAllAccordionStates(control.classList.contains('js-accordion-controls-open'));
      });
    });
  };

  // CALL FUNCTIONS
  if (document.querySelector('#atozofstyle')) {
    scrollToAnchorOnLoad();
    setupScrollToAnchor();
    setupAccordionControls();
  }
}

export default aToZContentStyleGuide;
