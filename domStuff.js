"use strict";
let newBody = document.getElementById("test-body");
// create new element and appending it to the html
let newEl = document.createElement("input");
document.body.appendChild(newEl);

let btn = document.createElement("button");
btn.innerText = "click me";
btn.addEventListener("click", () => {
    alert("you clicked me!!!");
})
newBody.appendChild(btn);