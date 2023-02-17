import { returnArray } from '../../base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
  test('debe de retornar un string y un number', () => {
    const [letters, numbers]: Array<string | number> = returnArray();

    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');
  });
});
