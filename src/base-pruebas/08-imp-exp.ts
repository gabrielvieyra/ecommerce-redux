import heroes from '../data/heroes';

interface Character {
  id: number;
  name: string;
  owner: string;
}

export function getHeroeById(id: number): Character {
  return heroes.find(heroe => heroe.id === id);
}

export function getHeroesByOwner(owner: string): Array<Character> {
  return heroes.filter(heroe => heroe.owner === owner);
}
