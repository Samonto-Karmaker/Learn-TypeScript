type User = {
    name: string;
    age: number;
}

type Admin = {
    name: string;
    role: string;
}

// Person 1 is either a User or an Admin
type Person1 = User | Admin;
let person1: Person1 = {
    name: "John",
    age: 30
};

// Person 2 is both a User and an Admin
type Person2 = User & Admin;
let person2: Person2 = {
    name: "John",
    age: 30,
    role: "Admin"
};

let person: Person1 | Person2;

// Here person is Person1
person ={
    name: "John",
    age: 30
}

// Here person is Person2
person = {
    name: "John",
    age: 30,
    role: "Admin",
}

// This uses Type Narrowing using typeof
// For details, refer to Basics/myInterface.ts
const getDB = (id : string | number): (string | number) => {
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
}

getDB("ab");
getDB(1);

// Here we are defining a variable seatType which can only be one of the three values
const seatType: "window" | "aisle" | "middle" = "window";

export {};