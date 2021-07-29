const accordionsJS = () => {
  const accordions = document.querySelectorAll('.tfwmds-accordion');

  accordions.forEach(accordion => {
    const accordionBtn = accordion.querySelector('.tfwmds-accordion__summary-wrapper');

    const toggleAccordion = () => {
      if (accordion.classList.contains('tfwmds-is--open')) {
        accordion.classList.remove('tfwmds-is--open');
        accordionBtn.setAttribute('aria-expanded', false);
      } else {
        accordion.classList.add('tfwmds-is--open');
        accordionBtn.setAttribute('aria-expanded', true);
      }
    };

    accordionBtn.addEventListener('click', toggleAccordion);
  });
};

export default accordionsJS;
