interface Database {
  connection: string;
  username: string;
  password: string;
}

// function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
// anotherFunction(1, "string"); // Error - string is not assignable to type database
anotherFunction(1, {
  connection: "string",
  username: "string",
  password: "string",
});

// class Type in ts

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
