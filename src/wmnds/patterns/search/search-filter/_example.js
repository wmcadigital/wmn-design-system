const searchFilterJs = () => {
  const showBtn = document.getElementById('show_filter_btn');
  const hideBtn = document.getElementById('hide_filter_btn');
  const showResults = document.getElementById('show_results_btn');
  const searchFilter = document.getElementById('search_filter');

  if (searchFilter) {
    const filterOptions = searchFilter.querySelectorAll('.wmnds-fe-checkboxes__input');

    filterOptions.forEach(option => {
      option.addEventListener('change', () => {
        if ([...filterOptions].some(input => input.checked)) {
          searchFilter.classList.add('wmnds-search-filter--has-inputs-checked');
        } else {
          searchFilter.classList.remove('wmnds-search-filter--has-inputs-checked');
        }
      });
    });

    const showFilter = (show = true) => {
      if (show) {
        searchFilter.classList.add('wmnds-search-filter--is-open');
        searchFilter.setAttribute('aria-expanded', 'true');
      } else {
        searchFilter.classList.remove('wmnds-search-filter--is-open');
        searchFilter.setAttribute('aria-expanded', 'false');
      }
    };

    const clearFilters = () => {
      filterOptions.forEach(option => {
        option.checked = false; // eslint-disable-line no-param-reassign
      });
      searchFilter.classList.remove('wmnds-search-filter--has-inputs-checked');
    };

    showBtn.addEventListener('click', e => {
      e.preventDefault();
      showFilter();
    });

    hideBtn.addEventListener('click', e => {
      e.preventDefault();
      showFilter(false);
    });

    document.querySelectorAll('.wmnds-search-filter__clear-all').forEach(clearBtn => {
      clearBtn.addEventListener('click', e => {
        e.preventDefault();
        clearFilters();
      });
    });

    showResults.addEventListener('click', () => showFilter(false));
  }
};

export default searchFilterJs;
