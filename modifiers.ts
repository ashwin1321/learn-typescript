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

// const ashwin = new User("ashwin@gmaill.com", "ashwin ");
// ashwin.id;     // Property 'id' is private and only accessible within class 'User'.
// ashwin.password; // Property 'password' is protected and only accessible within class 'User' and its subclasses.

class User {
  readonly city: string;
  constructor(
    public email: string,
    public password: string,
    private userId: string
  ) {}
}

const ashwin = new User("ashwin@gmail.com", "ashwin ", "ashwin");

export {};
