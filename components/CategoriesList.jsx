import Link from 'next/link';
import Image from 'next/image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './categoriesList.module.css';
import Container from 'react-bootstrap/Container';
import categories from '../mock/categories.json';

export const CategoriesList = (props) => {
  return (
    <Container fluid>
      <Row>
        {categories.map((category) => (
          <Col key={category.id} md={6} xl={4} xs={12}>
            <Link href={category.link} passHref>
              <a>
                <Image
                  src={category.img}
                  width="400"
                  height="280"
                  alt="glasses"
                  title={category.name}
                  className={styles.item}
                />
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
