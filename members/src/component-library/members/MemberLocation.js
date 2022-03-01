import { styled } from "../stitches";

const Text = styled("div", {
  fontSize: "$13",

  variants: {
    present: {
      false: {
        color: "$washedOut",
      },
    },
  },
});

export const MemberLocation = ({ country }) => (
  <Text present={!!country}>{country || "Unknown"}</Text>
);
