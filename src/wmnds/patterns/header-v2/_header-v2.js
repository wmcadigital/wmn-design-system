const header = () => {
  const megaMenus = document.querySelectorAll('.wmnds-mega-menu');
  megaMenus.forEach(menu => {
    const topLevelLinks = menu.querySelectorAll('.wmnds-mega-menu__primary-menu-link');
    topLevelLinks.forEach(topLevelLink => {
      let mousedown = false;
      let menuIsActive = false;
      const topLevelListItem = topLevelLink.parentNode;
      const subMenuLinks = topLevelListItem.querySelectorAll('.wmnds-mega-menu__sub-menu-link');

      // if link is focused via click
      const handleMouseup = () => {
        mousedown = false;
        document.removeEventListener('mouseup', handleMouseup);
      };

      const handleMousedown = () => {
        mousedown = true;
        document.addEventListener('mouseup', handleMouseup);
      };

      // if link is focused via keyboard
      const handleKeyFocus = () => {
        topLevelLink.focus();
        if (!mousedown) {
          menu.classList.add('keyFocus');
          topLevelListItem.classList.add('keyFocus');
        }
      };

      const handleKeydown = key => {
        console.log(key);
        // if key pressed is enter or space bar
        if (key === 13 || key === 32) {
          // remove keyFocus to allow menu to show
          setMenuActive();
          // focus first menu item
          console.log(subMenuLinks[0]);
          subMenuLinks[0].focus();
        } else if (key === 27) {
          // if escape pressed
          setMenuActive(false);
        }
      };

      const setMenuActive = active => {
        if (active !== false) {
          menu.classList.remove('keyFocus');
          topLevelListItem.classList.remove('keyFocus');
          menuIsActive = true;
          menu.classList.add('active');
          topLevelListItem.classList.add('active');
        } else {
          menuIsActive = false;
          menu.classList.remove('active');
          topLevelListItem.classList.remove('active');
          handleKeyFocus();
        }
      };

      topLevelListItem.addEventListener('mousedown', handleMousedown);
      topLevelLink.addEventListener('focus', handleKeyFocus);
      topLevelListItem.addEventListener('keydown', e => {
        handleKeydown(e.keyCode);
      });
    });
  });
};

export default header;
