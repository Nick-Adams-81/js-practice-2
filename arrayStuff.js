"use strict";

// Map //

// array for testing 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using map to transform array[arr]
let increment = arr.map(n => n + 1);
console.log(increment);

// filter //

// using filter to sort even numbers from array[arr]
let evens = arr.filter(n => n % 2 === 0);
console.log(evens);

// reduce //
let sum = arr.reduce((accumulation, currentNums) => {return accumulation + currentNums}, 0);
console.log(sum);


