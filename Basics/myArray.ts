// Initialize an array in TypeScript
const array1: number[] = [1, 2, 3, 4, 5];
const array2: Array<number> = [1, 2, 3, 4, 5];

// Initialize a 2D array in TypeScript
const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// Initialize an array with a fixed length in TypeScript
const fixedArray: [number, number, number] = [1, 2, 3]; // length is 3

// Arrays with custom types
type SuperHero = {
    name: string;
    power: string;
    isActive: boolean;
}

const superHeroes: SuperHero[] = [
    { name: 'Superman', power: 'Flying', isActive: true },
    { name: 'Batman', power: 'Rich', isActive: true },
    { name: 'Flash', power: 'Super speed', isActive: false },
];

// Arrays with mixed types using Union Types
const mixedArray: (string | number)[] = ['Hello', 123, 'World', 456];

export {};