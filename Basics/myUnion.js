"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person1 = {
    name: "John",
    age: 30
};
var person2 = {
    name: "John",
    age: 30,
    role: "Admin"
};
var person;
// Here person is Person1
person = {
    name: "John",
    age: 30
};
// Here person is Person2
person = {
    name: "John",
    age: 30,
    role: "Admin",
};
var getDB = function (id) {
    // Here id can be either a string or a number, 
    // so we can't directly use string or number methods on it
    console.log(id);
    if (typeof id === "string") {
        // Here id is a string
        console.log(id.toUpperCase());
    }
    if (typeof id === "number") {
        // Here id is a number
        console.log(id.toFixed(2));
    }
    return id;
};
getDB("ab");
getDB(1);
// Here we are defining a variable seatType which can only be one of the three values
var seatType = "window";
