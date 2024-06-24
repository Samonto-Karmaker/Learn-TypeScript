class Person {
    name: string;
    age: number;
    // any thing that is not initialized in the constructor should be initialized here
    // of course, you can use readonly and ? if needed
    id: number = 0;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let person = new Person('John', 30);
console.log(person);
console.log(person.id);