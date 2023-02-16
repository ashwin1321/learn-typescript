// setter and getter are used to set and get the value of a property of a class that is private or protected

class User {
  private _courseCount = 1;
  readonly city: string;
  constructor(public email: string, public password: string) {}

  private deleteToken() {
    console.log("token deleted");
  }

  // getter
  get courseCount(): number {
    return this._courseCount;
  }

  // setter
  set courseCount(value: number) {
    // set cannot return anything
    if (value < 1) {
      throw new Error("value cannot be less than 1");
    }
    this._courseCount = value;
  }

  // getter
  get getEmail(): string {
    return `email@${this.email}`;
  }
}

const ashwin = new User("ashwin@gmail.com", "ashwin ");

// ashwin.deleteToken(); // Property 'deleteToken' is private and only accessible within class 'User'
