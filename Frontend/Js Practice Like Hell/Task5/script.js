"use strict";

// Build a countdown timer that starts when a button is clicked and updates the display in realtime

let startBtn = document.querySelector("#startBtn");
let resetBtn = document.querySelector("#resetBtn");
let stopBtn = document.querySelector("#stopBtn");
let countNum = document.querySelector("#countNum");
let interval;

let count = 0;
function increaseNum() {
  interval = setInterval(function () {
    countNum.textContent = count;
    console.log(count);
    ++count;
  }, 1000);
}
function resetNum() {
  countNum.textContent = 0;
  count = 0;
}
function pauseNum() {
  count = count;
  clearInterval(interval);
}
startBtn.addEventListener("click", increaseNum);
resetBtn.addEventListener("click", resetNum);
stopBtn.addEventListener("click", pauseNum);
