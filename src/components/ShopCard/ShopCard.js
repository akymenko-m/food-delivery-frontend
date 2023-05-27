import Card from 'react-bootstrap/Card';
import './ShopCard.css';

export function ShopCard({ shop, showProducts }) {
  return (
    <Card
      className="shop-card"
      style={{ cursor: 'pointer' }}
      onClick={() => showProducts(shop._id)}
    >
      <div className="image-shop-container">
        <Card.Img
          variant="top"
          src={shop.poster}
          style={{ objectFit: 'contain', height: 'inherit' }}
        />
      </div>
      <Card.Body>
        <Card.Title className="shop-name">{shop.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
