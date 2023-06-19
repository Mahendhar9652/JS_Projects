var timeDisplay = document.querySelector('.time');
var display = document.getElementById('display');
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let currentDate = new Date();
var Day = '';
var date = '';
var month = '';
var year = '';
var hours = '';
var minutes = '';
var seconds = '';
let deadLineDateObject = new Date();
let deadLineDate = '';
let deadLineDay = '';
let deadLineMonth = '';
let deadLineYear = '';
let deadLineHours = '';
let deadLineMinutes = '';
let deadLineSeconds = '';

function CurrentateAndTime() {
  currentDate = new Date();
  Day = days[currentDate.getDay() - 1];
  date = currentDate.getDate();
  month = months[currentDate.getMonth()];
  year = currentDate.getFullYear();
  hours = currentDate.getHours();
  minutes = currentDate.getMinutes();
  seconds = currentDate.getSeconds();
}

function formatNumberWithLeadingZero(number) {
  return number.toString().padStart(2, '0');
}

function deadLineDateAndTime() {
  deadLineDateObject.setDate(currentDate.getDate() + 10);
  deadLineDate = deadLineDateObject.getDate();
  deadLineDay = days[deadLineDateObject.getDay()];
  deadLineMonth = months[deadLineDateObject.getMonth()];
  deadLineYear = deadLineDateObject.getFullYear();
  deadLineHours = deadLineDateObject.getHours();
  deadLineMinutes = deadLineDateObject.getMinutes();
  deadLineSeconds = deadLineDateObject.getSeconds();

  // Convert hours to 12-hour format
  let amPm = deadLineHours >= 12 ? 'PM' : 'AM';
  deadLineHours = deadLineHours % 12 || 12;
  timeDisplay.innerText = deadLineDay + ", " + deadLineDate + " " + deadLineMonth + " " + deadLineYear + " " + deadLineHours + ":" + formatNumberWithLeadingZero(deadLineMinutes) + " " + amPm;

  // Calculate the remaining time
  let remainingDays = deadLineDate - date;
  let remainingHours = deadLineHours - hours;
  let remainingMinutes = deadLineMinutes - minutes;
  let remainingSeconds = deadLineSeconds - seconds;

  // Adjust negative values for minutes and seconds
  if (remainingMinutes < 0) {
    remainingHours--;
    remainingMinutes += 60;
  }
  if (remainingSeconds < 0) {
    remainingMinutes--;
    remainingSeconds += 60;
  }

  // Adjust negative values for hours and days
  if (remainingHours < 0) {
    remainingDays--;
    remainingHours += 24;
  }
  if (remainingDays < 0) {
    remainingDays += 7;
  }

  // Format numbers with leading zeros
  remainingDays = formatNumberWithLeadingZero(remainingDays);
  remainingHours = formatNumberWithLeadingZero(remainingHours);
  remainingMinutes = formatNumberWithLeadingZero(remainingMinutes);
  remainingSeconds = formatNumberWithLeadingZero(remainingSeconds);

  display.innerHTML = `
    <p>${remainingDays} DAYS</p>
    <p>${remainingHours} HOURS</p>
    <p>${remainingMinutes} MINS</p>
    <p>${remainingSeconds} SECS</p>
  `;
}

setInterval(() => {
  CurrentateAndTime();
  deadLineDateAndTime();
}, 1000);
