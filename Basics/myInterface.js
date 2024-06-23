"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: 'John',
    age: 30,
    email: "john@gmail.com",
    greet: function () {
        console.log("Hello, I am ".concat(this.name));
    },
    getCoupon: function (couponCode) {
        var discount = Number(couponCode.replace("CODE", ""));
        if (couponCode.indexOf("CODE") === 0 && discount > 0) {
            return discount;
        }
        return 0;
    }
};
console.log(user.name); // John
user.greet(); // Hello, I am John
console.log(user.getCoupon("CODE50")); // 50
var admin = {
    name: 'Jane',
    age: 25,
    email: "jane@hotmail.com",
    role: "admin",
    greet: function () {
        user.greet.call(this);
    },
    getCoupon: function (couponCode) {
        return user.getCoupon(couponCode);
    }
};
console.log(admin.role); // admin
admin.greet(); // Hello, I am Jane
console.log(admin.getCoupon("CODE25")); // 25
