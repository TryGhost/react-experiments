import { styled } from "../stitches";

const Wrapper = styled("div", {
  display: "grid",
  height: "100vh",
  gridTemplateRows: "auto 1fr",
});

export const TabularPageLayout = ({ pageTitle, children, ...props }) => (
  <Wrapper {...props}>
    {pageTitle}
    {children}
  </Wrapper>
);
