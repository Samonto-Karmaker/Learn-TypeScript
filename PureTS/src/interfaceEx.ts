interface IPerson {
	name: string;
	age: number;
	readonly id: number;

	printPerson(): void;
}

interface IStudent extends IPerson {
	grade: number;
}

class UniStudent implements IPerson, IStudent {
	constructor(
		public name: string,
		public age: number,
		public readonly id: number,
		public grade: number
	) {}

	printPerson(): void {
		console.log(
			`Name: ${this.name}, Age: ${this.age}, ID: ${this.id}, Grades: ${this.grade}`
		);
	}
}
