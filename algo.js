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

// slice and splice array
const frankenSplice = (arr1, arr2, n) => {
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}
console.log(frankenSplice([1,2,3], [4,5],1));

// remove false values from an array
const bouncer = arr => arr.filter(Boolean);
console.log(bouncer(["hello", 4, false, "hi"]));

// get index of ints
const getIndexToIns = (arr, num) => {
    return arr.filter(val => num > val).length;
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));

// mutate two strings
const mutation = arr => arr[1].toLowerCase().split("").every(letter => arr[0].toLowerCase().indexOf(letter) !== -1);
console.log(mutation(["hello", "hello"]));

// validate subsequence
const isSubequence = (arr, seq) => {
    let index = 0
    for(let i = 0; i < arr.length; i++) {
        if(index === seq.length) {
            break
        } 
        if(arr[i] === seq[index] && index < seq.length) {
            index++
        }
    }
    return index === seq.length
}
console.log(isSubequence([1, 2, 4, 6], [1, 5, 6]))


