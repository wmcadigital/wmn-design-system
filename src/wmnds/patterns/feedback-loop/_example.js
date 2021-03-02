const feedbackLoopJS = () => {
  const feedbackLoops = document.querySelectorAll('.wmnds-feedback-loop');

  feedbackLoops.forEach(feedbackLoop => {
    const somethingWrongBtn = feedbackLoop.querySelector('.wmnds-feedback-loop__wrong button');
    const closeBtn = feedbackLoop.querySelector('.wmnds-feedback-loop__form legend + button');

    const toggleFeedbackForm = event => {
      event.preventDefault();
      feedbackLoop.classList.toggle('wmnds-is-open');
    };

    somethingWrongBtn.addEventListener('click', toggleFeedbackForm);
    closeBtn.addEventListener('click', toggleFeedbackForm);
  });
};

export default feedbackLoopJS;
