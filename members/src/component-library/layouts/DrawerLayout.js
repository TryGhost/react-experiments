import { styled } from "../stitches";

const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "320px auto",
  minHeight: "100vh",
});

const Drawer = styled("nav", {
  padding: "$drawer",
  borderRight: "1px $seperator solid",
});

const Body = styled("main", {});

export const DrawerLayout = ({ drawer, children }) => (
  <Wrapper>
    <Drawer>{drawer}</Drawer>
    <Body>{children}</Body>
  </Wrapper>
);
