import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { List as ListIcon } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { DrawerMenu } from './DrawerMenu';

export const Drawer = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="none" onClick={handleShow}>
        <ListIcon fontSize={20} />
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopit</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <DrawerMenu />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
