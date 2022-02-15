import { styled } from "../stitches";

const Wrapper = styled("main", {
  display: "grid",
  gridTemplateColumns: "320px auto",
  minHeight: "100vh",
});

const Drawer = styled("nav", {
  padding: "$drawer",
  borderRight: "1px $paneSeperator solid",
});

const Body = styled("main", {
  padding: "$body",
});

export const DrawerLayout = ({ drawer, children }) => (
  <Wrapper>
    <Drawer>{drawer}</Drawer>
    <Body>{children}</Body>
  </Wrapper>
);
