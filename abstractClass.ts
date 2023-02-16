// abstract class is similar to interfaces
// objects cannot be created from a abstract class

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getdata(): void;
}

// const test = new TakePhoto("auto", "test"); // Cannot create an instance of an abstract class.

class Instagram extends TakePhoto {
  // if you want to use the constructor of the parent class, you need to use super keyword to call the constructor of the parent class.
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter); // super keyword is used to call the constructor of the parent class
  }

  // this method is mandatory to be implemented in the child class as it is abstract in the parent class.
  getdata(): void {
    console.log("get data");
  }
}

const ashwin = new Instagram("auto", "test", 10);

export {};
