const findATimetableJS = () => {
  const findATimetableComponents = document.querySelectorAll('.wmnds-find-a-timetable-widget');
  const toggleOpenClass = e => {
    e.target.closest('.wmnds-find-a-timetable-widget').classList.toggle('wmnds-is--open');
  };

  findATimetableComponents.forEach(findATimetableComponent => {
    findATimetableComponent
      .querySelector('div.wmnds-btn.wmnds-btn--mode')
      .addEventListener('click', toggleOpenClass);
  });
};

export default findATimetableJS();
