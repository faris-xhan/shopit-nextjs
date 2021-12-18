import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { ProductCard } from '../../components/ProductCard';
import axios from 'axios';

const Product = (props) => {
  const { productId, product } = props;
  return (
    <Container>
      <Col xs={12} md={6} xl={6}>
        <ProductCard
          product={{
            ...product,
            id: productId,
            mediaSrc: '/assets/images/products/product.jpg',
          }}
        />
      </Col>
    </Container>
  );
};

export const getStaticPaths = async () => {
  let paths = [];
  try {
    const r = await axios.get('http://localhost:3030/product');
    const products = r.data.data;
    paths = products.map((product) => {
      return {
        params: { id: product._id },
      };
    });
  } catch (error) {
    console.error(error);
  }
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let product;
  const productId = params.id;
  try {
    const r = await axios.get('http://localhost:3030/product/' + productId);
    product = r.data.data?.pop();
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      productId: params.id,
      product,
    },
  };
};

export default Product;
