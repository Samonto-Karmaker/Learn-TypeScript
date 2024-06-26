"use strict";
class UniStudent {
    constructor(name, age, id, grade) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.grade = grade;
    }
    printPerson() {
        console.log(`Name: ${this.name}, Age: ${this.age}, ID: ${this.id}, Grades: ${this.grade}`);
    }
}
