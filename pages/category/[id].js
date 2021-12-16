import categories from '../../mock/categories.json';
import Container from 'react-bootstrap/Container';
import { Banner } from '../../components/Banner';
import { ProductList } from '../../components/ProductsList';

const Category = ({ category }) => {
  return (
    <Container>
      <Banner title={category} />
      <ProductList products={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13]} />
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
  return {
    props: {
      category: params.id,
    },
  };
};

export default Category;
