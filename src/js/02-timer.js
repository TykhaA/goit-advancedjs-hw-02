import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const start = document.querySelector('button[data-start]'),
  day = document.querySelector('.value[data-days]'),
  hour = document.querySelector('.value[data-hours]'),
  minute = document.querySelector('.value[data-minutes]'),
  second = document.querySelector('.value[data-seconds]');

start.disabled = true;
let selectedDate = null;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0];
        chooseDate();

    },
};
iziToast.settings({
    timeout: 3000, 
    resetOnHover: true,
    transitionIn: 'flipInX',
    backgroundColor: 'red',
    titleColor: '#fff',
    position: 'topRight'
 });

flatpickr("#datetime-picker", options);
function chooseDate() {
    const currentDate = Date.parse(new Date());
   
    if (Date.parse(selectedDate) < currentDate) {
        iziToast.show({
            title: 'Please choose a date in the future.',
            
        });
    } else {
        start.disabled = false;
    }
}
start.addEventListener('click', handleStart);
function deadline() {
    return Date.parse(selectedDate) - Date.parse(new Date());
}
function handleStart() {
    const setinterval = setInterval(updateTimer, 1000);
    start.disabled = true;
    function updateTimer() {
        const dateDeadline = deadline()
        const { days, hours, minutes, seconds } = convertMs(dateDeadline);
        if (dateDeadline <= 0) {
            day.innerHTML =  '00';
            hour.innerHTML = '00';
            minute.innerHTML = '00';
            second.innerHTML = '00';
            clearInterval(setinterval);
            return
        }
        day.innerHTML =  addLeadingZero(days);
        hour.innerHTML = addLeadingZero(hours);
        minute.innerHTML = addLeadingZero(minutes);
        second.innerHTML = addLeadingZero(seconds);
    }
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}
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