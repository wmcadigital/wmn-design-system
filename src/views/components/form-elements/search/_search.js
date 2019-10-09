const autoCompleteInputs = document.querySelectorAll(".fe-autocomplete__input");

autoCompleteInputs.forEach(autoCompleteEle => {
    new autoComplete({
        data: {                              // Data src [Array, Function, Async] | (REQUIRED)
          src: async () => {
            // User search query
            autoCompleteEle.value;
            // Fetch External Data Source
            const source = await fetch(`https://jsonplaceholder.typicode.com/users`);
            // Format data into JSON
            const data = await source.json();
            // Return Fetched data
            console.log(data);
            return data;
          },
          key: ["name"],
          cache: true
        },
        sort: (a, b) => {                    // Sort rendered results ascendingly | (Optional)
            if (a.match < b.match) return -1;
            if (a.match > b.match) return 1;
            return 0;
        },
        placeHolder: "Tap to search",     // Place Holder text                 | (Optional)
        selector: "#autoComplete",           // Input field selector              | (Optional)
        threshold: 2,                        // Min. Chars length to start Engine | (Optional)
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
