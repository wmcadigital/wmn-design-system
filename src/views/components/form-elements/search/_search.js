const autoCompleteInputs = document.querySelectorAll(".fe-autocomplete__input");

autoCompleteInputs.forEach((autoCompleteEle, i) => {

    console.log(autoCompleteEle);

    autoCompleteInputs[i].id = 'js-autoComplete-' + id;

    const ds = autoCompleteEle.dataset;
    const config = {
        api: ds.api || null,
        placeHolder: ds.placeholder || "Tap to search",
    };

    new autoComplete({
        data: { // Data src [Array, Function, Async] | (REQUIRED)
          src: async () => {
              if(config.api){
                  const source = await fetch(config.api); // Fetch External Data Source
                  const data = await source.json(); // Format data into JSON
                  return data; // Return Fetched data
              }else{
                  return false; // Return nothing (fail silently)
              }
          },
          key: ["name"],
          cache: true
        },
        placeHolder: config.placeHolder,     // Place Holder text                 | (Optional)
        selector: '#autComplete',           // Input field selector              | (Optional)
        threshold: 3,                        // Min. Chars length to start Engine | (Optional)
        debounce: 300,                       // Post duration for engine to start | (Optional)
        searchEngine: "strict",              // Search Engine type/mode           | (Optional)
        resultsList: {                       // Rendered results list object      | (Optional)
            render: true,
            container: source => {
                const resultsListID = "results_list";
                return resultsListID;
            },
            destination: document.querySelector("#autoComplete"),
            position: "afterend",
            element: "ul"
        },
        maxResults: 5,                         // Max. number of rendered results | (Optional)
        highlight: true,                       // Highlight matching results      | (Optional)
        resultItem: {                          // Rendered result item            | (Optional)
            content: (data, source) => {
                source.innerHTML = data.match;
            },
            element: "li"
        },
        onSelection: feedback => {             // Action script onSelection event | (Optional)
            autoCompleteEle.value = feedback.selection.value.name;
            console.log(feedback);
        }
    });
});
