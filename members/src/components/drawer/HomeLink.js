import React from "react";
import { styled } from "../../stitches";

const Link = styled("a", {
  fontSize: "$32",
  textDecoration: "none",
  color: "$logo",
});

export const HomeLink = () => <Link href="/">Ghost</Link>;
