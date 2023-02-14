function addTwo(num: number) {
  //   num.toUppercase();
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

export {};
