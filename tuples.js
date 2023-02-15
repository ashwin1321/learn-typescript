// const user: (string | number)[] = [1, "ashwin"];
// tuples in typescript are used to represent an array with a fixed number of elements whose types are known, but need not be the same order as declared.
var tuser;
// tuser = [true, 1, "ashwin"]; // error because the order is not correct
tuser = ["ashwin", 1, true]; // correct order
var rgb = [255, 255, 255]; // rgb is a tuple with 3 elements of type number
rgb = [0, 0, 0]; // correct
// const newUser: User = ["ashwin", 1]; // error because the order is not correct
var newUser = [1, "ashwin"]; // correct order
newUser[1] = "ashwin123"; // correct
newUser.push(1); // correct but doesnt follow the tuple restriction
