import Link from 'next/link';
import Table from 'react-bootstrap/Table';

export const ProductsTable = (props) => {
  const { cols, rows } = props;
  return (
    <Table bordered hover>
      <thead>
        <tr>
          {cols.map((col, idx) => (
            <th key={idx}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>
              <Link href={`/products/${row.id}`}>{row.title}</Link>
            </td>
            <td>{row.category}</td>
            <td>{row.price}</td>
            <td>{row.quantity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
