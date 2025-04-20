"use strict";

let textarea = document.querySelector("textarea");
let h3 = document.querySelector("h3");
let para = document.querySelector("#para");

textarea.addEventListener("input", function () {
  h3.textContent = `Counter : ${textarea.value.length}`;
  para.textContent = textarea.value;
});



