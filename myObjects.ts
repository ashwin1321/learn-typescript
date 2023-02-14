const User = {
  name: "Ashwin",
  email: "ashwin@gmail.com",
  isActive: true,
};

// objects in normal javascripts
function createUser({ name: string, isPaid: boolean }) {}
let newUser = { name: "Ashwin", isPaid: true, email: "a@gmail.com" };
// createUser({ name: "Ashwin", isPaid: true });
createUser(newUser); // not a good way

// objects in typescript in a function
function createCourse(): { name: string; price: number } {
  // (): {This is the return type} {}
  return { name: "Ashwin", price: 2 };
}

export {};
