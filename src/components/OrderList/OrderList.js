import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { getOrder, getIsloading } from 'redux/selectors';
import { addToCart, deleteItem } from 'redux/deliverySlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';

import './OrderList.css';

export function OrderList() {
  const order = useSelector(getOrder);
  const isLoading = useSelector(getIsloading);
  const dispatch = useDispatch();

  function deleteItemFromOrder(el) {
    dispatch(deleteItem(el));
  }

  return (
    <div className="order-list">
      {isLoading && <Loader />}
      {order.map(el => {
        return (
          <Card className="order-card" key={el._id}>
            <Card.Img className="image-order" variant="top" src={el.image} />
            <Card.Body>
              <Card.Text>{el.name}</Card.Text>
              <Card.Text>Ціна: {el.price * el.quantity} UAH</Card.Text>

              <div className="quantity">
                <p>
                  <b>Кількість</b>
                </p>
                <ButtonGroup className="me-2" aria-label="Second group">
                  <Button
                    onClick={() => {
                      el.quantity > 0
                        ? dispatch(
                            addToCart({
                              ...el,
                              quantity: el.quantity ? el.quantity - 1 : 0,
                            })
                          )
                        : dispatch(deleteItem(el));
                    }}
                    type="button"
                  >
                    -
                  </Button>
                  <Button>{el.quantity}</Button>
                  <Button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          ...el,
                          quantity: el.quantity + 1,
                        })
                      )
                    }
                    type="button"
                  >
                    +
                  </Button>
                </ButtonGroup>
              </div>

              <Button variant="primary" onClick={() => deleteItemFromOrder(el)}>
                Видалити
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
