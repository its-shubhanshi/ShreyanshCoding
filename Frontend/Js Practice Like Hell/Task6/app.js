"use strict";

// Create a tabbed interface where clicking on tabs displays different content section without page reload

let divTabs = document.querySelectorAll(".tab");
let divContents = document.querySelectorAll(".para");

divContents[0].style.display = "block";
divContents[0].style.width = "50%";

divTabs.forEach(function (tab, index) {
  tab.addEventListener("click", function () {
    hideAllText();
    divContents[index].style.display = "block";
    divContents[index].style.width = "50%";
  });
});

function hideAllText() {
  divContents.forEach(function (content) {
    content.style.display = "none";
  });
}
