import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import ProductsList from '../../components/ProductsList';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { unsetUser } from '../../reducers/user/userSlice';

// Axios
import axios from 'axios';

// Interface
import { ProductType } from '../../types/types';

// Styles
import './styles.scss';

const Home: FC = () => {
  // Voy a consumir la informacion de la persona
  const { email, fullName, token } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [products, setProducts] = useState<Array<ProductType>>([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts(): Promise<void> {
    try {
      const getResponse = await axios.get('https://fakestoreapi.com/products');
      // console.log(getResponse.data);
      setProducts(getResponse.data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogout(): void {
    dispatch(unsetUser());
    navigate('/');
  }

  // Ejercicio: Hacer una consulta al endpoint de products y mostrar los productos
  return (
    <>
      <h2>Home</h2>
      <p>
        Welcome {fullName} / {email}
      </p>
      <button onClick={handleLogout}>Log out</button>
      <hr />
      <ProductsList products={products} />
    </>
  );
};

export default Home;
