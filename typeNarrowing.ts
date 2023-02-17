// type narrowing is a way to tell typescript that a variable is a certain type

function detectTypes(val: number | string) {
  //   return val.toLowerCase();  // Error

  if (typeof val === "string") {
    // type guard - tells typescript that val is a string
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    return "No ID provided";
  }
  return id.toLowerCase();
}
