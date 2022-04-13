"use strict";

// truncate a string
const truncateString = (str, num) => {
    return str.length > num ? str.slice(0, num) + "..." : str;
}
console.log(truncateString("hello World", 8));

// finders keepers
const findEl = (arr, func) => {
    return arr.find(func);
}
// modulus operator function to plug into find el function
const modulus = num =>  num % 2 === 0;
console.log(findEl([1, 3, 5, 9, 10], modulus));

// check if typeof input is a boolean
const booWho = bool => typeof bool === "boolean"
console.log(booWho(false));

// capitalize first letter of every word in a string
const titleCase = str => str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
console.log(titleCase("hello cruel world"));