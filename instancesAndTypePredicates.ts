// instance checks if the object is an instance of a class

function logValue(x: Date | string) {
  if (x instanceof Date) {
    // instance check if x is a Date
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// Type Predicates are functions that return a boolean
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}
