import { FC } from 'react';

// Components
import Product from '../Product';

// Interface
import { ProductType } from '../../types/types';

// Styles
import './styles.scss';

interface ProductsListProps {
  products: Array<ProductType>;
}

const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <>
      <h2>Listado de productos</h2>
      <div className='productsListContainer'>
        {products.map((product, index) => {
          const { id, title, price, category } = product;
          return <Product key={id ? id : index} title={title} price={price} category={category} />;
        })}
      </div>
    </>
  );
};

export default ProductsList;
