"use strict";
/*
    In typescript, type inference works great in case of variables
    but it doesn't work in case of function return types.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// An example function
function addNum(a, b) {
    return a + b;
}
// An example function with optional parameter
var loginMsg = function (username, password, isAdmin) {
    if (isAdmin === void 0) { isAdmin = false; }
    if (isAdmin) {
        return "Welcome Admin";
    }
    else {
        return "Welcome User";
    }
};
/*
    In case where built-in functions are used, for example forEach, map, filter etc.
    return or parameter type is not required to be mentioned explicitly.
    However, it is a good practice to mention the return type.
    In case of the parameter, it is not required to mention the type in most cases.
*/
var heros = ["Superman", "Batman", "IronMan", "SpiderMan"];
heros.forEach(function (hero) {
    console.log(hero);
});
/*
    function that doesn't return anything, the return type is void.
    function that throws an error or cause termination of the program, the return type is never.
*/
var handleError = function (error) {
    throw new Error(error);
};
var sum = addNum(10, 20);
console.log(sum);
var msg1 = loginMsg("admin", "admin", true);
var msg2 = loginMsg("user", "user");
console.log(msg1);
console.log(msg2);
