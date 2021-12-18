import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FormItem } from '../../../components/FormItem';
import { useState } from 'react';

const initialFormData = {
  title: '',
  description: '',
  category: '',
  quantity: 1,
};
const CreateProduct = (props) => {
  const [formData, setFormData] = useState(initialFormData);
  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    setFormData(initialFormData);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormItem
          controlId="product-title"
          label="Title"
          name="title"
          placeholder="Enter the product name"
          controlProps={{ required: true }}
          value={formData.title}
          onChange={handleInputChange}
        />

        <FormItem
          controlId="product-description"
          name="description"
          label="Description"
          placeholder="Enter the product description"
          controlProps={{ required: true }}
          value={formData.description}
          onChange={handleInputChange}
        />

        <FormItem
          controlId="category"
          category="category"
          label="Category"
          placeholder="Enter the category name"
          value={formData.category}
          onChange={handleInputChange}
        />

        <FormItem
          controlId="qunatity"
          name="quantity"
          label="Quantity"
          type="number"
          controlProps={{ min: '1', required: true }}
          value={formData.quantity}
          onChange={handleInputChange}
          placeholder="How many product you got?"
        />

        <Button variant="primary" type="submit">
          Add new product.
        </Button>
      </Form>
    </Container>
  );
};

export default CreateProduct;
