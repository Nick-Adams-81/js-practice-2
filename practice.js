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
// alternate reverse string method
const reverseString2 = string => {
    let array2 = [];

    for(let i = string.length - 1; i >=0; i--) {
        array2.push(string[i]);
    }

    return array2.join("");
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
            console.log(data);
        });
    });



    let image1 = "yoururlhere";
    let array = [1, 2, 3, 4, 5];


    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    let arr = [1, 2, 3, 4, 5];
    for(let i = arr.length -1; i >= 0; i--) {
        console.log(arr[i]);
    }

  

    


