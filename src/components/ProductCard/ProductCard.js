import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from 'redux/deliverySlice';
import { getOrder } from 'redux/selectors';
import Alert from 'react-bootstrap/Alert';

export function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);

  const order = useSelector(getOrder);

  const dispatch = useDispatch();

  function chooseQuantity(event) {
    if (event.target.textContent === '-') {
      if (!quantity) return;
      setQuantity(prevState => prevState - 1);
    }
    if (event.target.textContent === '+') {
      setQuantity(prevState => prevState + 1);
    }
  }

  function addItemToCard() {
    // if (order.some((el) => el._id === product._id)) {
    //     dispatch(
    //         addToCart({ ...product, quantity: quantity + el.quantity })
    //     );
    //     return;
    // }

    // const item = order.find((el) => el._id === product._id);

    // if (item) {
    //     // console.log(item.quantity + quantity);
    //     // console.log(item);
    //     addToCart({ ...item, quantity: quantity + item.quantity });
    //     return;
    // }

    // //     if (el._id === product._id) {
    // //         console.log("find");
    // //         const updateProduct = {
    // //             ...product,
    // //             quantity: el.quantity + quantity,
    // //         };
    // //         return updateProduct;
    // //         // console.log(updateProduct);
    // //         // dispatch(
    // //         //     addToCart({ ...product, quantity: quantity + el.quantity })
    // //         // );
    // //         // return;
    // //     }
    // // });

    dispatch(addToCart({ ...product, quantity: quantity ? quantity : 1 }));
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>
          <b>Ціна:</b>
          <span>
            {!quantity ? product.price : quantity * product.price} UAH
          </span>
        </Card.Text>
        <div>
          <p>
            <b>Кількість</b>
          </p>
          <ButtonGroup className="me-2" aria-label="Second group">
            <Button onClick={chooseQuantity}>-</Button>
            <Button>{quantity}</Button>
            <Button onClick={chooseQuantity}>+</Button>
          </ButtonGroup>
        </div>

        {order.find(el => el._id === product._id) ? (
          <Alert variant="success">Вже в корзині</Alert>
        ) : null}

        <Button variant="primary" onClick={addItemToCard}>
          Додати до корзини
        </Button>
      </Card.Body>
    </Card>
  );
}
