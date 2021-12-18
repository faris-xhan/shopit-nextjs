import ListGroup from 'react-bootstrap/ListGroup';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const DrawerMenu = (props) => {
  const router = useRouter();
  const location = router.pathname;

  return (
    <ListGroup variant="flush">
      <Link href="/dashboard" passHref>
        <ListGroup.Item active={location === '/dashboard'}>
          Dashboard
        </ListGroup.Item>
      </Link>
      <Link href="/dashboard/products" passHref>
        <ListGroup.Item active={location === '/dashboard/products'}>
          Products
        </ListGroup.Item>
      </Link>
      <Link href="/dashboard/product/create" passHref>
        <ListGroup.Item active={location === '/dashboard/product/create'}>
          Add a new product
        </ListGroup.Item>
      </Link>
    </ListGroup>
  );
};
