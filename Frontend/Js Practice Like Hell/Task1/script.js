"use strict";

let btn = document.querySelector("button");
let para = document.querySelector("#para");

btn.addEventListener("click", () => {
  para.textContent =
    "Create a html page with a btn, when btn is clicked change the text of paragraph element";
});
