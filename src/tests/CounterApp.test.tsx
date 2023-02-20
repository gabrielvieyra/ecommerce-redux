import { render, screen, fireEvent } from '@testing-library/react';

// Components
import CounterApp from '../pages/CounterApp';

describe('Pruebas en <CounterApp />', () => {
  const initialValue = 100;

  test('Debe de mostrar un valor inicial de 100 <CounterApp value={100} />', () => {
    render(<CounterApp value={initialValue} />);
    // screen.debug();
    // expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(initialValue.toString());
  });

  test('debe de incrementar con el boton +1', () => {
    // Inicializamos nuestro sujeto de pruebas
    render(<CounterApp value={initialValue} />);

    const btnAdd = screen.getByText('+1');
    // console.log(btnAdd, 'btnAdd');
    fireEvent.click(btnAdd);
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('101');
  });

  test('debe de decrementar con el boton -1', () => {
    // Inicializamos nuestro sujeto de pruebas
    render(<CounterApp value={initialValue} />);

    const btnSubstract = screen.getByText('-1');

    fireEvent.click(btnSubstract);
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('99');
  });

  test('debe de funcionar el boton de reset', () => {
    // 1. Inicializamos nuestro sujeto de pruebas
    render(<CounterApp value={initialValue} />);

    // 2. Al sujeto de pruebas le aplicamos un estimulo
    const btnReset = screen.getByRole('button', { name: 'btn-reset' });
    fireEvent.click(btnReset);

    // 3. Observamos el comportamiento esperado despues del estimulo
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(initialValue.toString());
  });
});
