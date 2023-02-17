import { getHeroeById } from './08-imp-exp';

interface Character {
  id: number;
  name: string;
  owner: string;
}

export function getHeroeByIdAsync(id: number): Promise<Character> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);

      if (p1) {
        resolve(p1);
      } else {
        reject(`No se pudo encontrar el heroe ${id}`);
      }
    }, 1000);
  });
}
