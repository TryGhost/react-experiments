import { styled } from "../stitches";

export const VIRTUALIZED_TABLE_ROW_HEIGHT = 80;

const Wrapper = styled("div", {
  display: "grid",
  height: VIRTUALIZED_TABLE_ROW_HEIGHT,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  borderTop: "1px $seperator solid",
  textDecoration: "none",
  color: "$text",
});

export const VirtualizedTableRow = ({
  columns,
  link = undefined,
  values = [],
  style = {},
  ...props
}) => (
  <Wrapper
    href={link}
    style={{ ...style, gridTemplateColumns: columns }}
    as={link ? "a" : undefined}
    {...props}
  >
    {values.map((value, index) => (
      <div key={index}>{value}</div>
    ))}
  </Wrapper>
);
