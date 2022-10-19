import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducers/user/userSlice';

// Components
import TextField from '../../components/TextField';

// Nos importamos la libreria axios
import axios from 'axios';

// FontAwesomeIcon
// Nos importamos el componente FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Nos importamos los iconos que queremos utilizar
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

// Styles
import './styles.scss';

// Interfaces
import { User, InputValue } from '../../types/types';

const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    // Validamos si todos los campos del formulario estan correctos
    if (!emailField.isInvalid && !passwordField.isInvalid) {
      setInvalidForm(false);
      setEmailField({ field: '', isInvalid: false, state: null });
      setPasswordField({ field: '', isInvalid: false, state: null });
    } else {
      setInvalidForm(true);
    }

    try {
      // Obtenemos la respuesta de la API
      // Si no le pasas un metodo a axios por defecto hace un get
      // Dentro de data va a estar lo que queremos
      const getResponse = await axios.get('https://fakestoreapi.com/users');
      // Obtenemos todos los usuarios
      const users = getResponse.data;
      // De todos los usuarios busco por email el usuario que quiero
      const userToLog = users.find((user: User) => {
        const { email } = user;
        return email === emailField.field;
      });
      // console.log(userToLog);

      if (userToLog) {
        // validamos si el password coincide con el del campo password
        if (userToLog.password === passwordField.field) {
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
  const [emailField, setEmailField] = useState<InputValue>({
    field: '',
    isInvalid: false,
    state: null,
  });
  const [passwordField, setPasswordField] = useState<InputValue>({
    field: '',
    isInvalid: false,
    state: null,
  });
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [invalidForm, setInvalidForm] = useState<boolean>(false);

  // Validamos el campo de tipo field
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    // files es una propiedad de este campo que nos va a retornar los archivos que la persona cargo
    // Capturamos la extension del archivo
    const fileExtension = e.target.files![0].name.split('.').pop()!.toLowerCase();
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    // Validamos si mi array de extensiones permitidas incluye la extension que me pasan
    allowedExtensions.includes(fileExtension)
      ? console.log('archivo valido')
      : console.log('archivo invalido');
  }

  // Validamos el checkbox
  // function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>): void {
  //   console.log(e.target.checked);
  //   setCheckbox(e.target.checked);
  // }

  // Ejercicio: Hacer un formulario de logueo que me lleve a otra pagina
  return (
    <div className='loginContainer'>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Email address'
          type='email'
          name='email'
          placeholder='Email address'
          errorMessage='Debes escribir un nombre de usuario'
          regularExpression={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
          state={emailField}
          setState={setEmailField}
        />
        <TextField
          label='Password'
          type='password'
          name='password'
          placeholder='Password'
          errorMessage='Debes escribir un password'
          // le vamos a pasar que expresion regular queremos utilizar para validar este input
          state={passwordField}
          setState={setPasswordField}
        />
        <div>
          <label htmlFor='avatar'>Sube tu imagen:</label>
          {/* multiple nos da la posibilidad de cargar multiples archivos */}
          <input type='file' id='avatar' onChange={handleChange} />
        </div>
        <div className='loginContainer__wrapperRememberMe'>
          <input
            type='checkbox'
            id='checkbox'
            name='chekbox'
            checked={checkbox}
            onChange={e => setCheckbox(e.target.checked)}
          />
          <label htmlFor='checkbox'>Remember me</label>
        </div>
        {invalidForm && (
          <div className='loginContainer__errorMessagewrapper'>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error: </b>Por favor rellena el formulario correctamente
            </p>
          </div>
        )}
        <button type='submit'>Sign in</button>
      </form>
    </div>
  );
};

export default Login;
