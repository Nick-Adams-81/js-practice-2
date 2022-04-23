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

// object with nested values
let cars = [
    {
        make: "Tesla",
        model: "S",
        features: ["Automatic transmission", "auto-pilot", "air conditioning"],
        owner: {
            name: "Nick",
            age: 40
        }
    },
    {
        make: "Ford",
        model: "Mustang",
        features: ["maual transmission", "V-8", "air conditioning"],
        owner: {
            name: "Nick",
            age: 40
        }
    }
];

console.log(`my primary car is a ${cars[0].make} model ${cars[0]. model} with ${cars[0].features}, owned by ${cars[0].owner.name}`)