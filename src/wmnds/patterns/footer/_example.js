const footerJs = () => {
  const mobileFooter = window.matchMedia('(max-width: 767px)');
  const collapseMenus = document.querySelectorAll('.wmnds-collapse-heading');
  const handleMobileFooter = mq => {
    if (mq.matches) {
      collapseMenus.forEach(collapseToggle => {
        let toggleActive = false;
        const panel = collapseToggle.nextElementSibling;
        const handleToggle = () => {
          if (toggleActive) {
            collapseToggle.setAttribute('aria-expanded', 'true');
            panel.style.maxHeight = `${panel.scrollHeight}px`;
          } else {
            collapseToggle.setAttribute('aria-expanded', 'false');
            panel.style.maxHeight = null;
          }
        };
        handleToggle();
        collapseToggle.addEventListener('click', () => {
          toggleActive = !toggleActive;
          handleToggle();
        });
      });
    }
  };
  // init mobile nav function
  handleMobileFooter(mobileFooter);
  mobileFooter.addListener(handleMobileFooter);
};

export default footerJs;
