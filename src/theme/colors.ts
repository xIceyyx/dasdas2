import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#1e293b",
  primaryBright: "#1e293b",
  primaryDark: "#351617",
  secondary: "#97161e",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  contrast: "#191326",
  dropdown: "#121212",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#1e293b",
  textDisabled: "#BDC2C4",
  textSubtle: "#1e293b",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum:
      "rgba(18, 18, 18, 0.7)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#97161e",
  background: "#1e293b",



  backgroundDisabled: "#3c3742",
  backgroundAlt: "#1e293b",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#121212",
  inputSecondary: "#1e293b",
  primaryDark: "#97161e",
  tertiary: "#353547",
  text: "#e2effc",
  textDisabled: "#666171",
  textSubtle: "#1e293b",
  borderColor: "#524B63",
  gradients: {
    bubblegum:
      "rgba(18, 18, 18, 0.7)",
    cardHeader: "linear-gradient(166.77deg, #070707 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #070707 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #070707 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #070707 0%, #1e293b 100%)",
  },
};

