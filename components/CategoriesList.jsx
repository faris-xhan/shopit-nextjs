import Link from 'next/link';
import Image from 'next/image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './categoriesList.module.css';
import Container from 'react-bootstrap/Container';

const banners = [
  '/assets/images/banners/footwear.jpg',
  '/assets/images/banners/glasses.jpg',
  '/assets/images/banners/gloves.jpg',
  '/assets/images/banners/handbags.jpg',
  '/assets/images/banners/jewellery.jpg',
  '/assets/images/banners/sale.jpg',
  '/assets/images/banners/laptop_bags.jpg',
  '/assets/images/banners/shoulder_straps.jpg',
  '/assets/images/banners/wallet.jpg',
];
export const CategoriesList = (props) => {
  return (
    <Container fluid>
      <Row>
        {banners.map((banner) => (
          <Col key={banner} md={6} xl={4} xs={12}>
            <Link href="#" passHref>
              <a>
                <Image
                  key={banner}
                  src={banner}
                  width="400"
                  height="280"
                  alt="glasses"
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
