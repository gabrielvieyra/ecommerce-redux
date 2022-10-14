import { FC, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducers/user/userSlice';

// Nos importamos la libreria
import axios from 'axios';

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

  // Ejercicio: Hacer un formulario de logueo que me lleve a otra pagina
  return (
    <div className='loginContainer'>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='loginContainer__wrapper'>
          <label>Email address</label>
          <input type='email' placeholder='email' ref={emailField} />
        </div>
        <div className='loginContainer__wrapper'>
          <label>Password</label>
          <input type='password' placeholder='password' ref={passwordField} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
