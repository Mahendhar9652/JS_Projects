var timeDisplay = document.querySelector('.time');
var display = document.getElementById('display');

// Define arrays for days and months
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Initialize variables for current date and time
var currentDate = new Date();

// Initialize variables for deadline date and time
let deadLineDateObject = new Date();
let deadLineDate = '';
let deadLineDay = '';
let deadLineMonth = '';
let deadLineYear = '';
let deadLineHours = '';
let deadLineMinutes = '';
let deadLineSeconds = '';

// Calculate the deadline date
deadLineDateObject.setDate(currentDate.getDate() + 10);

// Function to calculate the deadline date and time
function calculateDeadlineDateAndTime() {
  currentDate = new Date(); // Update the current date and time

  // Convert hours to 12-hour format
  let amPm = currentDate.getHours() >= 12 ? 'PM' : 'AM';
  let hours = currentDate.getHours() % 12 || 12;

  // Update the time display with the current date and time
  timeDisplay.innerText = days[deadLineDateObject.getDay()] + ", " + deadLineDateObject.getDate() + " " + months[deadLineDateObject.getMonth()] + " " + deadLineDateObject.getFullYear() + " " +deadLineDateObject.getHours() + ":" + deadLineDateObject.getMinutes() +" "+ amPm;

  // Calculate the remaining time
  let remainingTime = deadLineDateObject.getTime() - currentDate.getTime();
  let remainingSeconds = Math.floor(remainingTime / 1000) % 60;
  let remainingMinutes = Math.floor(remainingTime / (1000 * 60)) % 60;
  let remainingHours = Math.floor(remainingTime / (1000 * 60 * 60)) % 24;
  let remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

  // display with the remaining time
  display.innerHTML = `
    <p>${remainingDays} DAYS</p>
    <p>${remainingHours} HOURS</p>
    <p>${remainingMinutes} MINS</p>
    <p>${remainingSeconds} SECS</p>
  `;
}

// Call the calculateDeadlineDateAndTime function initially to display the countdown
calculateDeadlineDateAndTime();

// Update the countdown every second
setInterval(() => {
  calculateDeadlineDateAndTime();
}, 1000);
