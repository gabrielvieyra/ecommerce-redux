import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';

interface Character {
  id: number;
  name: string;
  owner: string;
}

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe de retornar un heroe por ID', () => {
    const heroe: Character = getHeroeById(3);
    // console.log(heroe);

    expect(heroe).toEqual({
      id: 3,
      name: 'Superman',
      owner: 'DC',
    });
  });

  test('getHeroeById debe de retornar undefined si no existe', () => {
    const heroe: Character = getHeroeById(8);
    // console.log(heroe);

    expect(heroe).toBe(undefined);
  });

  // TODO:
  // Debe de retornar un arreglo con los heroes de DC
  // Length === 3
  // toEqual al arreglo filtrado
  test('getHeroesByOwner debe de regresar heroes de DC', () => {
    const dcHeroes: Array<Character> = getHeroesByOwner('DC');
    // console.log(dcHeroes);

    expect(dcHeroes.length).toBe(3);
    expect(dcHeroes).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ]);
  });

  // Debe de retornar un arreglo con los heroes de Marvel
  // Length === 2
  test('getHeroesByOwner debe de regresar heroes de Marvel', () => {
    const heroes: Array<Character> = getHeroesByOwner('Marvel');
    console.log(heroes);

    expect(heroes.length).toBe(2);
  });
});
