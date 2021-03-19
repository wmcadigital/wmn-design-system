const feedbackLoopJS = () => {
  const feedbackLoops = document.querySelectorAll('.wmnds-feedback-loop');

  const sendFeedback = data => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const nodeListToArray = nodeList => Array.prototype.slice.call(nodeList);

  const parseFormData = (form, selector) => {
    const formData = {};
    // Add data from DOM
    formData.contentPath = document.location.pathname;
    // Add data from form fields
    const formFields = nodeListToArray(form.querySelectorAll(selector));
    formFields.forEach(field => {
      if (!field.value) return;
      if (field.type === 'radio' && !field.checked) return;
      formData[field.name] = field.value;
    });
    return formData;
  };

  const sendPageUsefulFeedback = (form, selector, isPageUseful) => {
    const formData = parseFormData(form, selector);
    formData.contentHelpful = isPageUseful;
    sendFeedback(formData);
  };

  const sendSomethingWrongFeedback = (form, selector) => {
    const formData = parseFormData(form, selector);
    formData.contentWrong = true;
    sendFeedback(formData);
  };

  // Set up all the feedback loops
  feedbackLoops.forEach(feedbackLoop => {
    const somethingWrongBtn = feedbackLoop.querySelector('.wmnds-feedback-loop__wrong > button');
    const closeBtn = feedbackLoop.querySelector('.wmnds-feedback-loop__form legend + button');
    const pageUsefulRef = feedbackLoop.querySelector('.wmnds-feedback-loop__useful');
    const contentWrongRef = feedbackLoop.querySelector('.wmnds-feedback-loop__form');

    // Form functions
    const toggleFeedbackForm = event => {
      event.preventDefault();
      feedbackLoop.classList.toggle('wmnds-is-open');
    };

    const submitFeedbackForm = event => {
      event.preventDefault();
      // Check which type of submit we should do
      const isPageUselfulSubmit = pageUsefulRef.contains(event.submitter);
      const isContentWrongSubmit = contentWrongRef.contains(event.submitter);
      // Submit the appropriate data
      if (isPageUselfulSubmit && !isContentWrongSubmit) {
        sendPageUsefulFeedback(feedbackLoop, 'input[type="hidden"]', event.submitter.textContent);
      } else {
        sendSomethingWrongFeedback(feedbackLoop, 'textarea, input');
      }
    };

    // Attach form event listeners
    somethingWrongBtn.addEventListener('click', toggleFeedbackForm);
    closeBtn.addEventListener('click', toggleFeedbackForm);
    feedbackLoop.addEventListener('submit', submitFeedbackForm);
  });
};

export default feedbackLoopJS;
