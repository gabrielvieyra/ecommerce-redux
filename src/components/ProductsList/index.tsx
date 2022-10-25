import { FC } from 'react';

// Components
import Product from '../Product';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../../reducers/cart/cartSlice';

// Interface
import { ProductType } from '../../types/types';

// Styles
import './styles.scss';

// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface ProductsListProps {
  products: Array<ProductType>;
}

const ProductsList: FC<ProductsListProps> = ({ products }) => {
  const dispatch = useDispatch();
  const { productsList } = useSelector(state => state.cart);
  // console.log(cart);

  function handleAddOrRemoveProduct(productId: number): void {
    // Busco ese producto en mi array de productos y luego hago el dispatch
    const product = products.find(product => product.id === productId);
    // console.log(product);
    // Validamos que si el producto esta en el carrito voy a hacer un dispatch para eliminar ese producto del carrito
    // Si el producto no esta en el carrito voy a hacer un dispatch agregando el producto al carrito
    if (productsList.find(product => product.id === productId)) {
      dispatch(removeProductFromCart(productId));
    } else {
      dispatch(addProductToCart(product));
    }
  }

  // Prueba de una lista dinamica:
  interface Link {
    text: string;
    icon: IconDefinition;
  }

  const links: Array<Link> = [
    { text: 'TimesCircle', icon: faTimesCircle },
    { text: 'CheckCircle', icon: faCheckCircle },
  ];

  return (
    <>
      <h2>Listado de productos</h2>
      <div className='productsListContainer'>
        {products.map((product, index) => {
          const { id, title, price, category } = product;
          return (
            <Product
              key={id ? id : index}
              title={title}
              price={price}
              category={category}
              id={id}
              handleCallback={handleAddOrRemoveProduct}
              messageButton={
                productsList.find(product => product.id === id) ? 'Remove to Cart' : 'Add to Cart'
              }
              colorButton={productsList.find(product => product.id === id) ? 'red' : 'green'}
            />
          );
        })}
      </div>
      <hr style={{ margin: '1rem 0' }} />
      <div style={{ display: 'flex', gap: '12px' }}>
        {links.map((link, index) => {
          const { text, icon } = link;
          return (
            <div key={index}>
              <FontAwesomeIcon icon={icon} />
              <span>{text}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsList;
