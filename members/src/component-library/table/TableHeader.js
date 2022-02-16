export const TableHeader = ({ values = [] }) => (
  <div>
    {values.map((value) => (
      <div>{value}</div>
    ))}
  </div>
);
