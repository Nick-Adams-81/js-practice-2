"use strict";

let newBody = document.getElementById("test-body");
// create new element and appending it to the html
let newEl = document.createElement("input");
document.body.appendChild(newEl);

// creating a button element
let btn = document.createElement("button");
btn.innerText = "click me";
btn.addEventListener("click", () => {
    alert("you clicked me!!!");
});
newBody.appendChild(btn);

// fetch api with async await
const loadUsers = async () => {
    return (await fetch("https://jsonplaceholder.typicode.com/users")).json()
    // const res = await fetch()
    // const users = await res.json();
    // return users;
}

document.addEventListener("DOMContentLoaded", async () => {
    let users = []
    try {
        users = await loadUsers();
    } catch (err) {
        console.log({ message: err.message })
    }
    console.log(users);
})

