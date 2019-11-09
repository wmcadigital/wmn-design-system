// Library from: https://github.com/TarekRaafat/autoComplete.js
import AutoComplete from './autoComplete.min';

export default () => {
  const autoCompleteInputs = document.querySelectorAll('.wmnds-fe-autocomplete__input');

  autoCompleteInputs.forEach((_autoCompleteEle, i) => {
    const autoCompleteEle = _autoCompleteEle;
    autoCompleteEle.id = `wmnds-js-autoComplete-${i}`; // Foreach autoCompleteEle, generate unique id to be used elsewhere
    const ds = autoCompleteEle.dataset; // Get all datasets from said input
    // Set configs to use below
    const config = {
      api: ds.api || null, // Use API string OR null
      keys: ds.keys.replace(/ /g, '').split(',') || [], // Get rid of white space and turn into array OR default to blank array
      placeHolder: ds.placeholder || 'Tap to search' // Use placeholder string OR "Tap to search" deafult
    };

    // If there is a valid api string, then create a new autocomplete instance,
    // the closest pre, is to stop the code launching in the pre/code tags on the styleguide
    if (config.api && autoCompleteEle.closest('pre') === null) {
      const initAutoComplete = () =>
        new AutoComplete({
          // Data src [Array, Function, Async] | (REQUIRED)
          data: {
            src: async () => {
              const source = await fetch(config.api); // Fetch External Data Source
              const data = await source.json(); // Format data into JSON
              return data; // Return Fetched data
            },
            key: config.keys, // Use keys provided to match search
            cache: true
          },
          placeHolder: config.placeHolder, // Place Holder text
          selector: `#${autoCompleteEle.id}`, // Input field selector
          threshold: 0, // Min. Chars length to start Engine
          debounce: 300, // Post duration for engine to start
          resultsList: {
            // Rendered results list object
            render: true, // Render out results
            container: _source => {
              const source = _source;
              const resultsListID = `results_list${i}`; // Set ID to unique
              source.id = resultsListID; // Set above
              source.classList.add('wmnds-fe-autocomplete__results-list'); // Add correct BEM class to results
              return resultsListID;
            },
            destination: document.querySelector(`#${autoCompleteEle.id}`)
          },
          highlight: true, // Highlight matching results
          // Rendered result item
          resultItem: {
            content: (data, _source) => {
              const source = _source;
              source.classList.add('wmnds-fe-autocomplete__result'); // Add correct BEM class to results
              source.innerHTML = data.match;
            }
          },
          onSelection: feedback => {
            // Action script onSelection event
            autoCompleteEle.value = feedback.selection.value.name;
          }
        });

      initAutoComplete();
    }
  });
};
