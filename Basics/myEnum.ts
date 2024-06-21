// Enums or enumerations are a new data type supported in TypeScript.
// They are used to define a collection of named constants.

// Here we have an enum called SeatType with three constants Window, Aisle and Middle
// Each constant is assigned a number starting from 0 and then increments by 1 by default
// We can also assign custom values to constants
// However, if the custom value is not a number, then 
// the next constant should have a value assigned to it since ts can't add 1 to a string

// Enums are useful when you have a fixed set of values that are related to each other
// The keyword enum is used to initialize an enum
// However, adding a const keyword before enum will make the compiled javascript code more readable
// Now, the changes in the enum will not be reflected in the compiled javascript code
// The choice of using const enum depends on the use case

const enum SeatType {
    Window = 10,
    Aisle,
    Middle
}

// We can access the constants using the enum name
console.log(SeatType.Window); // 10
console.log(SeatType.Aisle); // 11
console.log(SeatType.Middle); // 12

export {};