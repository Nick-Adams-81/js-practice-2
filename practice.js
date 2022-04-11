"use strict";

// remove vowels from a string
const string = "test string to remove all vowels";
console.log(string);

const newString = string.replace(/[aeiou]/ig, "");
console.log(newString);


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

// convert celsius to farenheit
const convertToF = c => {
    let farenheit;
    farenheit = (c * 9 / 5) + 32;
    return farenheit;
}
console.log(convertToF(20));

// factoral of num
const factoral = num => {
    return num < 0 ? 1 :
        new Array(num)
            .fill(undefined)
            .reduce((a, _, index) => a * (index + 1), 1);
}

console.log(factoral(10));

// longest word in a string
const longestWord = str => {
    return Math.max(...str.split(" ").map(word => word.length));
}
console.log(longestWord("The quick brown fox jumped over the lazy dog"));

// largest number in array
const largestNumsInArr = arr => {
    return arr.map(Function.apply.bind(Math.max, null))
}
console.log(largestNumsInArr([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// is palindrome
const isPalindrome = string => {
    const reverseString = string.split("").reverse().join("");
    return string === reverseString;
}

console.log(isPalindrome(string));

// reverse string
const reverseString = string => {
    return string.split("").reverse().join("");
}
console.log(reverseString("hello"));

// confirm string ends in a character
const confirmEnding = (str, target) => {
    return str.slice(-target.length) === target;
}
console.log(confirmEnding("Nick", "c"));



// alternate reverse string method
const reverseString2 = string => {
    let array = [];

    for (let i = string.length - 1; i >= 0; i--) {
        array.push(string[i]);
    }

    return array.join("");
}

console.log(reverseString2("testing"));

// number palindrome
const numsArr = [1, 2, 2, 1];

const numsPalindrome = (input) => {
    const reverseNumPalindrome = input.toString().split("").reverse().join("");
    return input.toString() === reverseNumPalindrome;
}

console.log(numsPalindrome(numsArr));

// fizz buzz
const fizzBuzz = n => {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

// fizzBuzz(50);

// Sieve of Eratosthenes
const eratosthenes = n => {
    // setting up variables
    let array = [], upperLimit = Math.sqrt(n), output = [];

    // making an array from 2 to (n - 1)
    for (let i = 0; i < n; i++) {
        array.push(true)
    }

    // remove multiples of primes starting from 2, 3, 5, ...
    for (let i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (let j = i * i; j < n; j += i) {
                array[j] = false;
            }

        }
    }

    // all array[i] set to true are primes
    for (let i = 2; i < n; i++) {
        if (array[i]) {
            output.push(i)
        }
    }

    return output;

};

console.log(eratosthenes(100));

// basic html manipluation
const main = document.getElementById("main");
const body = document.getElementById("body");

// fetch call to fake api
fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(res => res.json())
    .then(data => {
        let arr = [];
        arr.push(data)
        arr.forEach(data => {
            main.append(`Name: ${data[1].title}`);
            body.append(`Data: ${data[1].body}`)
            // console.log(data);
        });
    });



    // let image1 = "yoururlhere";
    // let array = [1, 2, 3, 4, 5];


    // for(let i = 0; i < array.length; i++) {
    //     console.log(array[i]);
    // }

    // let arr = [1, 2, 3, 4, 5];
    // for(let i = arr.length -1; i >= 0; i--) {
    //     console.log(arr[i]);
    // }






