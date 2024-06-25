"use strict";
// class Person {
//     name: string;
//     age: number;
//     // any thing that is not initialized in the constructor should be initialized here
//     // of course, you can use readonly and ? if needed
//     id: number = 0;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
class Person {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    // getters
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
    get getId() {
        return this.id;
    }
    // setters: there should not be any return type for setters; not even void
    set setName(name) {
        this.name = name;
    }
    set setAge(age) {
        this.age = age;
    }
    set setId(id) {
        this.id = id;
    }
    // methods
    printPerson() {
        console.log(this.buildPerson());
    }
    buildPerson() {
        return `Name: ${this.name}, Age: ${this.age}, ID: ${this.id}`;
    }
}
let person = new Person('John', 30, 1);
console.log(person);
console.log(person.id);
person.printPerson();
person.setName = 'Jane';
console.log(person.getName);
