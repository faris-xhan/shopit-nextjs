import styles from './productCard.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { CartFill, Eye } from 'react-bootstrap-icons';
import Link from 'next/link';

export const ProductCard = (props) => {
  const { product } = props;
  return (
    <Card className={styles.productCard}>
      <Card.Img variant="top" src={product.mediaSrc} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.isSale && (
            <del className="text-muted"> Rs. {product.oldPrice}&nbsp;</del>
          )}
          <span className="fs-5 text-danger fw-thin">Rs. {product.price}</span>
        </Card.Text>
        <div className="d-flex justify-content-end">
          <Card.Link
            as={Button}
            variant="outline-secondary"
            onClick={() => alert(product.id)}
          >
            <CartFill />
          </Card.Link>
          <Link href={`/products/${product.id}`} passHref>
            <Card.Link as={Button} variant="outline-secondary">
              <Eye />
            </Card.Link>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
