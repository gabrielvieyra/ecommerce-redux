export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
}

export interface ProductType {
  id: number;
  title: string;
  price: number;
  category: string;
}

export interface InputValue {
  field: string;
  isInvalid: boolean;
  state: null | 'error' | 'success' | 'disabled';
}
