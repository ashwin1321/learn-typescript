function addTwo(num: number): number {
  // return type is number

  //   num.toUppercase();
  //   return "hello";
  return num + 2;
}

function getUpper(
  name: String,
  email: string,
  id: number,
  idpaid: boolean = false
) {
  return name.toUpperCase();
}

addTwo(5);
getUpper("hello", "abc", 1);

// ---> it will give error <---
// function getaval(val: string): boolean {
//   if (typeof val === "string") {
//     return true;
//   } else {
//     return "hello";
//   }
// }

const getAns = (s: string): string => {
  return "";
};

const color = ["red", "green", "blue"];
// const color = [1, 2, 3];
color.map((color): string => {
  return `color is ${color}`;
});

function consoleError(errmsg: string): void {
  // return type is void
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  // some function will never return anything
  throw new Error(errmsg);
}

export {};
