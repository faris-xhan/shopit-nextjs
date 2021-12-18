import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { ProductCard } from './ProductCard';
import { ProductList } from './ProductsList';

export const TrendyItemsSection = ({ products }) => {
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
      <ProductList products={products} />
    </Container>
  );
};
