"use strict";
class Person {
    constructor(name, age) {
        // any thing that is not initialized in the constructor should be initialized here
        // of course, you can use readonly and ? if needed
        this.id = 0;
        this.name = name;
        this.age = age;
    }
}
let person = new Person('John', 30);
console.log(person);
console.log(person.id);
