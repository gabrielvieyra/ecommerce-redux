import { render, screen } from '@testing-library/react';

// Components
import TestApp from '../pages/TestApp';

describe('Pruebas en <TestApp />', () => {
  const subTitle = 'Soy un subtitulo';

  test('Debe de hacer match con el snapshot', () => {
    render(<TestApp title='Hola, Soy Goku' subTitle='No hay subtitulo' name='Gabriel Vieyra' />);
    // screen es el componente que estamos renderizando
    // screen.debug();
    expect(screen.getByText('Hola, Soy Goku')).toBeTruthy();
  });

  test('debe de mostrar el titulo en un h1', () => {
    render(<TestApp title='Hola, Soy Goku' subTitle='No hay subtitulo' name='Gabriel Vieyra' />);
    // getByRole me permite obtener un elemento por su etiqueta html
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('Hola, Soy Goku');
  });
});
