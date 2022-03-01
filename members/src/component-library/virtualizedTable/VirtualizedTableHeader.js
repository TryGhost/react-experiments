import { styled } from "../stitches";

const Wrapper = styled("div", {
  display: "grid",
  textTransform: "uppercase",
  fontSize: "$12",
  padding: "10px 0",
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 1,
  backgroundColor: "#fff",
  borderBottom: "1px $seperator solid",

  div: {
    fontSize: "inherit",
  },
});

export const VirtualizedTableHeader = ({ columns, values = [] }) => (
  <Wrapper style={{ gridTemplateColumns: columns }}>
    {values.map((value, index) => (
      <div key={index}>{value}</div>
    ))}
  </Wrapper>
);
