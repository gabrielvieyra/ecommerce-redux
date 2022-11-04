import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Axios
import axios from 'axios';

// Styles
import './styles.scss';

interface Inputs {
  name: string;
  email: string;
  password: string;
}

const Register: FC = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState<Inputs>({
    name: '',
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
    if (
      inputs.name.trim().length !== 0 &&
      inputs.email.trim().length !== 0 &&
      inputs.password.trim().length !== 0
    ) {
      //   console.log('formulario valido');
      const newUser = {
        nombre: inputs.name,
        correo: inputs.email,
        contraseña: inputs.password,
      };
      setLoading(true);

      try {
        const getResponse = await axios.post('http://localhost:4000/register', newUser);
        console.log(getResponse.data);
        setInputs({
          name: '',
          email: '',
          password: '',
        });
        navigate('/login02');
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
      <h1>Bienvenido a la pagina de Registro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nombre</label>
          <input type='text' id='name' name='name' onChange={handleChange} value={inputs.name} />
        </div>

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

        <button type='submit'>{loading ? 'Cargando' : 'Ingresar'}</button>
        <div>
          <span>
            Ya tenes una cuenta?{' '}
            <b style={{ cursor: 'pointer' }} onClick={() => navigate('/login02')}>
              Inicia Sesion!
            </b>
          </span>
        </div>
      </form>
    </>
  );
};

export default Register;
