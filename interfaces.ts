interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponname: string): number;
}

const ashwin: User = {
  dbId: 2,
  email: "ashwin@gmail.com",
  userId: 2211,
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "Ashwin") => {
    return 10;
  },
};

ashwin.email = "as@gmail.com";

export {};
