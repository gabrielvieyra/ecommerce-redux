const cities = ['Ciudad de Mexico', 'Bogota', 'Lima', 'Buenos Aires', 'Guadalajara'];

function randomString() {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
}

describe('Probar funcionalidades de randomString', () => {
  test('Probar la funcionalidad', () => {
    // Probamos que la funcion randomString retorne un string
    // expect(typeof (randomString())).toBe('string');
    // el test falla por que al guardar se formatea el codigo
    expect(typeof randomString()).toBe('string');
  });

  test('Comprobar que no existe una ciudad', () => {
    expect(randomString()).not.toMatch(/Cordoba/);
  });
});
