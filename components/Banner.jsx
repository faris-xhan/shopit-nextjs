import Container from 'react-bootstrap/Container';

export const Banner = (props) => {
  return (
    <Container className="p-5">
      <h1 className="text-center display-3">{props.title}</h1>
    </Container>
  );
};
