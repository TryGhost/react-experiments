import { styled } from "../stitches";

const Wrapper = styled("div", {
  display: "grid",
  textTransform: "uppercase",
  fontSize: "$12",
  padding: "10px 0",

  div: {
    fontSize: "inherit",
  },
});

export const TableHeader = ({ columns, values = [] }) => (
  <Wrapper style={{ gridTemplateColumns: columns }}>
    {values.map((value, index) => (
      <div key={index}>{value}</div>
    ))}
  </Wrapper>
);
