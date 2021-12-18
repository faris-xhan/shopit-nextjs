import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { CategoriesList } from '../components/CategoriesList';
import { TrendyItemsSection } from '../components/TrendyItemsSection';

export default function Home(props) {
  const { products } = props;
  return (
    <Container fluid>
      <CategoriesList />
      <TrendyItemsSection products={products.data} />
    </Container>
  );
}

export const getStaticProps = async (props) => {
  let products = [];

  try {
    const response = await axios.get('http://localhost:3030/product');
    products = response.data;
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      products,
    },
  };
};
