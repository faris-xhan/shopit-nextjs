import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { ProductCard } from './ProductCard';

const product = {
  id: 1,
  title: 'Lorem ipsum dolor sit amet consectetur.',
  isSale: true,
  oldPrice: 1000,
  price: 500,
  mediaSrc: '/assets/images/products/product.jpg',
};
export const TrendyItemsSection = (props) => {
  const [selectedItem, setSelectedItem] = useState('handbags');

  return (
    <Container className="my-4 ">
      <h1 className="text-center"> What trendy today ? </h1>
      <Nav
        variant="pills"
        defaultActiveKey={selectedItem}
        onSelect={(selectedKey) => setSelectedItem(selectedKey)}
        className="justify-content-center"
      >
        <Nav.Item>
          <Nav.Link eventKey="handbags">Handbags</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="footwear">Footwear</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="gloves">Gloves</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="jwellery">Jwellery</Nav.Link>
        </Nav.Item>
      </Nav>
      <Container className="p-2">
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Col xs={6} md={4} xl={3} key={item} className="p-1 ">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
