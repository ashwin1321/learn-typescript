"use strict";
exports.__esModule = true;
var User = {
  name: "Ashwin",
  email: "ashwin@gmail.com",
  isActive: true,
};
// objects in normal javascripts
function createUser(_a) {
  var string = _a.name,
    boolean = _a.isPaid;
}
var newUser = { name: "Ashwin", isPaid: true, email: "a@gmail.com" };
// createUser({ name: "Ashwin", isPaid: true });
createUser(newUser); // not a good way
// objects in typescript in a function
function createCourse() {
  // (): {This is the return type} {}
  return { name: "Ashwin", price: 2 };
}
