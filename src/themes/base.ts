interface ThemeBase {
  colors: { [key: string]: { [key: string]: string } };
  sizes: { [key: string]: number };
}

export const base: ThemeBase = {
  colors: {
    white: {
      500: "#FFFFFF",
    },
    black: {
      500: "#212121",
    },
    blue: {
      300: "#4EA8DE",
      500: "#1E6F9F",
      text: "#fff",
    },
    purple: {
      300: "#5E60CE",
      500: "#8284FA",
      text: "#fff",
    },
    gray: {
      100: "#F2F2F2",
      200: "#D9D9D9",
      300: "#808080",
      400: "#333333",
      500: "#262626",
      600: "#1A1A1A",
      700: "#0D0D0D",
      text: "#FFFFFF",
    },
    danger: {
      500: "#E25858",
      text: "#FFFFFF",
    },
  },
  sizes: {
    sm: 12,
    md: 14,
    lg: 16,
  },
};
