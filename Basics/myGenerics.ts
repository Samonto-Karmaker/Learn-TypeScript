interface User {
	name: string;
	age: number;
}

const userArray1: User[] = [];
const userArray2: Array<User> = [];

// Generic functions
const identity = <T>(arg: T): T => arg;
function identity2<T>(arg: T): T {
	return arg;
}

// Generic functions with Array type
const identity3 = <T>(arg: T[]): T[] => arg;
function identity4<T>(arg: T[]): T[] {
	return arg;
}

// Multiple type parameters
function identity5<T, U>(arg1: T, arg2: U): [T, U] {
    return [arg1, arg2];
}

// Generic constraints
function identity6<T extends User>(arg: T): T {
    return arg;
}

// Generic constraints with keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Generic classes
class PremiumUser<T> {
    private user: T;
    constructor(user: T) {
        this.user = user;
    }
    getUser(): T {
        return this.user;
    }
    setUser(user: T): void {
        this.user = user;
    }
}


// For primitive types, the type is inferred from the argument
identity("Hello");
identity2(10);

// For custom types, However, we need to specify the type explicitly
identity<User>({ name: "John", age: 30 });

export {};
