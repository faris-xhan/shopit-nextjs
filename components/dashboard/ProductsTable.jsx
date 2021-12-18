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
        {rows.map((rowData, idx) => (
          <tr key={idx}>{createRowCells(rowData)}</tr>
        ))}
      </tbody>
    </Table>
  );
};

const createRowCells = (data) => {
  return Object.entries(data).map(([key, val]) => <td key={key}>{val}</td>);
};
