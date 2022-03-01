import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      background: "#fff",
      text: "#000",
      seperator: "#e6e9eb",
      muted: "#626d79",
      washedOut: "#abb4be",
    },
    sizes: {
      logo: "32px",
    },
    space: {
      drawer: "32px",
      bodyVertical: "32px",
      bodyHorizontal: "48px",
      panel: "24px",
      input: "12px",
    },
    fontSizes: {
      12: "12px",
      13: "13px",
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
