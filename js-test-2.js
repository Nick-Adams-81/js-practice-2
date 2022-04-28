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