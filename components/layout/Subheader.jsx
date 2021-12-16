import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Telephone as TelephoneIcon,
} from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Subheader = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-center">
        <a href="#" className="mx-1" title="our facebook page">
          <FacebookIcon fontSize={20} />
        </a>
        <a href="#" className="mx-1" title="our instagram page">
          <InstagramIcon fontSize={20} />
        </a>
        <a href="tel:00000" className="mx-1" title="call us at 0000">
          <TelephoneIcon fontSize={20} />
        </a>
      </Container>
    </Navbar>
  );
};
