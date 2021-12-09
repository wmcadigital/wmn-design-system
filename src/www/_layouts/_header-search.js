import pageData from '../data.njk.json';

const headerSearchJS = () => {
  const autoComplete = document.getElementById('wmndsMegaMenuSearch');
  const autoCompleteSuggestions = document.getElementById('wmndsSearchSuggestions');
  const pages = [
    ...pageData.navItems.map(navItem => {
      if (!navItem.subnavItems) {
        return navItem;
      }
      const childMenus = navItem.subnavItems.map(({ name, href, subnavItems, unlinked, tags }) => {
        const linkedChildMenu = !unlinked ? [{ name, href, tags, parent: navItem.name }] : [];
        if (!subnavItems) {
          return linkedChildMenu;
        }

        return [
          ...linkedChildMenu,
          subnavItems.map(grandChildItem => ({
            name: grandChildItem.name,
            parent: name,
            grandparent: navItem.name,
            tags: grandChildItem.tags,
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
      if (!menu.tags) {
        delete newMenu.tags;
      }
      return newMenu;
    });

  if (autoComplete) {
    autoComplete.addEventListener('keydown', e => {
      if (e.key === ' ') e.target.value = `${e.target.value} `;
    });
    autoComplete.addEventListener('keyup', e => {
      const query = e.target.value;
      autoCompleteSuggestions.innerHTML = '';
      if (query.length > 2) {
        const matchedPages = [[], [], []];

        pages.forEach(page => {
          if (page.name.toLowerCase().includes(query.toLowerCase())) {
            matchedPages[0].push(page);
          } else if (page.tags && page.tags.toLowerCase().includes(query.toLowerCase())) {
            matchedPages[1].push(page);
          } else if (
            (page.parent && page.parent.toLowerCase().includes(query.toLowerCase())) ||
            (page.grandparent && page.grandparent.toLowerCase().includes(query.toLowerCase()))
          ) {
            matchedPages[2].push(page);
          }
        });

        if (!matchedPages.every(arr => arr.length === 0)) {
          autoCompleteSuggestions.style.display = 'block';

          const createSuggestionLink = page => {
            // Construct page text node
            const text = document.createTextNode(page.name);
            const suggestionText = document.createElement('strong');
            suggestionText.classList.add('wmnds-col-1');
            suggestionText.appendChild(text);

            const suggestionInfo = document.createElement('div');
            suggestionInfo.classList.add('wmnds-grid', 'wmnds-grid--spacing-md-2-md');

            // Construct breadcrumbs node
            const crumbs = document.createTextNode(
              `${page.grandparent ? `${page.grandparent} > ` : ''}${
                page.parent ? `${page.parent} > ` : ''
              }${page.name}`
            );
            const suggestionCrumbs = document.createElement('div');
            suggestionCrumbs.classList.add('wmnds-col-1');
            suggestionCrumbs.appendChild(crumbs);
            suggestionInfo.appendChild(suggestionCrumbs);

            const url = str => str.toLowerCase().replaceAll(' ', '-');
            const suggestionHref =
              page.href ||
              `/${page.grandparent ? `${url(page.grandparent)}/` : ''}${
                page.parent && page.grandparent !== 'Components' ? `${url(page.parent)}/` : ''
              }${url(page.name)}/`;

            const suggestionLink = document.createElement('a');
            suggestionLink.setAttribute('href', suggestionHref);
            suggestionLink.setAttribute('tabindex', '0');
            suggestionLink.classList.add('wmnds-autocomplete-suggestions__li', 'wmnds-col-1');
            suggestionLink.appendChild(suggestionText);
            suggestionLink.appendChild(suggestionInfo);

            if (page.tags) {
              const tags = page.tags.split(', ');
              const matchedTags = tags.filter(tag => tag.includes(query));
              if (matchedTags.length > 0) {
                const tagText = document.createTextNode(
                  `Tag${matchedTags.length > 1 ? 's' : ''}: ${matchedTags.join(', ')}`
                );
                const suggestionTags = document.createElement('div');
                suggestionCrumbs.classList.add('wmnds-col-md-2-3');
                suggestionTags.classList.add(
                  'wmnds-col-md-1-3',
                  'wmnds-col-1',
                  'wmnds-text-align-right'
                );
                suggestionTags.appendChild(tagText);
                suggestionInfo.appendChild(suggestionTags);
              }
            }

            return suggestionLink;
          };

          matchedPages.forEach(arrayOfMatches => {
            const suggestions = arrayOfMatches.map(page => createSuggestionLink(page));
            suggestions.forEach(suggestion => autoCompleteSuggestions.appendChild(suggestion));
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
