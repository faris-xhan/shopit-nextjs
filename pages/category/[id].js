import categories from '../../mock/categories.json';
import Container from 'react-bootstrap/Container';
import { Banner } from '../../components/Banner';
import { ProductList } from '../../components/ProductsList';
import axios from 'axios';

const Category = ({ category, data }) => {
  return (
    <Container>
      <Banner title={category} />
      <ProductList products={data} />
    </Container>
  );
};

export async function getStaticPaths() {
  const paths = categories.map((category) => ({
    params: { id: category.name },
  }));

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async ({ params }) => {
  let data = [];
  try {
    const response = await axios.get('http://localhost:3030/product');
    data = response.data.data?.filter((d) => d.category === params.id);
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      category: params.id,
      data,
    },
  };
};

export default Category;
