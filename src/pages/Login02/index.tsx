import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Axios
import axios from 'axios';

// Styles
import './styles.scss';

interface Inputs {
  email: string;
  password: string;
}

const Login02: FC = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState<Inputs>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    // Validamos que el campo no este vacio
    if (inputs.email.trim().length !== 0 && inputs.password.trim().length !== 0) {
      //   console.log('formulario valido');
      const User = {
        correo: inputs.email,
        contraseña: inputs.password,
      };
      setLoading(true);

      try {
        const { data } = await axios.post('http://localhost:4000/login', User);
        // console.log(data);
        const token = data.usuario.token;
        localStorage.setItem('token', token);
        setInputs({
          email: '',
          password: '',
        });
        navigate('/welcome');
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('formulario invalido');
    }

    setLoading(false);
  }

  return (
    <>
      <h1>Bienvenido a la pagina de Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
            value={inputs.email}
          />
        </div>

        <div>
          <label htmlFor='pasword'>Password</label>
          <input
            type='password'
            id='pasword'
            name='password'
            onChange={handleChange}
            value={inputs.password}
          />
        </div>

        <button type='submit'>{loading ? 'Cargando' : 'Iniciar Sesión'}</button>
        <div>
          <span>
            Aun no tenes una cuenta?{' '}
            <b style={{ cursor: 'pointer' }} onClick={() => navigate('/register')}>
              Registrate!
            </b>
          </span>
        </div>
      </form>
    </>
  );
};

export default Login02;
