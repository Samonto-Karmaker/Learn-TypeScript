/*
    In typescript, type inference works great in case of variables
    but it doesn't work in case of function return types.
*/

// An example function
function addNum(a: number, b: number): number {
    return a + b;
}

// An example function with optional parameter
const loginMsg = (
    username: string,
    password: string,
    isAdmin: boolean = false
): string => {
    if (isAdmin) {
        return "Welcome Admin";
    } else {
        return "Welcome User";
    }
};

/* 
    In case where built-in functions are used, for example forEach, map, filter etc.
    return or parameter type is not required to be mentioned explicitly.
    However, it is a good practice to mention the return type.
    In case of the parameter, it is not required to mention the type in most cases.
*/
const heros = ["Superman", "Batman", "IronMan", "SpiderMan"];
heros.forEach((hero): void => {
    console.log(hero);
});

/* 
    function that doesn't return anything, the return type is void.
    function that throws an error or cause termination of the program, the return type is never.
*/
const handleError = (error: string): never => {
    throw new Error(error);
}


const sum = addNum(10, 20);
console.log(sum);

const msg1 = loginMsg("admin", "admin", true);
const msg2 = loginMsg("user", "user");
console.log(msg1);
console.log(msg2);

export {};
