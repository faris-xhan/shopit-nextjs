import Container from 'react-bootstrap/Container';
import { ProductsTable } from '../../components/dashboard/ProductsTable';

const rows = [
  { id: 1, fname: 'Bonga', lName: 'Lola', username: 'bonga.lola69' },
];
const Products = (props) => {
  return (
    <Container>
      <section>
        <h1> Products </h1>
      </section>
      <ProductsTable
        cols={['#', 'First Name', 'Last Name', 'Username']}
        rows={rows}
      />
    </Container>
  );
};

export default Products;
