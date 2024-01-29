import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
let userSelectedDate;

const activeButton = document.querySelector('[data-start]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      activeButton.disabled = true;
      window.alert(`Choose the date in future`);
      return;
    } else {
      userSelectedDate = selectedDate;
      activeButton.disabled = false;
    }
  },
};

const datetimePicker = flatpickr('#datetime-picker', options);

activeButton.addEventListener('click', () => {
  setInterval(() => {
    const current = Date.now();
    const diff = userSelectedDate - current;
    const timeObj = convertMs(diff);
    updateTimerElement(timeObj);
  }, 1000);
});
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function updateTimerElement(timeObj) {
  document.querySelector('[data-days]').textContent = addLeadingZero(
    timeObj.days
  );
  document.querySelector('[data-hours]').textContent = addLeadingZero(
    timeObj.hours
  );
  document.querySelector('[data-minutes]').textContent = addLeadingZero(
    timeObj.minutes
  );
  document.querySelector('[data-seconds]').textContent = addLeadingZero(
    timeObj.seconds
  );
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
