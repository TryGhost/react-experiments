import { styled } from "../stitches";

export const Input = styled("input", {
  display: "block",
  padding: "$input",
  width: "100%",
  marginBottom: "$bodyVertical",
  border: "1px $muted solid",
  borderRadius: 3,

  variants: {
    error: {
      true: {
        borderColor: "$errorBorder",
        borderWidth: 3,
        outline: "none",
        color: "$errorText",
      },
    },
    noBottom: {
      true: {
        marginBottom: 0,
      },
    },
  },
});
