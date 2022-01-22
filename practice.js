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
    const reverseString = string.split("").reverse().join("")
    return string === reverseString
}


console.log(reverseString("amanaplanacanalpanama"));
