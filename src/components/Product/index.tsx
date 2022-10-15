import { FC } from 'react';

// Styles
import './styles.scss';

interface ProductProps {
  title: string;
  price: number;
  category: string;
}

const Product: FC<ProductProps> = ({ title, price, category }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>
        <b>Precio:</b> {price}
      </p>
      <p>
        <b>Category:</b> {category}
      </p>
    </div>
  );
};

export default Product;
