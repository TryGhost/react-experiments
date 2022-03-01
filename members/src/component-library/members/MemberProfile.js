import { styled } from "../stitches";
import { Avatar } from "../common/Avatar";

const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "50px auto",
  alignItems: "center",
});

const Details = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const Name = styled("div", {
  fontWeight: "bold",
});

const Email = styled("div", {
  color: "$muted",
  fontSize: "$13",
});

export const MemberProfile = ({ name, email, imageUrl }) => (
  <Wrapper>
    <Avatar name={name || ""} imageUrl={imageUrl} />
    <Details>
      <Name>{name || email}</Name>
      {name && <Email>{email}</Email>}
    </Details>
  </Wrapper>
);
