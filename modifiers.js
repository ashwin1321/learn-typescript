"use strict";
// class User {
//   public email: string;
//   protected password: string;
//   #namee: string = "ashwin"; // also private field
//   private readonly id: number = 1;
//   constructor(email: string, password: string) {
//     this.email = email;
//     this.password = password;
//   }
// }
exports.__esModule = true;
// const ashwin = new User("ashwin@gmaill.com", "ashwin ");
// ashwin.id;     // Property 'id' is private and only accessible within class 'User'.
// ashwin.password; // Property 'password' is protected and only accessible within class 'User' and its subclasses.
var User = /** @class */ (function () {
    function User(email, password, userId) {
        this.email = email;
        this.password = password;
        this.userId = userId;
    }
    return User;
}());
var ashwin = new User("ashwin@gmail.com", "ashwin ", "ashwin");
