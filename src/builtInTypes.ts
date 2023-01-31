let sales: number = 100;
let namee: string = "John";
let isTrue: boolean = true;

let anyType; // if not initialized, it is of type any
anyType = 10;
anyType = "Hello";

function render(document: any) {
  console.log(document);
}
