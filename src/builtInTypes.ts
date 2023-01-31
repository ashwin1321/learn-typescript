let sales: number = 100;
let namee: string = "John";
let isTrue: boolean = true;

let anyType; // if not initialized, it is of type any
anyType = 10;
anyType = "Hello";

function render(document: any) {
  console.log(document);
}

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let anyArray: any[] = [1, "Hello", true]; // not recommended

// Tuple
let tuple: [string, number] = ["Hello", 10]; // each element has its own type and order matters. is of fixed length

// Enum
const enum Color { // list of related constants
  Red = "r",
  Green = "g",
  Blue = "b",
}

let backgroundColor = Color.Red;
console.log(backgroundColor);
