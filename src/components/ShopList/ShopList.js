import { ShopCard } from 'components/ShopCard/ShopCard';
import './ShopList.css';

export const ShopList = ({ shops, showProducts }) => {
  return (
    <ul className="shopList">
      {shops.map(shop => {
        return (
          <ShopCard key={shop._id} shop={shop} showProducts={showProducts} />
        );
      })}
    </ul>
  );
};
