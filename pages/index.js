import Container from 'react-bootstrap/Container';
import { CategoriesList } from '../components/CategoriesList';

export default function Home() {
  return (
    <Container fluid>
      <CategoriesList />
    </Container>
  );
}
