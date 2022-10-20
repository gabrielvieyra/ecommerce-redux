import { FC } from 'react';

// Styles
import './styles.scss';

interface ProductProps {
  title: string;
  price: number;
  category: string;
  id: number;
  handleCallback: (productId: number) => void;
  messageButton: string;
  colorButton: string;
}

const Product: FC<ProductProps> = ({
  title,
  price,
  category,
  id,
  handleCallback,
  messageButton,
  colorButton,
}) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>
        <b>Precio:</b> {price}
      </p>
      <p>
        <b>Category:</b> {category}
      </p>
      <button onClick={() => handleCallback(id)} style={{ backgroundColor: colorButton }}>
        {messageButton}
      </button>
    </div>
  );
};

export default Product;
