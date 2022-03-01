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

export const MemberOpenRate = ({ openRate }) => {
  return <Text present={!!openRate}>{openRate || "N/A"}</Text>;
};
