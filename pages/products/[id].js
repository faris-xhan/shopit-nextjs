import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { ProductCard } from '../../components/ProductCard';

const product = {
  id: 1,
  title: 'Lorem ipsum dolor sit amet consectetur.',
  isSale: true,
  oldPrice: 1000,
  price: 500,
  mediaSrc: '/assets/images/products/product.jpg',
};
const Product = ({ productId }) => {
  return (
    <Container>
      <Col xs={12} md={6} xl={6}>
        <ProductCard product={product} />
      </Col>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      productId: params.id,
    },
  };
};

export default Product;
