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
    // setters: there should not be any return type for setters; not even void
    set setName(name) {
        this.name = name;
    }
    set setAge(age) {
        this.age = age;
    }
    // methods
    printPerson() {
        console.log(this.buildPerson());
    }
    buildPerson() {
        return `Name: ${this.name}, Age: ${this.age}, ID: ${this.id}`;
    }
}
class Student extends Person {
    constructor(name, age, id, grade) {
        super(name, age, id);
        this.id = id;
        this.grade = grade;
    }
    get getGrade() {
        return this.grade;
    }
    set setGrade(grade) {
        grade <= 4 ? this.grade = grade : console.log('Grade should be between 0 and 4');
    }
    printStudent() {
        console.log(this.buildPerson());
        console.log(`Grade: ${this.grade}`);
    }
}
let person = new Person('John', 30, 1);
console.log(person);
console.log(person.id);
person.printPerson();
person.setName = 'Jane';
console.log(person.getName);
let student = new Student('Alice', 20, 2, 3);
console.log(student);
console.log(student.id);
student.printStudent();
student.setGrade = 3.5;
student.setName = 'Bob';
student.printStudent();
