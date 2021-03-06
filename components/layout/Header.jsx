import { useRouter } from 'next/router';
import categories from '../../mock/categories.json';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './header.module.css';
import { Person as PersonIcon } from 'react-bootstrap-icons';
import { Searchbar } from '../searchbar/Searchbar';
import { ShoppingCart } from '../shoppingCart/ShoppingCart';
import { Drawer } from '../dashboard/Drawer';
import { UserMenu } from '../dashboard/UserMenu';

export const Header = (props) => {
  const { pathname } = useRouter();

  const dashboard = pathname.includes('dashboard');

  return dashboard ? <DashboardNavbar /> : <PublicNavbar />;
};

const PublicNavbar = (props) => {
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
          <Searchbar />
          <Link href="/login" passHref>
            <Button variant="none" className={styles.iconButton}>
              <PersonIcon fontSize={20} />
            </Button>
          </Link>
          <ShoppingCart />
        </ButtonGroup>
      </Container>
    </Navbar>
  );
};

const DashboardNavbar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Drawer />
        <Link href="/" passHref>
          <Navbar.Brand href="#home">Shopit</Navbar.Brand>
        </Link>
        <UserMenu className={styles.iconButton} />
      </Container>
    </Navbar>
  );
};
