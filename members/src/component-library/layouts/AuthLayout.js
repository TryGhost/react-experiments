import { styled } from "../stitches";
import { Panel } from "../common/Panel";

const Wrapper = styled("div", {
  display: "flex",
  background: "#eee",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

const Main = styled(Panel, {
  maxWidth: "500px",
});

export const AuthLayout = ({ children }) => (
  <Wrapper>
    <Main as="main">{children}</Main>
  </Wrapper>
);
