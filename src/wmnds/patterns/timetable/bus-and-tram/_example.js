/* eslint-disable no-param-reassign */
const timetableJS = () => {
  const timetables = document.querySelectorAll('.wmnds-timetable');
  const handleTimetable = () => {
    timetables.forEach(timetable => {
      const timetableTimes = timetable.querySelectorAll('.wmnds-timetable__time');
      timetableTimes.forEach(time => {
        const timeDetails = time.querySelector('.wmnds-timetable__time-details');
        const contentHeight = time.querySelector(
          '.wmnds-timetable__time-details-content'
        ).offsetHeight;
        timeDetails.style.height = `${contentHeight}px`;

        time.querySelector('.wmnds-timetable__time-close').addEventListener('click', () => {
          time.querySelector('.wmnds-timetable__time-toggle').classList.remove('wmnds-is--active');
        });
      });

      const timeToggles = timetable.querySelectorAll('.wmnds-timetable__time-toggle');
      timeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
          timeToggles.forEach(b => {
            b.classList.remove('wmnds-is--active');
          });
          toggle.classList.toggle('wmnds-is--active');
        });
      });
    });
  };

  handleTimetable();
  window.addEventListener('resize', handleTimetable);
};

export default timetableJS;
