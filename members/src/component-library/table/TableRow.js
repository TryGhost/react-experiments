export const TableRow = ({ values = [] }) => (
  <div>
    {values.map((value) => (
      <div>{value}</div>
    ))}
  </div>
);
