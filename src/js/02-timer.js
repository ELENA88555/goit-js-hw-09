import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

let selectedTime = null;

const refs = {
  inputDate: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.startBtn.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days =  addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours =  addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes =  addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds =  addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: Date.now(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] <= Date.now()) {
        refs.startBtn.disabled = true;
        Notify.failure('Please choose a date in the future');
        selectedDates[0] = new Date();
      } else {
        refs.startBtn.disabled = false;
        selectedTime = selectedDates[0];
      }
    },
  };



class Timer {
  constructor() {
  this.isActiv = false,
  this.intervalId = null
  }
  start(){
    if(this.isActiv){
      return;
    }
    this.isActiv = true
    this.intervalId = setInterval(()=> {
const currentTime = Date.now()
const deltaTime = selectedTime - currentTime 
const timeComponents = convertMs(deltaTime) 
updateTimer(timeComponents)

if(deltaTime <= 0){
  this.stop()
}
    },  1000)

  }

  stop() {
    clearInterval(this.intervalId)
    this.isActiv = false
    refs.startBtn.disabled = true;
    refs.days.textContent = `00`;
    refs.hours.textContent =` 00`;
    refs.minutes.textContent =` 00`;
    refs.seconds.textContent = `00`;
  }


}

 function updateTimer({ days, hours, minutes, seconds }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
  }


flatpickr(refs.inputDate, options);
const timer = new Timer();
refs.startBtn.addEventListener('click', () => {
  timer.start()
})
