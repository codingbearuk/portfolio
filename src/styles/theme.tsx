const theme = {
  screens: {
    // max-widths in pixels
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  breakpoints: [640, 768, 1024, 1280],
  colors: {
    blue: "#00D7FF",
    darkblue: "#002C84",
    grey: "#D4D4D4",
    lightgrey: "#ECECEC",
    white: "#F2F2F2",
    black: "#232323",
    transparent: "rgba(35, 35, 35, 0.4)",
    transparentDarkblue: "rgba(0, 44, 132, 0.4)",
  },
  opacity: {
    0: 0,
    25: 0.25,
    50: 0.5,
    75: 0.75,
    100: 1,
  },
  py: (value: number | string) =>
    `padding-top: ${value}; padding-bottom: ${value};`,
  // Add anything else you'd like.
};

export type Theme = typeof theme;

export default theme;
