import React from "react";
import { styled } from "../stitches";

const Link = styled("a", {
  fontSize: "$14",
  fontWeight: "bold",
  textDecoration: "none",
  color: "$text",
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const HomeLink = ({ children }) => <Link href="/">{children}</Link>;
