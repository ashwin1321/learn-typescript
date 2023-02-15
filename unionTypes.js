"use strict";
// union types in typescript are used to combine two or more types into one type and it is used to represent a value that can be one of several types.
exports.__esModule = true;
var score = 33; // score is a number or string
score = 44;
score = "44";
var ashwin = {
    // ashwin is a User or Admin
    name: "ashwin",
    id: 1
};
ashwin = { username: "ashwin123", id: 22 }; // ashwin is a Admin
// function getDbId(id: number | string) {
//   // making some API call to get the id
//   console.log(`DB id is: ${id}`);
// }
getDbId(2);
getDbId("2");
function getDbId(id) {
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
var data = [1, 2, 3, 4, 5]; // array of numbers
var data1 = ["four", "string"]; // array of strings
var data2 = [1, 2, 3, "four", "string"]; // array of numbers and strings
// const dataa: number[] | string[] = [1, 2, 3, "4", "5"];  // error because it is not a union type
var pi = 3.14; // pi is a number with value 3.14 and it is a literal type
var seatAllotment; // seatAllotment is a string with value window, aisle or middle and other values are not allowed
