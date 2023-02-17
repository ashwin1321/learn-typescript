function getSearchProducts<T>(products: T[]): T {
  //   return 3; //  Type 'number' is not assignable to type 'T'. products is an array of type T
  const myIndex = 3;
  return products[3];
}

// generic arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
  // , indicates that it is a generic function
  // some code
  return products[3];
};
