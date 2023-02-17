import { getUser, getUserActive } from '../../base-pruebas/05-funciones';

interface User {
  uid: string;
  username: string;
}

describe('Pruebas en 05-funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    const testUser: User = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };
    const user: User = getUser();

    // toStrictEqual o toEqual lo usamos cuando queremos evaluar un objeto, se suele usar mas el toEqual
    expect(testUser).toEqual(user);
  });

  test('getUserActive debe de retornar un objeto', () => {
    const name: string = 'Gabriel';
    const user: User = getUserActive(name);
    // console.log(userActive);

    expect(user).toEqual({
      uid: 'ABC567',
      username: name,
    });
  });
});
