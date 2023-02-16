// generics in typescript are used to create reusable components

//normal function
const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

//generic function
function identityThree<Type>(val: Type): Type {
  // Type is a placeholder for any type
  return val;
}
identityThree("ashwin");
identityThree(true);

function identityFour<T>(val: T): T {
  // T is short for Type . T can be any letter but has to be same in the function signature and return type
  return val;
}

interface Bottle {
  barnd: string;
  type: number;
}

identityFour<Bottle>({ barnd: "pepsi", type: 1 });
