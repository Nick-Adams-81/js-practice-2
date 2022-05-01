"use strict";

// fibonachi

const fib = n => {
    let a = 0;
    let b = 1;
    for(let i = 0; i < n; i++) {
        let x = a;
        a = b;
        b = b + x;
    }

    return a;
}

for(let i = 0; i < 10; i++) {
    console.log(fib(i))
}

// reverse a string
const revString = str => str.split("").reverse().join("");
console.log(revString("hello"));

// another reverse a string method
const revString2 = str => {
    let arr = [];
    for(let i = str.length -1; i >= 0; i--) {
        arr.push(str[i]);
    }
    return arr.join("");
}
console.log(revString2("hello world"));

// is palindrome 
const isPalindrome = str => str === revString(str);
console.log(isPalindrome("bobby"));

// strip string of vowels
const noVowels = str => str.replace(/[aeiou]/ig, "");
console.log(noVowels("hellO world"));

// array manipulations
let array = [1, 2, 3, 4, 5, 6];

// push
array.push(7);
console.log(array);

// unshift
array.unshift(0);
console.log(array);

// shift
array.shift();
console.log(array);

// pop
array.pop();
console.log(array);

// for each loop
array.forEach(item => console.log(item));

// map
 let mappedArr = array.map(item => item + 2);
 console.log(mappedArr);

 // filter
 let filteredArr = array.filter(item => item % 2 === 0);
 console.log(filteredArr);

 // reduce
 let reducedArr = array.reduce((accumulator, item) => { return accumulator + item}, 0);
 console.log(reducedArr);


// object stuff
const myObj = {
    name: "Nick",
    age: 40,
    jobs: ["poker dealer, software enginner"],
    address: {
        street: "3403 mcneil street",
        city: "dallas",
        state: "texas",
        zip: 75227
    },
    isCool: true
}

// accessing object data
console.log(myObj.name);
console.log(myObj. jobs);
console.log(myObj.address);

// dom stuff
let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.color = "green";
btn.style.backgroundColor = "gold";
btn.addEventListener("click", () => { alert("clicked me")} );
document.body.append(btn);