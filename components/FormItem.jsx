import Form from 'react-bootstrap/Form';

export const FormItem = (props) => {
  const {
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    labelProps,
    controlProps,
    ...rest
  } = props;
  return (
    <Form.Group className="mb-3" {...rest}>
      <Form.Label {...labelProps}>{label}</Form.Label>
      <Form.Control
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        {...controlProps}
      />
    </Form.Group>
  );
};

FormItem.defaultProps = {
  type: 'text',
  label: "Enter you're text here",
};
