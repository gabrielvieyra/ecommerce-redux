import { getImage } from '../../base-pruebas/11-async-await';

describe('Pruebas en 11-async-await.ts', () => {
  test('getImage debe de retornar un error si no tenemos api key', async () => {
    const response: string = await getImage();
    console.log(response);

    expect(response).toBe('No se encontro la imagen');
  });
});
