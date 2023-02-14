// type Alias
type user = {
  name: string;
  email: string;
  isActive: boolean;
};

function GetUser(user: user): user {
  return user;
}

GetUser({ name: "", email: "", isActive: true });

export {};
