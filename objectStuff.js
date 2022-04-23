"use strict";

// new object instance
let car = new Object();
console.log(typeof car);

// object literal notation
let newCar = {};
console.log(typeof newCar);

// setting values to a custom object using dot notation
newCar.make = "Tesla";
newCar.model = "3";
newCar.year = 2019;
console.log(newCar);

// accessing object properties

// using array notation
console.log(newCar["make"]);

// using dot notation
console.log(newCar.model);