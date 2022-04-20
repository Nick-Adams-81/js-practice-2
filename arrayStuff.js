"use strict";



// array for testing 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// object for testing
const salesPeeps = [
    {name: "Nick Adams", sales: 100},
    {name: "john doe", sales: 220},
    {name: "davey pageturns", sales: 450},
    {name: "Ben Sisko", sales: 225}
];
// ---ForOf loop--- //
for(let e in arr) {
    console.log(e);
}

// ---Map--- //

// using map to transform array[arr]
let increment = arr.map(n => n + 1);
console.log(increment);

// ---Filter--- //

// using filter to sort even numbers from array[arr]
let evens = arr.filter(n => n % 2 === 0);
console.log(evens);

// ---Reduce--- //

// reducing the array[arr] to single value
let sum = arr.reduce((accumulation, currentNums) => {return accumulation + currentNums}, 0);
console.log(sum);

// reducing a single value in an array of objects
let totals = salesPeeps.reduce((total, person) => {return total + person.sales}, 0);
console.log(totals);

// using reduce to count occurances of words in a collection
const countWords = sentence => {
    const words = sentence.split(" ");
    const wordCountObj = words.reduce((wordCount, word) => {
        if(typeof wordCount[word] === "undefined") {
            wordCount[word] = 1;
        } else {
            wordCount[word] += 1;
        }
        return wordCount;
    }, {});
    return wordCountObj; 
}
console.log(countWords("mary had a little lamb little lamb little lamb"))

