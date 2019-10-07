window.addEventListener('load', () => {
    // Add a keyup event listener to our input element
    const name_input = document.getElementById('myInput');
    name_input.addEventListener('keyup', (event) => { hinter(event); });

    // create one global XHR object
    // so we can abort old requests when a new one is make
    window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {

    // retireve the input element
    const input = event.target;

    // retrieve the datalist element
    const huge_list = document.getElementById('huge_list');

    // minimum number of characters before we start to generate suggestions
    const min_characters = 0;

    if (input.value.length < min_characters) {
        return;
    }

    // abort any pending requests
    window.hinterXHR.abort();

    window.hinterXHR.onreadystatechange = () => {
        if (this.readyState === 4 && this.status === 200) {
            // We're expecting a json response so we convert it to an object
            const response = JSON.parse(this.responseText);

            // clear any previously loaded options in the datalist
            huge_list.innerHTML = '';

            response.forEach((item) => {
                // Create a new <option> element.
                const option = document.createElement('option');
                option.value = item;

                // attach the option to the datalist element
                huge_list.appendChild(option);
            });
        }
    };

    window.hinterXHR.open('GET', '//static.centro.org.uk/assets/nwm/feeds/journeyplanner_options_stateless.json', true);
    window.hinterXHR.send();
}
