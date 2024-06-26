"use strict";
/**
 * The main difference between interface and abstract class is that
 * we can have concrete methods is abstract classes
 *
 * BTW, you can not have an object of an abstract class
 * The only way to use it is to extend it and use the subclass
 */
class User {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    sendEmail(msg) {
        console.log(msg);
    }
}
var PaymentMode;
(function (PaymentMode) {
    PaymentMode[PaymentMode["Cash"] = 0] = "Cash";
    PaymentMode[PaymentMode["Check"] = 1] = "Check";
    PaymentMode[PaymentMode["CreditCard"] = 2] = "CreditCard";
    PaymentMode[PaymentMode["DebitCard"] = 3] = "DebitCard";
})(PaymentMode || (PaymentMode = {}));
class PremiumUser extends User {
    constructor(name, email, id, paymentMode) {
        super(name, email, id);
        this.name = name;
        this.email = email;
        this.id = id;
        this.paymentMode = paymentMode;
    }
    getUserInfo() {
        console.log(`Name: ${this.name}
            Email: ${this.email}
            ID: ${this.id}
            Payment Mode: ${this.paymentMode}`);
    }
}
const Sam = new PremiumUser("Sam", "sam@s.com", 0, PaymentMode.Check);
