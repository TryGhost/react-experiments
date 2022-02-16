import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      background: "#fff",
      text: "#000",
      seperator: "#e6e9eb",
    },
    sizes: {
      logo: "32px",
    },
    space: {
      drawer: "32px",
      body: "32px 48px",
      panel: "24px",
      input: "12px",
      rhythm: "24px",
    },
    fontSizes: {
      12: "12px",
      15: "15px",
      16: "16px",
      32: "32px",
    },
    radii: {
      panel: "10px",
    },
    fonts: {
      system:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
  },
});
