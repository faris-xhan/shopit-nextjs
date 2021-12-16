import categories from '../../mock/categories.json';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './header.module.css';
import { Cart, Person, Search } from 'react-bootstrap-icons';

export const Header = (props) => {
  const productsDropdowns = categories.map((category) => (
    <Link key={category.id} href={category.link} passHref>
      <NavDropdown.Item>{category.title}</NavDropdown.Item>
    </Link>
  ));
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <NavDropdown title="Products" id="products-dropdown">
              {productsDropdowns}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="flex-grow-1 px-4">
          <Link href="/" passHref>
            <Navbar.Brand>Shopit</Navbar.Brand>
          </Link>
        </div>
        <ButtonGroup>
          <Button variant="none" className={styles.iconButton}>
            <Search fontSize={20} />
          </Button>
          <Button variant="none" className={styles.iconButton}>
            <Person fontSize={20} />
          </Button>
          <Button variant="none" className={styles.iconButton}>
            <Cart fontSize={20} />
          </Button>
        </ButtonGroup>
      </Container>
    </Navbar>
  );
};
