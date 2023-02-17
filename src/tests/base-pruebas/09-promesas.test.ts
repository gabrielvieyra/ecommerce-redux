import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas';

interface Character {
  id: number;
  name: string;
  owner: string;
}

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe de retornar un heroe', done => {
    getHeroeByIdAsync(5).then(heroe => {
      //   console.log(heroe);
      expect(heroe).toEqual({
        id: 5,
        name: 'wolverine',
        owner: 'Marvel',
      });
      done();
    });
  });

  test('getHeroeByIdAsync debe de obtener un error si el heroe no existe', done => {
    const id: number = 8;
    getHeroeByIdAsync(8).catch(err => {
      console.log(err);
      expect(err).toBe(`No se pudo encontrar el heroe ${id}`);
      done();
    });
  });
});
