const header = () => {
  const megaMenus = document.querySelectorAll('.wmnds-mega-menu');
  megaMenus.forEach(menu => {
    const topLevelLinks = menu.querySelectorAll('.wmnds-mega-menu__primary-menu-link');
    topLevelLinks.forEach(topLevelLink => {
      let mousedown = false;

      //if link is focused via click
      const handleMousedown = () => {
        mousedown = true;
        document.addEventListener('mouseup', handleMouseup);
      };

      const handleMouseup = () => {
        mousedown = false;
        document.removeEventListener('mouseup', handleMouseup);
      };

      //if link is focused via keyboard
      //const keyFocus = () => {};

      topLevelLink.addEventListener('mousedown', handleMousedown);
      topLevelLink.addEventListener('focus', e => {
        if (!mousedown) {
          console.log('@!mousedown');
          menu.classList.add('keyFocus');
          topLevelLink.parentNode.classList.add('keyFocus');
        }
      });
    });
  });
};

export default header;
