import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductCard } from './ProductCard';

export const ProductList = (props) => {
  const { products } = props;
  return (
    <Container className="p-2">
      <Row>
        {products.map((p, idx) => (
          <Col xs={6} md={4} xl={3} key={idx} className="p-1 ">
            <ProductCard
              product={{
                ...p,
                id: p._id,
                mediaSrc: '/assets/images/products/product.jpg',
              }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
