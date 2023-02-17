import { getGreeting } from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe de retornar "Hola Gabriel"', () => {
    const name: string = 'Gabriel';
    const message: string = getGreeting(name);

    expect(message).toBe(`Hola ${name}`);
  });
});
