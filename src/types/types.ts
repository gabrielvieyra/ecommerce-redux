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

// CloneJira
export interface Candidate {
  id: string;
  name: string;
  step: 'Entrevista inicial' | 'Entrevista tecnica' | 'Oferta' | 'Rechazo' | 'Asignacion';
  comments: string;
}
