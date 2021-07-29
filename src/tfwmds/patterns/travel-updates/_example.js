const travelUpdatesWidgetJs = () => {
  const mobileMenu = window.matchMedia('(max-width: 767px)');

  function handleMobileMenu(mq) {
    if (mq.matches) {
      const updateSections = document.querySelectorAll('.tfwmds-travel-update--personal');

      updateSections.forEach(section => {
        // Button for chevron which toggles all details
        const sectionToggleBtn = section.querySelector(
          '.tfwmds-travel-update__disruption-detail-toggle'
        );
        // Get clickable disruption indicators
        const detailToggleBtn = section.querySelectorAll(
          '.tfwmds-travel-update__disruption-indicator-btn'
        );
        // Variable to control whether the whole section is expanded or not
        let sectionExpanded = false;
        // Toggle detail state
        const toggleDetail = (btn, state) => {
          btn.setAttribute('aria-expanded', state);
        };
        // Toggle chevron icon state
        const toggleIcon = state => {
          sectionToggleBtn.dataset.showDetails = state;
        };
        // Toggle section state
        const toggleSection = state => {
          sectionExpanded = state || !sectionExpanded;
          toggleIcon(sectionExpanded);
          // Overwrite each individual detail state to match section
          detailToggleBtn.forEach(btn => toggleDetail(btn, sectionExpanded));
        };
        // True if there are any details sections left expanded
        const isSectionExpanded = () =>
          section.querySelector(
            '.tfwmds-travel-update__disruption-indicator-btn[aria-expanded="true"]'
          ) && true;

        // Toggle whole section on click
        sectionToggleBtn.addEventListener('click', () => {
          toggleSection(!sectionExpanded);
        });

        detailToggleBtn.forEach(btn => {
          btn.addEventListener('click', () => {
            // Toggle individual detail on click
            if (btn.getAttribute('aria-expanded') === 'false') {
              toggleDetail(btn, true);
              // Add expanded class to btn container
              btn.parentNode.classList.add('is-expanded');
            } else {
              toggleDetail(btn, false);
              // Remove expanded class from btn container
              btn.parentNode.classList.remove('is-expanded');
            }

            // Set section icon state according to whether there are expanded details left or not
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
