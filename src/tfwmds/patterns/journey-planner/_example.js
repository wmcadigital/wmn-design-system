/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable no-param-reassign */
import axios from 'axios';

const journeyPlannerJS = () => {
  // Constants
  const loadingClass = 'tfwmds-is--loading';
  const openClass = 'tfwmds-is--open';

  let axiosCancelToken;
  let axiosSource;

  let currentComponent;
  let checkAvailableSlotsTimeout;
  let slot;

  const validateBeforeSubmit = e => {
    const bus = document.forms.jphome.useBus.checked;
    const train = document.forms.jphome.useTrain.checked;
    const tram = document.forms.jphome.useTram.checked;

    if (!bus && !train && !tram) {
      document.forms.jphome.useBus.checked = true;
      document.forms.jphome.useTrain.checked = true;
      document.forms.jphome.useTram.checked = true;
    }
  };

  const expandComponent = e => {
    e.target.closest('.tfwmds-journey-planner').classList.toggle(openClass);
    e.target.closest('.tfwmds-journey-planner__submit').classList.toggle('tfwmds-m-t-lg');
    const button = e.target.tagName === 'BUTTON' ? e.target : e.target.closest('button');
    if (button.innerText === 'Add details') {
      button.innerHTML = `
          Hide details
          <svg class="tfwmds-btn__icon tfwmds-btn__icon--right">
            <use xlink:href="#tfwmds-general-minimise" href="#tfwmds-general-minimise"></use>
          </svg>`;
    } else {
      button.innerHTML = `
          Add details
          <svg class="tfwmds-btn__icon tfwmds-btn__icon--right">
            <use xlink:href="#tfwmds-general-expand" href="#tfwmds-general-expand"></use>
          </svg>`;
    }
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  const debounce = (func, wait, immediate) => {
    let timeout;
    // eslint-disable-next-line func-names
    return function (...args) {
      // eslint-disable-next-line func-names
      const later = function () {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  };

  const updateSelectedLocation = e => {
    const input = e.target.parentElement.parentElement.querySelector('input');
    input.value = e.target.title;
    // Remove suggestions
    e.target.parentNode.remove();
  };

  const updateSelectedLocationToCurrentLocation = e => {
    const showPosition = position => {
      const input = e.target.parentElement.parentElement.querySelector('input');
      input.value = `${position.coords.latitude},${position.coords.longitude}`;
      // Remove suggestions
      e.target.parentNode.remove();
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      // eslint-disable-next-line no-console
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const startLoading = target => target.parentNode.classList.add(loadingClass);
  const stopLoading = target => target.parentNode.classList.remove(loadingClass);

  const cleanSuggestions = target => {
    const suggestionsList = target.parentNode.parentNode.querySelector(
      '.tfwmds-autocomplete-suggestions'
    );
    if (suggestionsList) {
      suggestionsList.remove();
    }
  };

  const addAutocompleteSuggestions = (element, results) => {
    // Remove suggestions if they exist
    cleanSuggestions(element);

    // Create a new list element
    const suggestionsList = document.createElement('ul');
    suggestionsList.classList.add('tfwmds-autocomplete-suggestions');

    // Add first option that is not part of the API results
    const currentLocationSuggestion = document.createElement('li');
    currentLocationSuggestion.classList.add('tfwmds-autocomplete-suggestions__li', 'bg-default');
    currentLocationSuggestion.innerHTML = 'Use current location';
    currentLocationSuggestion.title = 'Use current location';
    currentLocationSuggestion.tabIndex = 0;
    currentLocationSuggestion.ariaPressed = false;
    currentLocationSuggestion.addEventListener('click', updateSelectedLocationToCurrentLocation);
    currentLocationSuggestion.addEventListener('onKeyUp', updateSelectedLocationToCurrentLocation);
    suggestionsList.appendChild(currentLocationSuggestion);

    results.forEach(result => {
      const suggestion = document.createElement('li');
      suggestion.classList.add('tfwmds-autocomplete-suggestions__li');
      suggestion.innerHTML = result.address;
      suggestion.title = result.address;
      suggestion.tabIndex = 0;
      suggestion.ariaPressed = false;
      suggestion.addEventListener('click', updateSelectedLocation);
      suggestion.addEventListener('onKeyUp', updateSelectedLocation);

      // Append the sugestion that we just created and edited to the list
      suggestionsList.appendChild(suggestion);
    });
    // Stop the loading spinner
    stopLoading(element);
    // Display the results
    element.parentNode.parentNode.append(suggestionsList);
  };

  const getRequestFromAPI = (url, APIKey, element) => {
    axios
      .get(url, {
        headers: {
          'Ocp-Apim-Subscription-Key': APIKey
        },
        cancelToken: axiosSource.token
      })
      .then(function handleSuccess(response) {
        addAutocompleteSuggestions(element, response.data.candidates);
      })
      .catch(function handleError(error) {
        stopLoading(element);
      })
      .then(function handleAnyState() {
        // always executed
      });
  };

  const shouldKeyEventTriggerAutocomplete = keyboardEvent => {
    const { key } = keyboardEvent;
    if (!key || key.length > 1) return false;
    const regex = new RegExp('[a-zA-Z0-9]', 'g'); // check if alphanumeric
    return regex.test(key);
  };

  const refreshCancelToken = () => {
    if (axiosSource) axiosSource.cancel();
    axiosCancelToken = axios.CancelToken;
    axiosSource = axiosCancelToken.source();
  };

  const autocomplete = e => {
    // activates the loading spin
    startLoading(e.target);

    // treat input value as it was part of an url eg:	b1+2aa
    const query = e.target.value;
    if (!query.trim() && !shouldKeyEventTriggerAutocomplete(e)) {
      cleanSuggestions(e.target);
      stopLoading(e.target);
      return;
    }

    refreshCancelToken();
    const key = encodeURI(query);
    const APIKey = 'e0c1216f818a41be8d528ac1d4f7ebfd';
    const url = `https://wmca-api-portal-staging.azure-api.net/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?singleLine=${key}&f=pjson`;

    // hit the API to get the results
    getRequestFromAPI(url, APIKey, e.target);
  };

  const debounceAutocomplete = debounce(autocomplete, 600);

  const checkAndUpdateFormat = val => {
    if (val < 10) {
      return `0${val}`;
    }
    return val;
  };

  const findFirstAvailableSlot = () => {
    // Find the first slot available
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    if (parseInt(m, 10) >= 45) {
      h += 1;
      m = 0;
    } else {
      m = (Math.ceil(m / 15) * 15) % 60;
    }
    const timeslot = `${h}:${checkAndUpdateFormat(m)}`;
    return timeslot;
  };

  const disableAllOptionsBeforeNow = firstAvailableSlot => {
    let timeSlots;
    if (currentComponent.classList.contains('tfwmds-journey-planner__when')) {
      timeSlots = currentComponent.querySelectorAll(
        ".tfwmds-fe-dropdown__select[name='SelectedJourneyTime'] option"
      );
    } else {
      timeSlots = currentComponent
        .closest('.tfwmds-journey-planner')
        .querySelectorAll(
          ".tfwmds-journey-planner__when .tfwmds-fe-dropdown__select[name='SelectedJourneyTime'] option"
        );
    }

    // Disable all the slots that preceeds the first available slot and mark as select the next available slot
    let isAvailable = false;
    timeSlots.forEach(timeSlot => {
      if (isAvailable) {
        return;
      }
      if (timeSlot.value === firstAvailableSlot) {
        timeSlot.selected = 'selected';
        isAvailable = true;
        return;
      }
      timeSlot.disabled = 'disabled';
    });

    // If the selected option is now disabled (in the past), it'll change it to "now" (first option)
    const timeDropdown = currentComponent.querySelector(
      ".tfwmds-fe-dropdown__select[name='SelectedJourneyTime']"
    );

    const selectedOption = timeDropdown.options[timeDropdown.selectedIndex];
    if (selectedOption && selectedOption.disabled) {
      timeDropdown.selectedIndex += 1;
      if (timeDropdown.selectedIndex > timeDropdown.options.length) {
        timeDropdown.selectedIndex = 0;
      }
    }
  };

  const checkIfFirstSlotChanged = () => {
    // Run every minute and check is the first available slot is still the same one.
    // If so, do nothing. If not, disabled the options that are in the past.
    const newSlot = findFirstAvailableSlot();
    if (newSlot !== slot) {
      disableAllOptionsBeforeNow(newSlot);
      slot = newSlot;
    }
  };

  const updateTimeOptions = (component = currentComponent) => {
    const day = component.querySelector(".tfwmds-fe-dropdown__select[name='day']").value;
    if (day === 'today') {
      slot = findFirstAvailableSlot();
      disableAllOptionsBeforeNow(slot);
      // Run every minute and check is the first available slot is still the same one.
      // If so, do nothing. If not, disabled the options that are in the past.
      checkAvailableSlotsTimeout = setInterval(checkIfFirstSlotChanged, 60000);
    } else {
      // if day == tomorrow then we want to have all slots enabled
      clearInterval(checkAvailableSlotsTimeout);
      let slots;
      if (component.classList.contains('tfwmds-journey-planner__when')) {
        slots = component.querySelectorAll(
          ".tfwmds-fe-dropdown__select[name='SelectedJourneyTime'] option"
        );
      } else {
        slots = component
          .closest('.tfwmds-journey-planner__when')
          .querySelectorAll(".tfwmds-fe-dropdown__select[name='SelectedJourneyTime'] option");
      }

      // Enable all the slots
      slots.forEach(singleSlot => {
        singleSlot.disabled = false;
      });
    }
  };

  const handleDayChange = e => {
    updateTimeOptions(e.target.parentNode);
  };

  const switchFromAndTo = e => {
    const inputs = e.target.parentNode.parentNode.parentNode.querySelectorAll(
      "input[name='Origin'], input[name='Destination']"
    );
    const a = inputs[0].value;
    const b = inputs[1].value;
    [inputs[0].value, inputs[1].value] = [b, a];
  };

  const init = () => {
    // Add event listener to the autocomplete fields
    const autocompleteElements = currentComponent.querySelectorAll(
      "input[name='Origin'], input[name='Destination']"
    );
    autocompleteElements.forEach(autocompleteElement => {
      autocompleteElement.addEventListener('keyup', debounceAutocomplete);
    });

    // Add event listener to switch from and to values
    const switchBtn = currentComponent.querySelector('.tfwmds-journey-planner__switch');
    switchBtn.addEventListener('click', switchFromAndTo);

    // Update time options based on the day selected and current datetime
    updateTimeOptions(currentComponent.querySelector('.tfwmds-journey-planner__when'));

    // Add event listener to travel day
    const day = currentComponent.querySelector(
      '.tfwmds-journey-planner__when .tfwmds-fe-dropdown__select[name="day"]'
    );
    day.addEventListener('change', handleDayChange);

    // Add event listener to add details button - the first one
    const addDetailsBtn = currentComponent.querySelector(
      '.tfwmds-journey-planner__submit button.tfwmds-btn'
    );
    addDetailsBtn.addEventListener('click', expandComponent);

    // Add event listener to submit button
    currentComponent
      .querySelector('.tfwmds-journey-planner__form')
      .addEventListener('submit', validateBeforeSubmit);
  };

  const components = document.querySelectorAll('.tfwmds-journey-planner');
  components.forEach(component => {
    currentComponent = component;
    init();
  });
};

export default journeyPlannerJS;
