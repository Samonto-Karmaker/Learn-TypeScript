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
    constructor(private name: string, private age: number, public readonly id: number) {}

    // getters
    get getName(): string {
        return this.name;
    }
    get getAge(): number {
        return this.age;
    }

    // setters: there should not be any return type for setters; not even void
    set setName(name: string) {
        this.name = name;
    }
    set setAge(age: number) {
        this.age = age;
    }

    // methods
    public printPerson(): void {
        console.log(this.buildPerson());
    }
    private buildPerson(): string {
        return `Name: ${this.name}, Age: ${this.age}, ID: ${this.id}`;
    }
}

let person = new Person('John', 30, 1);
console.log(person);
console.log(person.id);

person.printPerson();
person.setName = 'Jane';
console.log(person.getName);