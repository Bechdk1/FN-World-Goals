export const theme = {
  colors: {
    primary: "#2BBBDE",
    secondary: "#EDEDED",
    tertiary: "#03689C",
    grey: "#efefef",

    light: {
      background: "#ededed",
      text: "#222222",
    },

    dark: {
      background: "#1e1e1e",
      text: "#ededed",
    },
  },

  fonts: ["Oswald", "Open Sans"],
  fontsizes: {
    xs: "0.8rem",
    s: "0.9rem",
    m: "1rem",
    l: "1.2rem",
    xl: "1.6rem",
  },
} as const;

export type Theme = typeof theme;
