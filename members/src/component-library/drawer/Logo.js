import { styled } from "../stitches";
import orbImage from "../assets/orb.png";

const LogoImage = styled("img", {
  width: "$logo",
  height: "$logo",
});

export const Logo = () => <LogoImage src={orbImage} />;
