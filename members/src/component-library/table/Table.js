import React from "react";
import { styled } from "../stitches";

const Wrapper = styled("div", {
  paddingLeft: "$bodyHorizontal",
  paddingRight: "$bodyHorizontal",
  overflow: "auto",
});

const Inner = styled("div", {
  position: "relative",
});

export const Table = React.forwardRef(
  ({ children, header, virtualizerTotalSize, ...props }, ref) => (
    <Wrapper role="table" ref={ref} {...props}>
      {header}
      <Inner style={{ height: `${virtualizerTotalSize}px` }}>{children}</Inner>
    </Wrapper>
  )
);
