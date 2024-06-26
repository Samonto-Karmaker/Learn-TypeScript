/**
 * The main difference between interface and abstract class is that 
 * we can have concrete methods is abstract classes
 * 
 * BTW, you can not have an object of an abstract class
 * The only way to use it is to extend it and use the subclass
 */

abstract class User {
	constructor(
		protected name: string,
		protected email: string,
		protected readonly id: number
	) {}

	abstract getUserInfo(): void;
	public sendEmail(msg: string): void {
		console.log(msg);
	}
}

enum PaymentMode {
	Cash,
	Check,
	CreditCard,
	DebitCard,
}

class PremiumUser extends User {
	constructor(
		protected name: string,
		protected email: string,
		protected readonly id: number,
		public paymentMode: PaymentMode
	) {
		super(name, email, id);
	}

	getUserInfo(): void {
		console.log(`Name: ${this.name}
            Email: ${this.email}
            ID: ${this.id}
            Payment Mode: ${this.paymentMode}`);
	}
}

const Sam = new PremiumUser("Sam", "sam@s.com", 0, PaymentMode.Check);
