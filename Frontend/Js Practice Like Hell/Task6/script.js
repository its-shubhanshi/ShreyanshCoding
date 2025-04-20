"use strict";

// Create a tabbed interface where clicking on tabs displays different content section without page reload

let home = document.querySelector("#home");
let about = document.querySelector("#about");
let feature = document.querySelector("#feature");
let contact = document.querySelector("#contact");

let homeText = document.querySelector("#homeText");
let aboutText = document.querySelector("#aboutText");
let featureText = document.querySelector("#featureText");
let contactText = document.querySelector("#contactText");

home.addEventListener("click", () => {
    removeText()
  homeText.style.display = "block";
  homeText.style.width = "50%";
});
about.addEventListener("click", () => {
    removeText()
  aboutText.style.display = "block";
  aboutText.style.width = "50%";
});
feature.addEventListener("click", () => {
    removeText()
  featureText.style.display = "block";
  featureText.style.width = "50%";
});

contact.addEventListener("click", () => {
    removeText()
  contactText.style.display = "block";
  contactText.style.width = "50%";
});

function removeText(){
    document.querySelectorAll(".para").forEach(function(ele){
        ele.style.display="none";
    })
}
