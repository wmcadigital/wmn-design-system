// Library from: https://github.com/TarekRaafat/autoComplete.js
const autoCompleteInputs = document.querySelectorAll(".wmn-fe-autocomplete__input");

autoCompleteInputs.forEach((autoCompleteEle, i) => {

    autoCompleteEle.id = 'wmn-js-autoComplete-' + i; // Foreach autoCompleteEle, generate unique id to be used elsewhere
    const ds = autoCompleteEle.dataset; // Get all datasets from said input
    // Set configs to use below
    const config = {
        api: ds.api || null, // Use API string OR null
        keys: ds.keys.replace(/ /g,'').split(',') || [], // Get rid of white space and turn into array OR default to blank array
        placeHolder: ds.placeholder || "Tap to search", // Use placeholder string OR "Tap to search" deafult
    };

    // If there is a valid api string, then create a new autocomplete instance,
    // the closest pre, is to stop the code launching in the pre/code tags on the styleguide
    if (config.api && autoCompleteEle.closest('pre') === null){
        new autoComplete({
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
            placeHolder: config.placeHolder,     // Place Holder text
            selector: '#' + autoCompleteEle.id,  // Input field selector
            threshold: 0, // Min. Chars length to start Engine
            debounce: 300, // Post duration for engine to start
            resultsList: { // Rendered results list object
                render: true, // Render out results
                container: (source) => {
                    const resultsListID = 'results_list' + i; // Set ID to unique
                    source.id = resultsListID; // Set above
                    source.classList.add('wmn-fe-autocomplete__results-list'); // Add correct BEM class to results
                    return resultsListID;
                },
                destination: document.querySelector('#' + autoCompleteEle.id)
            },
            highlight: true, // Highlight matching results
            // Rendered result item
            resultItem: {
                content: (data, source) => {
                    source.classList.add('wmn-fe-autocomplete__result'); // Add correct BEM class to results
                    source.innerHTML = data.match;
                }
            },
            onSelection: feedback => {// Action script onSelection event
                autoCompleteEle.value = feedback.selection.value.name;
            }
        });
    }
});
