"use strict";

// remove vowels from a string
const string = "test string to remove all vowels";
console.log(string);

const newString = string.replace(/[aeiou]/ig, "");
console.log(newString);


// fibonachi
const fib = (n) => {
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

// is palindrome
const reverseString = (string) => {
    const reverseString = string.split("").reverse().join("");
    return string === reverseString;
}

console.log(reverseString(string));

// number palindrome
const numsArr = [1, 2, 2, 1];

const numsPalindrome = (input) => {

    const reverseNumPalindrome = input.toString().split("").reverse().join("");
    return input.toString() === reverseNumPalindrome;
}

console.log(numsPalindrome(numsArr))
// fizz buzz
const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

fizzBuzz(50);

// basic html manipluation
const main = document.getElementById("main");

// fetch call to fake api
fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(res => res.json())
    .then(data => {
        let arr = [];
        arr.push(data)
        arr.forEach((data) => {
            main.append("Name: " + data[1].title + "\n Data: " + data[1].body);
            console.log(data);
        })
    })

