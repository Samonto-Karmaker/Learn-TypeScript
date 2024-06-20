"use strict";
// Tuples are fixed length arrays where each element has a fixed type
// Tuples are useful when you know the number of elements and the type of elements in an array
Object.defineProperty(exports, "__esModule", { value: true });
// Here we have a tuple with two elements, first element is a number and second element is a string
var user = [1, "John Doe"];
var newUser = [2, "Jane Doe"];
// However, there is a big problem with tuples. 
// Since, tuples are just arrays, you can push elements into them
user.push(3); // This is allowed!
// So be careful when using tuples. They are not as safe as you might think!
console.log(user);
