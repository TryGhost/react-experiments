import { styled } from "../stitches";

export const Button = styled("button", {
  display: "block",
  padding: "$input",
  width: "100%",
  backgroundImage: "linear-gradient(25deg, #f90, #f09)",
  borderRadius: 3,
  fontWeight: "bold",
  color: "$background",
  fontSize: "$16",
  border: "1px #000 solid",
  boxShadow:
    "0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px rgba(255, 255, 255, 0.25), inset 0 20px 20px rgba(255, 255, 255, 0.1)",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  "-webkit-text-stroke": "1px rgba(0, 0, 0, 0.05)",
  cursor: "pointer",
});
