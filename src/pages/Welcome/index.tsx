import { FC, useState, useEffect } from 'react';

// Axios
import axios from 'axios';

// Styles
import './styles.scss';

const Welcome: FC = () => {
  const [name, setName] = useState<string>('');

  const token = localStorage.getItem('token');
  // console.log(getToken);

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  async function getUser(): Promise<void> {
    try {
      const { data } = await axios.get('http://localhost:4000/user', {
        headers: {
          token: token,
        },
      });
      // console.log(data);
      setName(data.nombre);
    } catch (err) {
      console.log(err);
    }
  }

  return <h1>Bienvenido: {name}</h1>;
};

export default Welcome;
