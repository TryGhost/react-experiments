import { styled } from "../stitches";

const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr auto",
});

const H1 = styled("h1", {
  fontSize: "$32",
  fontWeight: "bold",
});

const Accessories = styled("div", {});

export const PageTitle = ({ accessories, children }) => (
  <Wrapper>
    <H1>{children}</H1>
    {accessories && <Accessories>{accessories}</Accessories>}
  </Wrapper>
);
