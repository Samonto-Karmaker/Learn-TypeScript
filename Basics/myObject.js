"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userObject = {
    name: "John",
    age: 30,
    email: "john@hotmail.com",
    password: "123456"
};
/*
    This is how you can create a function that takes an object as an argument
    and returns an object of the same type.
    {} can also be used to define the type of the object that is being returned.
*/
var createUser = function (_a) {
    var name = _a.name, age = _a.age, email = _a.email;
    console.log(name, age, email);
    return {
        name: name,
        age: age,
        email: email,
    };
};
/*
    There is an odd behavior in TypeScript where it allows you
    to pass an object with extra properties even though the function

    So, if you uncomment the password property in the userObject,
    it will still work.

    This is because TypeScript only checks if the properties that are
    required are present in the object that is passed to the function.
    It does not check if there are any extra properties in the object.

    This is a behavior that is not present in other statically typed languages
*/
createUser(userObject);
var createUserSimplified = function (user) {
    console.log(user.name, user.age, user.email);
    return user;
};
createUserSimplified(userObject);
