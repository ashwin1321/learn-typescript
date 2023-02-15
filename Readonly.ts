type User = {
  readonly _id: string; //now _id is readonly and can't be changed
  name: string;
  email: string;
  isActive: boolean;
  credit?: number; //? means optional
};

type cardNumber = {
  cardnumber: String;
};

type cardDate = {
  carddate: String;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let myUser: User = {
  _id: "123",
  name: "John",
  email: "email@gmail.com",
  isActive: false,
};

myUser.email = "as@gmail.com";
// myUser._id = "1234"; //error
