const findATimetableJS = () => {
  const findATimetableComponents = document.querySelectorAll('.wmnds-find-a-timetable-widget');
  const toggleOpenClass = e => {
    e.target.closest('.wmnds-find-a-timetable-widget').classList.toggle('wmnds-is--open');
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const queryString = new URLSearchParams(data).toString();
    window.location.href = `https://www.wmnetwork.co.uk/plan-your-journey/timetables/#/?${queryString}`;
  };

  findATimetableComponents.forEach(findATimetableComponent => {
    findATimetableComponent
      .querySelector('div.wmnds-btn.wmnds-btn--mode')
      .addEventListener('click', toggleOpenClass);
    findATimetableComponent
      .querySelector('.wmnds-find-a-timetable-widget__form')
      .addEventListener('submit', onSubmitForm);
  });
};

export default findATimetableJS();
