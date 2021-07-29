const footerJs = () => {
  const collapseMenus = document.querySelectorAll('.tfwmds-collapse-heading');
  let eventListenersAdded = false;

  const handleMobileFooter = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768 && !eventListenersAdded) {
      eventListenersAdded = true; // Stop multiple event listeners being added as collapse functionality forces 'resize' call on window.

      collapseMenus.forEach(collapseToggle => {
        let toggleActive = false;
        const panel = document.getElementById(collapseToggle.getAttribute('aria-controls'));

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
  handleMobileFooter();
  window.addEventListener('resize', handleMobileFooter);
};

export default footerJs;
