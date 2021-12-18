import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { ProductsTable } from '../../components/dashboard/ProductsTable';

const Products = ({ data }) => {
  const rows = data.data;

  return (
    <Container>
      <section>
        <h1> Products </h1>
      </section>
      <ProductsTable
        cols={['Title', 'Category', 'Price', 'Quantity']}
        rows={rows}
      />
    </Container>
  );
};

export default Products;

export const getStaticProps = async (props) => {
  let data = {};
  try {
    const response = await axios.get('http://localhost:3030/product');
    data = response.data;
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      data,
    },
  };
};
