import React, { FC } from 'react';

// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// Interface
import { InputValue } from '../../types/types';

// Styles
import './styles.scss';

interface TextFieldProps {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  errorMessage: string;
  regularExpression?: RegExp;
  autoComplete?: string;
  state: InputValue;
  setState: (inputValue: InputValue) => void;
}

const TextField: FC<TextFieldProps> = ({
  label,
  placeholder,
  type,
  name,
  errorMessage,
  regularExpression,
  autoComplete = 'off',
  state,
  setState,
}) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    // ...state, hacemos una copia del objeto
    // field: e.target.value, de ese objeto sobreescribimos el valor de la propiedad field
    setState({ ...state, field: e.target.value });
  }

  function validateInput(): void {
    validateEmptyField();

    if (regularExpression) {
      validateEmailFormat();
    }
  }

  // Validamos que el campo no este vacio
  function validateEmptyField(): void {
    // state.field es un string que si yo le hago un .length voy a obtener la cantidad de caracteres
    state.field.trim().length === 0
      ? setState({ ...state, isInvalid: true, state: 'error' })
      : setState({ ...state, isInvalid: false, state: 'success' });
  }

  // Validamos que el email coincida con el formato de email
  function validateEmailFormat(): void {
    // Paso 01: Buscamos la regex que nesecitamos
    // const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    // Paso 02: tuRegex.test(value), entreparentesis pasas el valor al cual vas a comparar con tu expresión regular
    // regex.test(state.field) ? console.log('email valido') : console.log('email invalido');
    regularExpression!.test(state.field)
      ? setState({ ...state, isInvalid: false, state: 'success' })
      : setState({ ...state, isInvalid: true, state: 'error' });
  }

  return (
    <div className='textFieldContainer'>
      <label htmlFor={name}>{label}</label>
      <div className='textFieldContainer__groupInput'>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={state.field}
          className={
            state.isInvalid
              ? `textFieldContainer__groupInput-input textFieldContainer__groupInput-input--error`
              : `textFieldContainer__groupInput-input`
          }
          onChange={handleChange}
          onBlur={validateInput}
        />
        <FontAwesomeIcon
          icon={state.isInvalid ? faTimesCircle : faCheckCircle}
          className={`textFieldContainer__groupInput-iconValidation textFieldContainer__groupInput-iconValidation--${state.state}`}
        />
      </div>
      {state.isInvalid && <span className='textFieldContainer__errorMessage'>{errorMessage}</span>}
    </div>
  );
};

export default TextField;
