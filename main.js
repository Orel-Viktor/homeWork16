"use strict";
import "./style.css";

function Clock(content) {
  const clockContent = document.querySelector(content);
  this.timer;
  this.showClock = function () {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (hours < 10) { hours = `0${hours}`};
    if (min < 10) {min = `0${min}`};
    if (sec < 10) {sec = `0${sec}`};
    clockContent.innerText = `${hours}:${min}:${sec}`;
    this.timer = setInterval(this.showClock, 1000);
  };
  this.showClock();
}

Clock.prototype.stopClock = function (stopClock) {
  this.stopClockBtn = document.querySelector(stopClock);
  this.stopClockBtn.addEventListener("click", () => {
    clearInterval(this.timer);
    this.startClockBtn.removeAttribute("disabled", "disabled");
    this.stopClockBtn.setAttribute("disabled", "disabled");
  });
};

Clock.prototype.startclock = function (startClock) {
  this.startClockBtn = document.querySelector(startClock);
  this.startClockBtn.setAttribute("disabled", "disabled");
  this.startClockBtn.addEventListener("click", () => {
    this.showClock();
    this.startClockBtn.setAttribute("disabled", "disabled");
    this.stopClockBtn.removeAttribute("disabled", "disabled");
  });
};

let myClock = new Clock(".js--my-clock");
myClock.stopClock(".js--stop-clock");
myClock.startclock(".js--start-clock");





// class Clock {
//   timer = undefined;
//   constructor({ content, start, stop }) {
//     this.contentClock = document.querySelector(content);
//     this.startClockBtn = document.querySelector(start);
//     this.stopClockBtn = document.querySelector(stop);
//   }
//   showClock = () => {
//     let date = new Date();
//     let hours = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//     if (hours < 10) { hours = `0${hours}` }
//     if (min < 10) { min = `0${min}` }
//     if (sec < 10) { sec = `0${sec}` }
//     this.contentClock.innerText = `${hours}:${min}:${sec}`;
//   };
//   timer = setInterval(this.showClock, 1000);
//   stopClock = () => {
//     this.stopClockBtn.addEventListener("click", () => {
//       clearInterval(this.timer);
//       this.startClockBtn.removeAttribute("disabled", "disabled");
//       this.stopClockBtn.setAttribute("disabled", "disabled");
//     });
//   };

//   startClock = () => {
//     this.startClockBtn.setAttribute("disabled", "disabled");
//     this.startClockBtn.addEventListener('click', () => {
//       this.showClock()
//       this.timer = setInterval(this.showClock, 1000);
//       this.startClockBtn.setAttribute("disabled", "disabled");
//       this.stopClockBtn.removeAttribute("disabled", "disabled");
//     })
//   }
// }

// let myClock = new Clock({
//   content: ".js--my-clock",
//   start: ".js--start-clock",
//   stop: ".js--stop-clock",
// });
// myClock.showClock();
// myClock.stopClock();
// myClock.startClock();
