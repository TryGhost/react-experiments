import { styled } from "../stitches";
import { TABLE_ROW_HEIGHT } from "./TableRow";

const Wrapper = styled("div", {
  display: "flex",
  height: TABLE_ROW_HEIGHT,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  borderTop: "1px $seperator solid",
  color: "$text",
});

export const TableRowPlaceholder = ({ columns, style = {}, ...props }) => (
  <Wrapper style={{ ...style, gridTemplateColumns: columns }} {...props}>
    Loading...
  </Wrapper>
);
