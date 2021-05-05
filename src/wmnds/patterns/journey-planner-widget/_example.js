const accordionsJS = () => {
  const accordions = document.querySelectorAll('.wmnds-accordion');

  accordions.forEach(accordion => {
    const accordionBtn = accordion.querySelector('.wmnds-accordion__summary-wrapper');

    const toggleAccordion = () => {
      if (accordion.classList.contains('wmnds-is--open')) {
        accordion.classList.remove('wmnds-is--open');
        accordionBtn.setAttribute('aria-expanded', false);
      } else {
        accordion.classList.add('wmnds-is--open');
        accordionBtn.setAttribute('aria-expanded', true);
      }
    };

    accordionBtn.addEventListener('click', toggleAccordion);
  });
};

export default accordionsJS;
