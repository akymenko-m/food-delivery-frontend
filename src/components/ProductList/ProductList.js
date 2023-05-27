import { ProductCard } from 'components/ProductCard/ProductCard';
import './ProductList.css';
import Image from 'react-bootstrap/Image';

export const ProductList = ({ products }) => {
  return (
    <div>
      {products.length < 1 ? (
        <div className="productContainer">
          <p style={{ textAlign: 'center' }}>Вибери магазин..</p>
          <Image
            src="https://res.cloudinary.com/dxgfojstk/image/upload/c_scale,q_98,w_1000/v1685011103/Food/shoose-shop_pwxjy9.avif"
            fluid
          />
        </div>
      ) : (
        <ul className="productList">
          {products.map(product => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </ul>
      )}
    </div>
  );
};
