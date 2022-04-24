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

fizzBuzz(50);


