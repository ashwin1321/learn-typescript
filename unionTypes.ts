// union types in typescript are used to combine two or more types into one type and it is used to represent a value that can be one of several types.

let score: number | string = 33; // score is a number or string
score = 44;
score = "44";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let ashwin: User | Admin = {
  // ashwin is a User or Admin
  name: "ashwin",
  id: 1,
};
ashwin = { username: "ashwin123", id: 22 }; // ashwin is a Admin

// function getDbId(id: number | string) {
//   // making some API call to get the id
//   console.log(`DB id is: ${id}`);
// }
getDbId(2);
getDbId("2");

function getDbId(id: number | string) {
  // this acts as both number and string type
  if (typeof id === "string") {
    id.toLowerCase(); // no error
  }

  if (typeof id === "number") {
    id.toFixed(); // no error
  }
  //   id.toLowerCase(); // error
}

// arrays of union types
const data: number[] = [1, 2, 3, 4, 5]; // array of numbers
const data1: string[] = ["four", "string"]; // array of strings
const data2: (number | string)[] = [1, 2, 3, "four", "string"]; // array of numbers and strings
// const dataa: number[] | string[] = [1, 2, 3, "4", "5"];  // error because it is not a union type

let pi: 3.14 = 3.14; // pi is a number with value 3.14 and it is a literal type

let seatAllotment: "window" | "aisle" | "middle"; // seatAllotment is a string with value window, aisle or middle and other values are not allowed
// seatAllotment = "crew";  // error

export {};
