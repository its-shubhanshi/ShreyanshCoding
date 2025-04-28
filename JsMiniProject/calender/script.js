"use strict";

let year = document.querySelector(".year");
let month = document.querySelector(".month");

let date = new Date();
console.log(date);

year.textContent = date.getFullYear();
month.textContent = date.getDate();
