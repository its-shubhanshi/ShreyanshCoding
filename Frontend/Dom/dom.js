"use strict";

let h1 = document.querySelector("h1");

h1.innerHTML += `, <i>Hello</i>`;
h1.style.color = "red";

let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

ul.addEventListener("click", function () {
  console.log(this);
});

for (let item of li) {
  item.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log(item);
  });
}

let img = document.createElement("img");
img.src =
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D";

  document.querySelector("body").appendChild(img);
  img.style.width="200px";
  img.style.border="5px solid red";
