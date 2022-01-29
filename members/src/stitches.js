import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      drawerPaneBackground: "#eee",
      paneSeperator: "#666",
      logo: "#f90",
    },
    shadows: {
      drawer: "inset -2px 0 rgba(0, 0, 0, 0.1)",
    },
    fontSizes: {
      14: "14px",
      18: "18px",
      24: "24px",
      28: "28px",
      32: "32px",
      40: "40px",
      64: "64px",
    },
  },
});
