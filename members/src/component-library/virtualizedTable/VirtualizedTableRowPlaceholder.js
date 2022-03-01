import { styled } from "../stitches";
import { VIRTUALIZED_TABLE_ROW_HEIGHT } from "./VirtualizedTableRow";

const Wrapper = styled("div", {
  display: "flex",
  height: VIRTUALIZED_TABLE_ROW_HEIGHT,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  borderTop: "1px $seperator solid",
  color: "$text",
});

export const VirtualizedTableRowPlaceholder = ({
  columns,
  style = {},
  ...props
}) => (
  <Wrapper
    style={{ ...style, gridTemplateColumns: columns }}
    {...props}
    aria-hidden="true"
  >
    Loading...
  </Wrapper>
);
