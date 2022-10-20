import { FC } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../reducers/cart/cartSlice';

// Styles
import './styles.scss';

const Cart: FC = () => {
  const { productsList } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  function handleRemoveProduct(productId: number): void {
    // console.log(productId);
    dispatch(removeProductFromCart(productId));
  }

  return (
    <>
      <h1>Mis productos</h1>
      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: '24px' }}>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((product, index) => {
            const { id, title, price, category } = product;
            return (
              <tr
                key={id ? id : index}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: '24px' }}
              >
                <th>{id}</th>
                <th>{title}</th>
                <th>{price}</th>
                <th>{category}</th>
                <th>
                  <button onClick={() => handleRemoveProduct(id)}>Delete</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Cart;
