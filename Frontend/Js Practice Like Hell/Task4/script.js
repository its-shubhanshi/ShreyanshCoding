"use strict";

// Create a Unordered list, allow users to add and remove list item dynamically

let addBtn = document.querySelector("#addBtn");
let list = document.querySelector("ul");
let inputTask = document.querySelector("#inputTask");
let items;

addBtn.addEventListener("click", function () {
  console.log(addBtn);
  if (inputTask.value.trim() === "") {
    alert("type your task");
    inputTask.style.borderColor = "red";
  } else {
    inputTask.style.borderColor = "black";
    items = document.createElement("li");

    items.innerHTML += `
            <li> ${inputTask.value} <button>Edit</button> <button id="removeBtn">Remove</button></li>`;
    list.appendChild(items);
  }
});
