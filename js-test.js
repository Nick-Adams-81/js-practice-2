"use strict";

// fibonachi
const fib = n => {
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        let x = a;
        a = b;
        b = b + x;
    }
    return a;
}

for (let i = 0; i < 10; i++) {
    console.log(fib(i));
}

// fizz buzz
const fizzBuzz = n => {
    for (let i = 0; i <= n; i++) {
        if (i % 15 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

// fizzBuzz(50);

// strip string of vowels
const stripString = str => str.replace(/[aeiou]/ig, "");
console.log(stripString("hellO crUel world"));

// reverse a string
const reverseString = str => str.split("").reverse().join("");
console.log(reverseString("hello"));

// is palindrome(case insensative)
const isPalindrome = str => str.toLowerCase() === reverseString(str.toLowerCase());
console.log(isPalindrome("boB"));

// array stuff

let array = [1, 2, 3, 4, 5];

// adding and removing elements 
array.push(6);
console.log(array);

array.unshift(0);
console.log(array);

array.pop()
console.log(array);

array.shift();
console.log(array);

// looping through arrays
// forward
for(let i = 0; i < array.length; i++) {
    console.log(array[i])
}

//backward
for(let i = array.length -1; i >= 0; i--) {
    console.log(array[i])
}

// foreach
array.forEach(item => console.log(item));

// map
array.map(item => console.log(item + 1));

// filter
array.filter(item => console.log(item % 2 === 0));

// reduce
let sum = array.reduce((accumulator, item) => {return accumulator + item}, 0);
console.log(sum);

// object stuff
const myObj = {
    name: "nick",
    age: 40,
    jobs: ["Poker Dealer", "Web Developer"],
    address: {
        street: "3403 Mcneil Street",
        city: "Dallas",
        state: "Texas",
        zip: 75227
    }
}

console.log(myObj);
console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.jobs);
console.log(myObj.address);
