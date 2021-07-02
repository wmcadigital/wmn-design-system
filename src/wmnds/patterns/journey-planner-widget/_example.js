/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable no-param-reassign */
const journeyPlannerWidgetJS = () => {
  // Constants
  const activeClass = 'wmnds-is--active';
  const loadingClass = 'wmnds-is--loading';
  const openClass = 'wmnds-is--open';
  const axios = require('axios');
  let axiosCancelToken;
  let axiosSource;

  let selectAllMode = true;
  let leaveMode = true;

  let currentWidget;
  let checkAvailableSlotsTimeout;
  let slot;

  const expandWhenArea = e => {
    e.target.parentNode.parentNode.parentNode.classList.add(openClass);
  };
  const expandWidget = e => {
    e.target.closest('.wmnds-journey-planner-widget').classList.add(openClass);
  };

  const expandHowArea = e => {
    const howArea = e.target.parentNode.parentNode.parentNode;
    howArea.classList.add(openClass);
    // guarantees that there are not selected options when the area is expanded
    howArea.querySelectorAll("input[type='checkbox']:checked").forEach(modeInput => {
      modeInput.checked = false;
    });
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
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const startLoading = target => target.parentNode.classList.add(loadingClass);
  const stopLoading = target => target.parentNode.classList.remove(loadingClass);

  const cleanSuggestions = target => {
    const suggestionsList = target.parentNode.parentNode.querySelector(
      '.wmnds-autocomplete-suggestions'
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
    suggestionsList.classList.add('wmnds-autocomplete-suggestions');

    // Add first option that is not part of the API results
    const currentLocationSuggestion = document.createElement('li');
    currentLocationSuggestion.classList.add('wmnds-autocomplete-suggestions__li', 'bg-default');
    currentLocationSuggestion.innerHTML = 'Use current location';
    currentLocationSuggestion.title = 'Use current location';
    currentLocationSuggestion.tabIndex = 0;
    currentLocationSuggestion.ariaPressed = false;
    currentLocationSuggestion.addEventListener('click', updateSelectedLocationToCurrentLocation);
    currentLocationSuggestion.addEventListener('onKeyUp', updateSelectedLocationToCurrentLocation);
    suggestionsList.appendChild(currentLocationSuggestion);

    results.forEach(result => {
      const suggestion = document.createElement('li');
      suggestion.classList.add('wmnds-autocomplete-suggestions__li');
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
        console.log(error);
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

  const toggleMode = e => {
    // in case user clicks over the icon, finds the nearest button element
    const button = e.target.tagName !== 'BUTTON' ? e.target.closest('.wmnds-btn--mode') : e.target;
    const input = button.previousElementSibling;

    // if there is any alternative mode selected at this point, remove it
    const altCheckedInput = button.parentNode.parentNode.querySelector(
      "input[type='radio']:checked"
    );
    if (altCheckedInput) {
      altCheckedInput.checked = false;
      altCheckedInput.nextElementSibling.classList.remove(activeClass);
    }

    // toggle the button
    input.checked = !input.checked;
    button.classList.toggle(activeClass);
  };

  const updateAlternativeOptions = altInputs => {
    let oneAltModeSelected = false;
    altInputs.forEach(altInput => {
      if (altInput.checked) {
        altInput.nextElementSibling.classList.add(activeClass);
        oneAltModeSelected = true;
      } else {
        altInput.nextElementSibling.classList.remove(activeClass);
      }
    });

    if (oneAltModeSelected) {
      // Choosing an alternative travel mode will reset the main travel modes choices
      altInputs[0].parentNode.parentNode
        .querySelectorAll('input[type="checkbox"]:checked')
        .forEach(modeInput => {
          const modeBtn = modeInput.nextElementSibling;
          modeBtn.classList.remove(activeClass);
          modeInput.checked = false;
        });
    }
  };

  const updateRadioInput = e => {
    // in case user clicks over the icon, finds the nearest button element
    const button = e.target.tagName !== 'BUTTON' ? e.target.closest('.wmnds-btn--mode') : e.target;
    const input = button.previousElementSibling;

    // check the clicked option
    input.checked = true;

    // update the alternate modes
    const altInputs = input.parentNode.parentNode.querySelectorAll("input[type='radio']");
    updateAlternativeOptions(altInputs);
  };

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
    const timeSlots = currentWidget.querySelectorAll(
      ".wmnds-fe-dropdown__select[name='SelectedJourneyTime'] option"
    );
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

    // If the selected option is now disabled (in the past), it'll change it to the next slot
    const timeDropdown = currentWidget.querySelector(
      ".wmnds-fe-dropdown__select[name='SelectedJourneyTime']"
    );
    const selectedOption = timeDropdown.options[timeDropdown.selectedIndex];
    if (selectedOption && selectedOption.disabled) {
      timeDropdown.selectedIndex += 1;
      if (timeDropdown.selectedIndex >= timeDropdown.options.length) {
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

  const updateTimeOptions = (parentEl = currentWidget) => {
    const day = parentEl.querySelector(".wmnds-fe-dropdown__select[name='day']").value;
    if (day === 'today') {
      slot = findFirstAvailableSlot();
      disableAllOptionsBeforeNow(slot);
      // Run every minute and check is the first available slot is still the same one.
      // If so, do nothing. If not, disabled the options that are in the past.
      checkAvailableSlotsTimeout = setInterval(checkIfFirstSlotChanged, 60000);
    } else {
      // if day == tomorrow then we want to have all slots enabled
      clearInterval(checkAvailableSlotsTimeout);
      const slots = parentEl.querySelectorAll(
        ".wmnds-fe-dropdown__select[name='SelectedJourneyTime'] option"
      );
      slots.forEach(singleSlot => {
        singleSlot.setAttribute('disabled', false);
      });
    }
  };

  const handleDayChange = e => {
    updateTimeOptions(e.target.parentNode);
  };

  const toggleBetweenLeaveAndArrive = e => {
    const title = e.target.parentElement.nextElementSibling;
    if (title.tagName !== 'H4') return;
    const input = title.nextElementSibling;
    if (leaveMode) {
      e.target.innerHTML = 'Leave time';
      title.innerHTML = 'Arrive';
      title.id = 'arrive';
      input.value = 'Arriving';
    } else {
      e.target.innerHTML = 'Arrival time';
      title.innerHTML = 'Leave';
      title.id = 'leave';
      input.value = 'Leaving';
    }
    leaveMode = !leaveMode;
  };

  const selectAllorSelectNone = e => {
    e.target.parentNode.parentNode.querySelectorAll('input[type="checkbox"]').forEach(modeInput => {
      const modeBtn = modeInput.nextElementSibling;
      if (selectAllMode && !modeInput.classList.contains(activeClass)) {
        modeBtn.classList.add(activeClass);
        modeInput.checked = !modeInput.checked;
      } else if (!selectAllMode && modeInput.classList.contains(activeClass)) {
        modeBtn.classList.remove(activeClass);
        modeInput.checked = !modeInput.checked;
      }
    });
    e.target.innerHTML = selectAllMode ? 'Select None' : 'Select all';
    selectAllMode = !selectAllMode;
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
    const autocompleteElements = currentWidget.querySelectorAll(
      "input[name='Origin'], input[name='Destination']"
    );
    autocompleteElements.forEach(autocompleteElement => {
      if (autocompleteElement.name === 'Origin') {
        autocompleteElement.addEventListener('click', expandWidget);
      }
      autocompleteElement.addEventListener('keyup', debounceAutocomplete);
    });

    // Add event listener to switch from and to values
    const switchBtn = currentWidget.querySelector('.wmnds-journey-planner-widget__switch');
    switchBtn.addEventListener('click', switchFromAndTo);

    // Add event listener to the buttons that expand the "when" and "how" area
    const whenController = currentWidget.querySelector(
      '.wmnds-journey-planner-widget__when--collapsed button'
    );
    const howController = currentWidget.querySelector(
      '.wmnds-journey-planner-widget__how--collapsed button'
    );
    whenController.addEventListener('click', expandWhenArea);
    howController.addEventListener('click', expandHowArea);

    // Update time options based on the day selected and current datetime
    updateTimeOptions();

    // Add event listener to travel day
    const day = currentWidget.querySelector(
      '.wmnds-journey-planner-widget__when .wmnds-fe-dropdown__select[name="day"]'
    );
    day.addEventListener('change', handleDayChange);

    // Add even listener to controllers inside "when" area - change arrive / leave
    const whenControllerButton = currentWidget.querySelector(
      '.wmnds-journey-planner-widget__when-controller button'
    );
    whenControllerButton.addEventListener('click', toggleBetweenLeaveAndArrive);

    // Add even listener to controllers inside "how" area - select all
    const howControllerButton = currentWidget.querySelector(
      '.wmnds-journey-planner-widget__how-controller button'
    );
    howControllerButton.addEventListener('click', selectAllorSelectNone);

    // Add event listeners to the main travel mode buttons: bus, train and tram
    const mainTravelModeInputs = currentWidget.querySelectorAll(
      '.wmnds-journey-planner-widget__how input[type="checkbox"]'
    );
    mainTravelModeInputs.forEach(travelModeInput =>
      // travelModeInput.addEventListener('change', updateMainModeOptions);
      travelModeInput.nextElementSibling.addEventListener('click', toggleMode)
    );

    // Add event listeners to the alternative travel mode buttons: walk and cycle
    const altTravelModeInputs = currentWidget.querySelectorAll(
      '.wmnds-journey-planner-widget__how input[type="radio"]'
    );
    altTravelModeInputs.forEach(altTravelModeInput => {
      altTravelModeInput.nextElementSibling.addEventListener('click', updateRadioInput);
    });
  };

  const widgets = document.querySelectorAll('.wmnds-journey-planner-widget');
  widgets.forEach(widget => {
    currentWidget = widget;
    init();
  });
};

export default journeyPlannerWidgetJS;
