interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponname: string): number;
}

// we can redefine the interface with the same name and it will merge the two interfaces together
interface User {
  githubToken: string;
}

// we can also extend the interface or say inherit the interface
interface Admin extends User {
  // multiple inheritance can be done same as in other languages
  role: "admin" | "user";
}

const ashwin: User = {
  dbId: 2,
  email: "ashwin@gmail.com",
  userId: 2211,
  githubToken: "1234567890", // this is allowed because we have merged the two interfaces
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "Ashwin") => {
    return 10;
  },
};

const test: Admin = {
  dbId: 2,
  email: "ashwin@gmail.com",
  userId: 2211,
  githubToken: "1234567890", // this is allowed because we have merged the two interfaces
  role: "admin", // this is allowed because we have extended the interface
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "Ashwin") => {
    return 10;
  },
};

// interface vs type alias
// type alias can be used to create a union of types
// type User = {
//     readonly dbId: number;
//     email: string;
// }
// type Admin = {
//     role: "admin" | "user";
// }
// type UserAdmin = User & Admin;

// type alias cannot be changed after declaration
// type User = {
//     readonly dbId: number;
//     email: string;
// }
// type Admin = {
//     role: "admin" | "user";
// }
//  type Admin = {
//     role: "test";
// }
