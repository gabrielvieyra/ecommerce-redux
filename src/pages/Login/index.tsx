import { FC, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducers/user/userSlice';

// Nos importamos la libreria
import axios from 'axios';

// FontAwesomeIcon
// Nos importamos el componente FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Nos importamos los iconos que queremos utilizar
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

// Styles
import './styles.scss';

// Interface
import { User } from '../../types/types';

const Login: FC = () => {
  // El useRef me permite obtener un elemento, de ese lemento puedo tambien obtener su valor y entreparentesis le pasamos el valor inicial
  const emailField = useRef('');
  // obtenemos el elemento
  // console.log(emailField.current);
  // obtenemos el valor del elemento
  // console.log(emailField.current.value);
  const passwordField = useRef('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    try {
      // Obtenemos la respuesta de la API
      // si no le pasas un metodo a axios por defecto hace un get
      // dentro de data va a estar lo que queremos
      const getResponse = await axios.get('https://fakestoreapi.com/users');
      // Obtenemos todos los usuarios
      const users = getResponse.data;
      // De todos los usuarios busco por email el usuario que quiero
      const userToLog = users.find((user: User) => {
        const { email } = user;
        return email === emailField.current.value;
      });
      //   console.log(userToLog);

      if (userToLog) {
        // validamos si el password coincide con el del campo password
        if (userToLog.password === passwordField.current.value) {
          // voy a hacer un dispatch cuando tenga un usuario valido
          // console.log('Credenciales validas');
          dispatch(
            setUser({
              email: userToLog.email,
              fullName: `${userToLog.name.firstname} ${userToLog.name.lastname}`,
              token: Date.now(),
            })
          );
          // Una vez que la persona se halla logueado, la voy a redirigir
          navigate('/home');
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  // Validacion de formularios
  const [error, setError] = useState<boolean>(false);

  function handleBlur(e: React.FocusEvent<HTMLInputElement>): void {
    // Validamos que el campo no este vacio
    const emailFieldValue = e.target.value;
    // emailFieldValue es un string que si yo le hago un .length voy a obtener la cantidad de caracteres
    emailFieldValue.length === 0 ? setError(true) : setError(false);
  }

  // Ejercicio: Hacer un formulario de logueo que me lleve a otra pagina
  return (
    <div className='loginContainer'>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='loginContainer__wrapper'>
          <label htmlFor='email'>Email address</label>
          <div className='loginContainer__wrapper-groupInput'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email address'
              autoComplete='off'
              ref={emailField}
              onBlur={handleBlur}
              className={
                error
                  ? `loginContainer__wrapper-groupInput-input loginContainer__wrapper-groupInput-input--error`
                  : `loginContainer__wrapper-groupInput-input`
              }
            />
            <FontAwesomeIcon
              icon={faCheckCircle}
              className='loginContainer__wrapper-groupInput-iconValidation'
            />
          </div>
          {error && (
            <span className='loginContainer__wrapper-error'>
              Debes escribir un nombre de usuario
            </span>
          )}
        </div>

        <div className='loginContainer__wrapper'>
          <label htmlFor='clave'>Password</label>
          <div className='loginContainer__wrapper-groupInput'>
            <input
              type='password'
              name='password'
              id='clave'
              placeholder='Password'
              ref={passwordField}
              onBlur={handleBlur}
              className={
                error
                  ? `loginContainer__wrapper-groupInput-input loginContainer__wrapper-groupInput-input--error`
                  : `loginContainer__wrapper-groupInput-input`
              }
            />
            <FontAwesomeIcon
              icon={faCheckCircle}
              className='loginContainer__wrapper-groupInput-iconValidation'
            />
          </div>
          {error && (
            <span className='loginContainer__wrapper-error'>Debes escribir un password</span>
          )}
        </div>
        <div className='loginContainer__wrapperRememberMe'>
          <input type='checkbox' id='checkbox' />
          <label htmlFor='checkbox'>Remember me</label>
        </div>
        {false && (
          <div className='loginContainer__errorMessagewrapper'>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error: </b>Por favor rellena el formulario correctamente
            </p>
          </div>
        )}
        {/* si al boton le agregamos el type submit, cuando lo presionesmos va a enviar el formulario */}
        <button type='submit'>Sign in</button>
      </form>
    </div>
  );
};

export default Login;
