import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { ProductList } from 'components/ProductList/ProductList';
import { ShopList } from 'components/ShopList/ShopList';
import './HomePage.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getShops,
  getIsloading,
  getProducts,
  getCurShop,
} from 'redux/selectors';
import { fetchShops, fetchProducts } from 'redux/operations';
import { setCurrentShop } from 'redux/deliverySlice';

const HomePage = () => {
  const shops = useSelector(getShops);
  const products = useSelector(getProducts);
  const curShop = useSelector(getCurShop);
  const isLoading = useSelector(getIsloading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  async function showProducts(shopId) {
    try {
      await dispatch(fetchProducts());
      dispatch(setCurrentShop(shopId));
    } catch (error) {
      console.log(error.message);
    }
  }

  const filteredProducts = products?.filter(el => el.owner === curShop);

  return (
    <div>
      {isLoading && <Loader />}

      <h1 style={{ opacity: '0' }}>Delivery food</h1>
      <div className="container">
        <ShopList shops={shops} showProducts={showProducts} />

        {isLoading ? <Loader /> : <ProductList products={filteredProducts} />}
      </div>
    </div>
  );
};

export default HomePage;
