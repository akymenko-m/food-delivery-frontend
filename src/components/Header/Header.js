import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getOrder } from 'redux/selectors';

function ColorSchemesExample() {
  const cartQuantity = useSelector(getOrder);

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">DELIVERY</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Головна</Nav.Link>

            <Nav.Link href="/cart">
              Корзина {cartQuantity.length ? cartQuantity.length : null}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default ColorSchemesExample;
