// discriminates the union type

// here kind is a discriminant

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }

  //   return shape.side ** 2;
}

// exhaustive check
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.width * shape.height;

    // never type is a type that has no values
    // default method doesnot run if all the cases are covered else it will throw an error
    default:
      const _defaultforShape: never = shape;
      return _defaultforShape;
  }
}
