const travelUpdatesWidgetJs = () => {
  const mobileMenu = window.matchMedia('(max-width: 767px)');

  function handleMobileMenu(mq) {
    if (mq.matches) {
      const updateSections = document.querySelectorAll('.wmnds-travel-update--personal');

      updateSections.forEach(section => {
        // Button for chevron which toggles all details
        const sectionToggleBtn = section.querySelector(
          '.wmnds-travel-update__disruption-detail-toggle'
        );
        // All clickable disruption indicators
        const detailToggleBtn = section.querySelectorAll(
          '.wmnds-travel-update__disruption-indicator-btn'
        );
        let sectionExpanded = false;
        const toggleDetail = (btn, state) => {
          btn.setAttribute('aria-expanded', state);
        };
        const toggleIcon = state => {
          sectionToggleBtn.dataset.showDetails = state;
        };
        const toggleSection = state => {
          sectionExpanded = state || !sectionExpanded;
          toggleIcon(sectionExpanded);
          // Overwrite each individual detail state to match section
          detailToggleBtn.forEach(btn => toggleDetail(btn, sectionExpanded));
        };
        // True if there are any details sections left expanded
        const isSectionExpanded = () =>
          section.querySelector(
            '.wmnds-travel-update__disruption-indicator-btn[aria-expanded="true"]'
          ) && true;

        sectionToggleBtn.addEventListener('click', () => {
          toggleSection(!sectionExpanded);
        });

        detailToggleBtn.forEach(btn => {
          btn.addEventListener('click', () => {
            if (btn.getAttribute('aria-expanded') === 'false') {
              toggleDetail(btn, true);
            } else {
              toggleDetail(btn, false);
            }

            if (isSectionExpanded()) {
              sectionExpanded = true;
              toggleIcon(sectionExpanded);
            } else {
              sectionExpanded = false;
              toggleIcon(sectionExpanded);
            }
          });
        });
      });
    }
  }
  // init mobile nav function
  handleMobileMenu(mobileMenu);
  mobileMenu.addListener(handleMobileMenu);
};

export default travelUpdatesWidgetJs;
