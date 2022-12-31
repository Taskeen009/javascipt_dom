//VARIABLES

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//VARIBALES FOR LEADING ZERO

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//STOP WATCH FUNCTION

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  let displayTimer = (document.getElementById("timer").innerText =
    hours + ":" + minutes + ":" + seconds);
}
window.setInterval(stopWatch, 1000);
