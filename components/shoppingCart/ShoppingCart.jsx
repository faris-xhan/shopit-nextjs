import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Cart as ShoppingCardIcon } from 'react-bootstrap-icons';
import { useState } from 'react';

export const ShoppingCart = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="none" onClick={handleShow}>
        <ShoppingCardIcon fontSize={20} />
      </Button>
      <Offcanvas
        placement="end"
        className="p-1 "
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header className="border-bottom" closeButton>
          <h4>Your Cart</h4>
        </Offcanvas.Header>
        <Offcanvas.Body>Cart</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
