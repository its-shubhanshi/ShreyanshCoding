"use strict";

let swapBtn = document.querySelector("#swapp");
let img = document.querySelectorAll("img");
let img1Src = img[0].src;
let img2Src = img[1].src;

/**
 * a=b
 * b=c
 * c=a
 *
 */
function swap() {
  img[0].src = img2Src;
  img[1].src = img1Src;
  console.log(img1Src);
  console.log(img2Src);
}

swapBtn.addEventListener("click", swap);

console.log(swapBtn);
console.log(img);
