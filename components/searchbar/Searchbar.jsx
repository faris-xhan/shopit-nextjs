import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import { useState } from 'react';

export const Searchbar = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="none" onClick={handleShow}>
        <SearchIcon fontSize={20} />
      </Button>
      <Offcanvas
        placement="bottom"
        className="p-1 "
        show={show}
        style={{ minHeight: '490px' }}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton className="px-4">
          <h1>Search for product</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search for product"
            />
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
