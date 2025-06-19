interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  country: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  image: string;
  department: string;
  phone: number;
  address: Address;
}
