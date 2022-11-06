import axios from 'axios';

// La propiedad create de axios recibe un objeto de configuracion donde en este caso le pasamos la propiedad baseURL que es la url base a la que haremos
// las peticiones
export const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

// Definimos la interfaz de la respuesta que nos va a dar la API
export interface ResponseAPI {
  userId: number;
  id: number;
  title: string;
  body: string;
}
