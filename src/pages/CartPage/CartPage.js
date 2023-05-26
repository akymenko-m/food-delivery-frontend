import { useState } from 'react';
import Loader from 'components/Loader/Loader';
import { FormOrder } from 'components/FormOrder/FormOrder.js';
import { OrderList } from 'components/OrderList/OrderList';
import { useSelector } from 'react-redux';
import { getOrder, getIsloading } from 'redux/selectors';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';

const CartPage = () => {
  const isLoading = useSelector(getIsloading);
  const order = useSelector(getOrder);
  const [modalShow, setModalShow] = useState(false);

  const total = order.reduce((ac, el) => {
    return ac + el.price * el.quantity;
  }, 0);

  return (
    <>
      <div>
        {isLoading && <Loader />}

        <div className="container">
          <FormOrder setModalShow={setModalShow} />

          <OrderList order={order} />
        </div>
        <Alert variant="primary">
          <b>Загальна сумма:</b> {total} UAH
        </Alert>
      </div>

      {modalShow && (
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <p>Ваше замовлення оформлене!</p>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default CartPage;
