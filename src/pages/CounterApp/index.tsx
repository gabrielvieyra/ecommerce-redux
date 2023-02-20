import { FC, useState } from 'react';

// Styles
import './styles.scss';

interface CounterAppProps {
  value: number;
}

const CounterApp: FC<CounterAppProps> = ({ value }) => {
  const [counter, setCounter] = useState<number>(value);

  function handleAdd(): void {
    // console.log('handleAdd');
    setCounter(counter + 1);
  }

  function handleSubstract(): void {
    // console.log('handleSubstract');
    setCounter(counter - 1);
  }

  function handleReset(): void {
    setCounter(value);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button aria-label='btn-reset' onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default CounterApp;
