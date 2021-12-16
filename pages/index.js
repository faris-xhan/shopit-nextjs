import Container from 'react-bootstrap/Container';
import { CategoriesList } from '../components/CategoriesList';
import { TrendyItemsSection } from '../components/TrendyItemsSection';

export default function Home() {
  return (
    <Container fluid>
      <CategoriesList />
      <TrendyItemsSection />
    </Container>
  );
}
