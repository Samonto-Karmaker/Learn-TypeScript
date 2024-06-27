"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userArray1 = [];
var userArray2 = [];
// Generic functions
var identity = function (arg) { return arg; };
function identity2(arg) {
    return arg;
}
// Generic functions with Array type
var identity3 = function (arg) { return arg; };
function identity4(arg) {
    return arg;
}
// Multiple type parameters
function identity5(arg1, arg2) {
    return [arg1, arg2];
}
// Generic constraints
function identity6(arg) {
    return arg;
}
// Generic constraints with keyof
function getProperty(obj, key) {
    return obj[key];
}
// Generic classes
var PremiumUser = /** @class */ (function () {
    function PremiumUser(user) {
        this.user = user;
    }
    PremiumUser.prototype.getUser = function () {
        return this.user;
    };
    PremiumUser.prototype.setUser = function (user) {
        this.user = user;
    };
    return PremiumUser;
}());
// For primitive types, the type is inferred from the argument
identity("Hello");
identity2(10);
// For custom types, However, we need to specify the type explicitly
identity({ name: "John", age: 30 });
