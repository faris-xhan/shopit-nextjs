import categories from '../../mock/categories.json';
import Container from 'react-bootstrap/Container';

const Category = ({ category }) => {
  return (
    <Container>
      <h1>{category}</h1>
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
