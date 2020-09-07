const footerJs = () => {
  const collapseMenus = document.querySelectorAll('.wmnds-collapse-heading');
  collapseMenus.forEach(collapseToggle => {
    collapseToggle.addEventListener('click', () => {
      const panel = collapseToggle.nextElementSibling;
      collapseToggle.classList.toggle('active');
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  });
};

export default footerJs;
