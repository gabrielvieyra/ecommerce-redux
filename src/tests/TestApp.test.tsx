import { render } from '@testing-library/react';

// Components
import TestApp from '../pages/TestApp';

describe('Pruebas en <TestApp />', () => {
  // test('Debe de hacer match con el snapshot', () => {
  // const title: string = 'Hola, Soy Goku';
  // const subTitle: string = 'No hay subtitulo';
  // const name: string = 'Gabriel Vieyra';

  // render() es una funcion que renderiza el componente en memoria
  // Este metodo retorna un objeto que expone ciertas propiedades, una de ellas es el container, este container se parece mucho a un dom que podemos utilizar para muchas cosas
  // const { container } = render(<TestApp title={title} subTitle={subTitle} name={name} />);
  // console.log(container);
  // expect(container).toMatchSnapshot();
  // });

  test('Debe de mostrar el titulo en un h1', () => {
    const title = 'Hola, Soy Goku';
    const subTitle = 'No hay subtitulo';
    const name = 'Gabriel Vieyra';
    // getByText me permite obtener un elemento por un texto
    // getByTestId me permite obtener un elemento en particular
    // toBeTruthy me permite probar que exista
    const { container, getByText, getByTestId } = render(
      <TestApp title={title} subTitle={subTitle} name={name} />
    );
    // Probamos que el componente TestApp tenga x titulo
    // expect(getByText(title)).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toBe(title);
  });
});
