import Container from 'react-bootstrap/Container';
import { Footer } from './Footer';
import { Header } from './Header';
import { Subheader } from './Subheader';

export const Layout = (props) => {
  return (
    <Container fluid className="p-0">
      <div className="d-flex flex-column vh-100">
        <section>
          <Subheader />
          <Header />
        </section>
        <section className="flex-grow-1">{props.children}</section>
        <section>
          <Footer />
        </section>
      </div>
    </Container>
  );
};
