import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      text: "#000",
      paneSeperator: "#e6e9eb",
    },
    sizes: {
      logo: "32px",
    },
    space: {
      drawer: "32px",
      body: "32px 48px",
    },
    fontSizes: {
      15: "15px",
      32: "32px",
    },
    fonts: {
      system:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
  },
});
