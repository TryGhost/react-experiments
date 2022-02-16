import { styled } from "../stitches";
import { Avatar } from "../common/Avatar";

const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "60px auto",
});

export const MemberProfile = ({ name, email, avatarImage }) => (
  <Wrapper>
    <Avatar name={name || ""} imageUrl={avatarImage} />
    <div>
      <strong>{name}</strong>
      <br />
      {email}
    </div>
  </Wrapper>
);
