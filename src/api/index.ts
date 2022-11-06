// Aca tenemos una funcion que es la que tenemos que implementar que se va a encargar de traer nuestros candidatos desde el archivo y darselos a
// nuestro componente para que los pueda mostrar
import { Candidate } from '../types/types';

export default {
  candidates: {
    list: (): Promise<Array<Candidate>> =>
      import('./candidates.json').then(res => res.default as Array<Candidate>),
  },
};
