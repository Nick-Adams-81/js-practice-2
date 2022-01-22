"use strict";

// remove vowels from a string
const string = "test string to remove all vowels";
console.log(string);

const newString = string.replace(/[aeiou]/ig, "");
console.log(newString);