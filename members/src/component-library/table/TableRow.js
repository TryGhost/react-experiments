import { styled } from "../stitches";

const Wrapper = styled("div", {
  display: "grid",
  height: 80,
  alignItems: "center",
  borderTop: "1px $seperator solid",
  textDecoration: "none",
  color: "$text",
});

export const TableRow = ({ columns, link = undefined, values = [] }) => (
  <Wrapper
    href={link}
    style={{ gridTemplateColumns: columns }}
    as={link ? "a" : undefined}
  >
    {values.map((value, index) => (
      <div key={index}>{value}</div>
    ))}
  </Wrapper>
);
