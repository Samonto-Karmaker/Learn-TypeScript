interface User {
    name: string;
    age: number;
    greet(): void;
    // greet: () => void;
    getCoupon(couponCode: string): number;
}

// This is called "reopening an interface"
// Use case: When you want to add new properties to an existing interface 
// (e.g. from a third-party library)
interface User {
    email: string;
}

// Interface inheritance!
interface Admin extends User {
    role: "admin" | "TA" | "instructor";
}

const user: User = {
    name: 'John',
    age: 30,
    email: "john@gmail.com",
    greet() {
        console.log(`Hello, I am ${this.name}`);
    },
    getCoupon(couponCode: string) {
        const discount = Number(couponCode.replace("CODE", ""));
        if (couponCode.indexOf("CODE") === 0 && discount > 0){
            return discount;
        }
        return 0;
    }
};

console.log(user.name); // John
user.greet(); // Hello, I am John
console.log(user.getCoupon("CODE50")); // 50

const admin: Admin = {
    name: 'Jane',
    age: 25,
    email: "jane@hotmail.com",
    role: "admin",
    greet() {
        user.greet.call(this);
    },
    getCoupon(couponCode: string) {
        return user.getCoupon(couponCode);
    }
}

console.log(admin.role); // admin
admin.greet(); // Hello, I am Jane
console.log(admin.getCoupon("CODE25")); // 25

export {};