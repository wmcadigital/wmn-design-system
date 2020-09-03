const header = () => {
  // get mega menu elements
  const megaMenus = document.querySelectorAll('.wmnds-mega-menu');

  const mobileMenu = window.matchMedia('(max-width: 1280px)');

  megaMenus.forEach(menu => {
    // mobile toggle

    const mobileToggle = menu.querySelector('.wmnds-mega-menu__mobile-toggle');
    const headerEl = menu.parentNode.parentNode;

    const mobileMenuIsOpen = { menu: false, primary: false };

    mobileToggle.addEventListener('click', () => {
      mobileMenuIsOpen.menu = !mobileMenuIsOpen.menu;
      if (mobileMenuIsOpen.menu) {
        headerEl.classList.add('wmnds-header--mega-menu-open');
        document.querySelector('html').classList.add('mobile-menu-open');
      } else {
        headerEl.classList.remove('wmnds-header--mega-menu-open', 'wmnds-header--mega-menu-submenu-open');
        document.querySelector('html').classList.remove('mobile-menu-open');
      }
    });

    const collapseMenus = menu.querySelectorAll('.wmnds-mega-menu__sub-menu-item .wmnds-mega-menu__collapse-toggle');
    collapseMenus.forEach(collapseToggle => {
      collapseToggle.addEventListener('click', () => {
        const panel = collapseToggle.nextElementSibling;
        collapseToggle.classList.toggle('open');
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = `${panel.scrollHeight}px`;
        }
      });
    });

    const topLevelLinks = menu.querySelectorAll('.wmnds-mega-menu__primary-menu-link');
    // handle events within each top level list item
    topLevelLinks.forEach((topLevelLink, topLevelLinkIndex) => {
      let mousedown = false;
      const topLevelListItem = topLevelLink.parentNode;
      const subMenuLinks = topLevelListItem.querySelectorAll('.wmnds-mega-menu__sub-menu-link');

      // mobile nav
      function handleMobileMenu(mq) {
        if (mq.matches) {
          topLevelLink.addEventListener('click', e => {
            mobileMenuIsOpen.primary = !mobileMenuIsOpen.primary;
            const targetListItem = e.target.parentNode;
            if (mobileMenuIsOpen.primary) {
              targetListItem.classList.add('open');
              targetListItem.querySelector('.wmnds-mega-menu__sub-menu-link').focus();
              headerEl.classList.add('wmnds-header--mega-menu-submenu-open');
            } else {
              targetListItem.classList.remove('open');
              headerEl.classList.remove('wmnds-header--mega-menu-submenu-open');
            }
          });
        } else {
          topLevelLink.removeEventListener('click');
        }
      }
      handleMobileMenu(mobileMenu);
      mobileMenu.addListener(handleMobileMenu);

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
      const handleBlur = () => {
        menu.classList.remove('keyFocus');
        topLevelListItem.classList.remove('keyFocus');
        menu.classList.remove('active');
        topLevelListItem.classList.remove('active');
      };

      const setMenuActive = active => {
        if (active !== false) {
          menu.classList.remove('keyFocus');
          topLevelListItem.classList.remove('keyFocus');
          menu.classList.add('active');
          topLevelListItem.classList.add('active');
        } else {
          menu.classList.remove('active');
          topLevelListItem.classList.remove('active');
          handleKeyFocus();
        }
      };

      // returns a specified menu link from a specified array
      // currentIndex = index of the link that is currently focused
      // array = array to move through
      // direction = next, prev,
      const getMenuLink = (currentIndex, array, direction) => {
        let menuLink = null;
        if (array) {
          if (direction === 'prev') {
            // return previous link in specified array if there is one else return null;
            menuLink = array[currentIndex - 1] ? array[currentIndex - 1] : null;
          } else if (direction === 'next') {
            // return next link in specified array if there is one else return null;
            menuLink = array[currentIndex + 1] ? array[currentIndex + 1] : null;
          } else {
            // return link with same index in specified array;
            menuLink = array[currentIndex] ? array[currentIndex] : array[array.length - 1];
          }
        }
        return menuLink;
      };

      const handleKeydown = (e, key) => {
        e.stopPropagation();
        // if key pressed is enter, space bar or down arrow
        if (key === 13 || key === 32 || key === 40) {
          // check if list item has a mega menu
          if (topLevelListItem.querySelectorAll('.wmnds-mega-menu__container').length) {
            e.preventDefault();
            // remove keyFocus to allow menu to show
            setMenuActive(true);
            // focus first menu item
            subMenuLinks[0].focus();
          }
        } else if (key === 37) {
          // left arrow
          const prevLink = getMenuLink(topLevelLinkIndex, topLevelLinks, 'prev');
          if (prevLink) prevLink.focus();
        } else if (key === 39) {
          // right arrow
          const nextLink = getMenuLink(topLevelLinkIndex, topLevelLinks, 'next');
          if (nextLink) nextLink.focus();
        } else if (key === 27) {
          // if escape pressed
          setMenuActive(false);
        }
      };

      topLevelLink.addEventListener('mousedown', e => {
        e.preventDefault();
        setMenuActive(false);
      });
      topLevelListItem.addEventListener('mousedown', handleMousedown);
      topLevelLink.addEventListener('focus', handleKeyFocus);
      topLevelListItem.addEventListener('blur', handleBlur);
      topLevelListItem.addEventListener('keydown', e => {
        handleKeydown(e, e.keyCode);
      });

      // array of mega menu links by column
      const menuArray = [];
      subMenuLinks.forEach((menuLink, menuIndex) => {
        const thisList = menuLink.parentNode;
        const thisListLinks = thisList.querySelectorAll('a');
        // push list of links to array
        menuArray.push(thisListLinks);

        thisListLinks.forEach((link, linkIndex) => {
          link.addEventListener('keydown', e => {
            if (e.keyCode !== 27) {
              e.stopPropagation();
              if (e.keyCode === 39) {
                // right arrow - go to link of same index in next menu list
                e.preventDefault();
                const nextMenuLink = getMenuLink(linkIndex, menuArray[menuIndex + 1]);
                if (nextMenuLink) nextMenuLink.focus();
              } else if (e.keyCode === 37) {
                // left arrow - go to link of same index in previous menu list
                e.preventDefault();
                const prevMenuLink = getMenuLink(linkIndex, menuArray[menuIndex - 1]);
                if (prevMenuLink) prevMenuLink.focus();
              } else if (e.keyCode === 40) {
                // down arrow - go to next link in current menu list
                e.preventDefault();
                // if next link doesnt exist try next menu first item else return null
                const nextLink = getMenuLink(linkIndex, thisListLinks, 'next')
                  ? getMenuLink(linkIndex, thisListLinks, 'next')
                  : getMenuLink(-1, menuArray[menuIndex + 1], 'next');
                if (nextLink) {
                  nextLink.focus();
                } else {
                  setMenuActive(false);
                  if (getMenuLink(topLevelLinkIndex, topLevelLinks, 'next')) {
                    getMenuLink(topLevelLinkIndex, topLevelLinks, 'next').focus();
                  }
                }
              } else if (e.keyCode === 38) {
                // up arrow - go to previous item in current menu list
                e.preventDefault();
                const prevMenu = menuArray[menuIndex - 1];
                let prevLink = null;
                if (prevMenu || linkIndex > 0) {
                  prevLink = getMenuLink(linkIndex, thisListLinks, 'prev')
                    ? getMenuLink(linkIndex, thisListLinks, 'prev')
                    : getMenuLink(prevMenu.length, prevMenu, 'prev');
                }
                if (prevLink) {
                  prevLink.focus();
                } else {
                  setMenuActive(false);
                }
              }
            }
          });
        });
      });
    });
  });
};

export default header;
