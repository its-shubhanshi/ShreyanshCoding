"use strict";

let form = document.querySelector("form");
let inputField = document.querySelectorAll("input");
let uname = document.querySelector("#uname");
let pass = document.querySelector("#pass");
let error = document.querySelector("#error");
let email = document.querySelector("#email");
let submitBtn = document.querySelector("#submitBtn");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(inputField);
  for (let i = 0; i < inputField.length; i++) {
    //console.log(inputField[i].value);
    if (inputField[i].value.trim() === "") {
      error.textContent = "error, sonne fields are blanked";
      error.style.color = "red";
      break;
    } else {
      error.textContent = "Sucessfully submitted";
      error.style.color = "green";
    }

    console.log(inputField[i].id, "  =>   ", inputField[i].value.trim());
  }
});

/**
 * 
 * console.log(uname.value);
    if(uname.value==="" || pass.value==="" || email.value===""){
        console.log("All field are required")
        error.textContent="error, sonne fields are blanked";
        error.style.color="red";

    }
    else{
        error.textContent="Sucessfully submitted";
        error.style.color="green";
    }
 */
