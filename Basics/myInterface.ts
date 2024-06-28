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

// Type Narrowing
// Type narrowing is a technique to narrow down the type of a variable
// based on a condition.
// Type narrowing can be done using the following methods:
// 1. typeof -> Example: typeof variable === "string" (check myUnion.ts)

// 2. in operator -> Example: "key" in object | "key" in interface | "key" in type;
// "user is Admin" is called a type predicate. It is a function that returns a boolean;
// Now we can use the isAdminAccount function to check if a user is an admin in the codebase.
const isAdminAccount = (user: User | Admin): user is Admin => "role" in user;

// 3. instanceof -> Example: variable instanceof ClassName;
// anything that is created via the "new" keyword
const logData = (data: string | Date): void => {
    if (data instanceof Date) {
        console.log(data.toISOString());
    } else {
        console.log(data.toUpperCase());
    }
}


// Exhaustive checking with never: A important best practice in type narrowing
// This ensures that you have covered all possible cases in a switch statement
// If you forget to add a case, TypeScript will throw an error
const getRole = (user: Admin): string => {
    switch (user.role) {
        case "admin":
            return "Admin";
        case "TA":
            return "Teaching Assistant";
        case "instructor":
            return "Instructor";
        default:
            const _exhaustiveCheck: never = user.role;
            return _exhaustiveCheck;
    }
}

export {};