const feedbackLoopJS = () => {
  // CONSTANTS
  const feedbackLoopClass = 'wmnds-feedback-loop';
  const isOpenClass = 'wmnds-is--open';
  const isSentClass = 'wmnds-is--sent';

  const formGroupClass = 'wmnds-fe-group';
  const formInputClass = 'wmnds-fe-input';
  const formCheckBoxesClass = 'wmnds-fe-checkboxes';
  const formTextareaClass = 'wmnds-fe-textarea';
  const formGroupErrorClass = `${formGroupClass}--error`;
  const inputErrorClass = `${formInputClass}--error`;
  const errorMessageClass = 'wmnds-fe-error-message';

  // Helper functions
  const nodeListToArray = nodeList => Array.prototype.slice.call(nodeList);
  const createErrorMessage = textContet => {
    const element = document.createElement('span');
    element.classList.add(errorMessageClass);
    element.textContent = textContet;
    return element;
  };

  // Form submission functions
  const sendFeedback = data => {
    // Send data
    const url =
      'https://prod-10.uksouth.logic.azure.com/workflows/8bf9c75f399246de96cf505a1331e738/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=qSXrjDmMgHoPORSob4-uqonyJyF8mB8addKURnOhL1E';

    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.text();
      })
      .then(text => {
        // eslint-disable-next-line no-console
        console.log(text);
      });
  };

  const parseFormData = nodeList => {
    const formData = {};
    // Add data from DOM
    formData.contentPath = document.location.pathname;
    // Add data from form fields
    const formFields = nodeListToArray(nodeList);
    formFields.forEach(field => {
      if (!field.value) return;
      if (field.type === 'checkbox') return;
      if (field.type === 'radio' && !field.checked) return;
      formData[field.name] = field.value;
    });
    return formData;
  };

  const sendPageUsefulFeedback = (inputElements, isPageUseful) => {
    const formData = parseFormData(inputElements);
    formData.contentHelpful = isPageUseful;
    sendFeedback(formData);
  };

  const sendSomethingWrongFeedback = inputElements => {
    const formData = parseFormData(inputElements);
    sendFeedback(formData);
  };

  // Form validation functions
  const getFormGroupToValidate = form => {
    const formGroups = nodeListToArray(form.querySelectorAll(`.${formGroupClass}`));
    const filterFunc = group => group.querySelectorAll('[required="true"]').length;
    const formGroupsToValidate = formGroups.filter(filterFunc);
    return formGroupsToValidate;
  };

  const showErrorState = (formGroup, type) => {
    if (formGroup.classList.contains(formGroupErrorClass)) return;
    formGroup.classList.add(formGroupErrorClass);

    switch (type) {
      case 'checkbox': {
        const container = formGroup.querySelector(`.${formCheckBoxesClass}`);
        const errorMsg = createErrorMessage('This field is requierd');
        container.prepend(errorMsg);
        break;
      }

      case 'textarea': {
        const textareaElement = formGroup.querySelector(`.${formTextareaClass}`);
        const { parentElement } = textareaElement;
        const errorMsg = createErrorMessage('This field is required');
        textareaElement.classList.add(inputErrorClass);
        parentElement.insertBefore(errorMsg, textareaElement);
        break;
      }

      case 'text': {
        const inputElement = formGroup.querySelector(`.${formInputClass}`);
        const { parentElement } = inputElement;
        const errorMsg = createErrorMessage('This field is required');
        inputElement.classList.add(inputErrorClass);
        parentElement.insertBefore(errorMsg, inputElement);
        break;
      }

      default:
        break;
    }
  };

  const clearErrorState = formGroup => {
    formGroup.classList.remove(formGroupErrorClass);
    // Remove error messages
    const errorMsg = formGroup.querySelector(`.${errorMessageClass}`);
    if (errorMsg) errorMsg.remove();
    // Remove error classes
    const erroredInputs = formGroup.querySelectorAll(`.${inputErrorClass}`);
    erroredInputs.forEach(input => input.classList.remove(inputErrorClass));
  };

  const addValidationEvents = form => {
    const formGroups = getFormGroupToValidate(form);
    // Loop through and add invalid validation
    formGroups.forEach(group => {
      const formElements = group.querySelectorAll('[required="true"]');
      formElements.forEach(element => {
        element.addEventListener('input', () => clearErrorState(group));
        element.addEventListener('invalid', event => {
          event.preventDefault();
          showErrorState(group, element.type);
        });
      });
    });
  };

  // Set up all the feedback loops
  const feedbackLoops = document.querySelectorAll(`.${feedbackLoopClass}`);
  feedbackLoops.forEach(feedbackLoop => {
    const somethingWrongBtn = feedbackLoop.querySelector(`.${feedbackLoopClass}__wrong > button`);
    const closeBtn = feedbackLoop.querySelector(`.${feedbackLoopClass}__form legend + button`);
    const questionsRef = feedbackLoop.querySelector(`.${feedbackLoopClass}__questions`);
    const contentWrongFormRef = feedbackLoop.querySelector(`.${feedbackLoopClass}__form`);
    const pageUsefulRef = feedbackLoop.querySelector(`.${feedbackLoopClass}__useful`);
    const pageUsefulBtns = nodeListToArray(pageUsefulRef.querySelectorAll('button'));

    // Form functions
    const clearFormErrors = () => {
      const formGroups = nodeListToArray(
        contentWrongFormRef.querySelectorAll(`.${formGroupClass}`)
      );
      formGroups.forEach(group => clearErrorState(group));
    };

    const toggleFeedbackForm = (event = false) => {
      if (event) event.preventDefault();
      feedbackLoop.classList.toggle(isOpenClass);
      clearFormErrors();
    };

    const submitIsPageUseful = event => {
      const inputElements = feedbackLoop.querySelectorAll('[type="hidden"]');
      sendPageUsefulFeedback(inputElements, event.target.textContent);
      pageUsefulRef.classList.add(isSentClass);
    };

    const submitContentWrongForm = event => {
      event.preventDefault();
      const inputElements = feedbackLoop.querySelectorAll('textarea, input');
      sendSomethingWrongFeedback(inputElements);
      questionsRef.classList.add(isSentClass);
      toggleFeedbackForm();
    };

    // Attach form event listeners
    somethingWrongBtn.addEventListener('click', toggleFeedbackForm);
    closeBtn.addEventListener('click', toggleFeedbackForm);
    addValidationEvents(contentWrongFormRef);
    pageUsefulBtns.forEach(btn => btn.addEventListener('click', submitIsPageUseful));
    contentWrongFormRef.addEventListener('submit', submitContentWrongForm);
  });
};

export default feedbackLoopJS;
