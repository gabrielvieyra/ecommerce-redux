import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Axios
import axios from 'axios';

// Styles
import './styles.scss';

const Welcome: FC = () => {
  const [name, setName] = useState<string>('');

  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, [id]);

  async function getUser(): Promise<void> {
    try {
      const getResponse = await axios.get(`http://localhost:4000/user/${id}`);
      // console.log(getResponse);
    } catch (err) {
      console.log(err);
    }
  }

  return <h1>Bienvenido: {name}</h1>;
};

export default Welcome;
