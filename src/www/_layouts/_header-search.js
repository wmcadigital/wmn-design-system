/* eslint-disable no-unused-vars */
import pageData from '../data.njk.json';

const headerSearchJS = () => {
  const autoComplete = document.getElementById('wmndsMegaMenuSearch');
  const autoCompleteSuggestions = document.getElementById('wmndsSearchSuggestions');
  const pages = [
    ...pageData.navItems.map(navItem => {
      if (!navItem.subnavItems) {
        return navItem;
      }
      const childMenus = navItem.subnavItems.map(({ name, href, subnavItems, unlinked }) => {
        const linkedChildMenu = !unlinked ? [{ name, href, parent: navItem.name }] : [];
        if (!subnavItems) {
          return linkedChildMenu;
        }

        return [
          ...linkedChildMenu,
          subnavItems.map(grandChildItem => ({
            name: grandChildItem.name,
            parent: name,
            grandparent: navItem.name,
            href: grandChildItem.href
          }))
        ];
      });
      return childMenus.flat();
    })
  ]
    .flat(2)
    .map(menu => {
      const newMenu = menu;
      if (!menu.href) {
        delete newMenu.href;
      }
      return newMenu;
    });
  console.log(pages);
  if (autoComplete) {
    autoComplete.addEventListener('keydown', e => {
      if (e.key === ' ') e.target.value = `${e.target.value} `;
    });
    autoComplete.addEventListener('keyup', e => {
      const query = e.target.value;
      autoCompleteSuggestions.innerHTML = '';
      if (query.length > 2) {
        const matchedPages = pages.filter(page => {
          let hasMatch = false;
          if (page.name.toLowerCase().includes(e.target.value.toLowerCase())) {
            hasMatch = true;
          }
          if (page.parent && page.parent.toLowerCase().includes(e.target.value.toLowerCase())) {
            hasMatch = true;
          }
          if (
            page.grandparent &&
            page.grandparent.toLowerCase().includes(e.target.value.toLowerCase())
          ) {
            hasMatch = true;
          }
          return hasMatch;
        });

        if (matchedPages.length) {
          autoCompleteSuggestions.style.display = 'block';
          matchedPages.forEach(page => {
            // Construct page text node
            const text = document.createTextNode(page.name);
            const suggestionText = document.createElement('strong');
            suggestionText.classList.add('wmnds-col-1');
            suggestionText.appendChild(text);

            // Construct breadcrumbs node
            const crumbs = document.createTextNode(
              `${page.grandparent ? `${page.grandparent} > ` : ''}${
                page.parent ? `${page.parent} > ` : ''
              }${page.name}`
            );
            const suggestionCrumbs = document.createElement('span');
            suggestionCrumbs.appendChild(crumbs);

            const url = str => str.toLowerCase().replace(' ', '-');
            const suggestionHref =
              page.href ||
              `/${page.grandparent ? `${url(page.grandparent)}/` : ''}${
                page.parent ? `${url(page.parent)}/` : ''
              }${url(page.name)}/`;

            const suggestionLink = document.createElement('a');
            suggestionLink.setAttribute('href', suggestionHref);
            suggestionLink.setAttribute('tabindex', '0');
            suggestionLink.classList.add('wmnds-autocomplete-suggestions__li', 'wmnds-col-1');
            suggestionLink.appendChild(suggestionText);
            suggestionLink.appendChild(suggestionCrumbs);

            autoCompleteSuggestions.appendChild(suggestionLink);
          });
        } else {
          autoCompleteSuggestions.style.display = 'none';
        }
      } else {
        autoCompleteSuggestions.style.display = 'none';
      }
    });
  }
};

export default headerSearchJS;
