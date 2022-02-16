import { getInitialsFromName } from "../../utils/lang";
import { styled } from "../stitches";

const Wrapper = styled("div", {
  display: "flex",
  position: "relative",
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

const Initials = styled("span", {
  fontSize: "$16",
  color: "$background",
});

const Image = styled("img", {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

const getColorForName = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return `hsl(${hash % 360}, 75%, 55%)`;
};

export const Avatar = ({ name, imageUrl = null }) => (
  <Wrapper style={{ backgroundColor: getColorForName(name) }}>
    <Initials>{getInitialsFromName(name)}</Initials>
    {imageUrl && <Image src={imageUrl} />}
  </Wrapper>
);
