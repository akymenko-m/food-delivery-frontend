import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder, getIsloading } from 'redux/selectors';
import { sendOrder } from 'redux/operations';
import Toast from 'react-bootstrap/Toast';
import Loader from 'components/Loader/Loader';

export function FormOrder({ setModalShow }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const order = useSelector(getOrder);
  const isLoading = useSelector(getIsloading);

  const dispatch = useDispatch();
  const total = order.reduce((ac, el) => {
    return ac + el.price * el.quantity;
  }, 0);

  const totalOrder = {
    userData: formData,
    order: order,
    totalPrice: total,
  };

  const inputChange = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    setFormData(prevState => {
      return {
        ...prevState,
        [inputName]: inputValue,
      };
    });
  };

  const findDuplicate = () => {
    for (let i = 0; i < order.length; i++) {
      for (let j = i + 1; j < order.length; j++) {
        if (order[i]['owner'] === order[j]['owner']) {
          return false;
        }
        return true;
      }
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isDuplicate = findDuplicate();

    if (isDuplicate) {
      setShow(true);
      return;
    }

    if (!order.length) {
      setShow(true);
      return;
    }

    reset();
    dispatch(sendOrder(totalOrder));
    setModalShow(true);
  };

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
    });
  };

  return (
    <>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Ім'я</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введи своє ім'я"
            onChange={inputChange}
            name="name"
            value={formData.name}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Електронна пошта</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={inputChange}
            name="email"
            value={formData.email}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Номер телефону</Form.Label>
          <Form.Control
            type="tel"
            placeholder="+380"
            onChange={inputChange}
            name="phone"
            value={formData.phone}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Адреса</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            onChange={inputChange}
            name="address"
            value={formData.address}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Відправити замовлення
        </Button>

        {show && (
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={2000}
            autohide
            bg="warning"
          >
            <Toast.Header>
              {order.length
                ? 'В одному замовленні можуть бути товари тільки з одного магазину'
                : 'Ваша корзина порожня'}
            </Toast.Header>
          </Toast>
        )}
      </Form>
    </>
  );
}
