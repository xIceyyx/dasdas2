import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#fff",
  primaryBright: "#fff",
  primaryDark: "#351617",
  secondary: "#8b5cf6",
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
  dropdown: "#1e293b",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#fff",
  textDisabled: "#BDC2C4",
  textSubtle: "#fff",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum:
      "#353547",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#8b5cf6",
  background: "#0f172a",

  backgroundDisabled: "#3c3742",
  backgroundAlt: "#0f172a",
  contrast: "#FFFFFF",
  dropdown: "#1e293b",
  invertedContrast: "#191326",
  input: "#1e293b",
  inputSecondary: "#fff",
  primaryDark: "#8b5cf6",
  tertiary: "#353547",
  text: "#ffeeda",
  textDisabled: "#666171",
  textSubtle: "#fff",
  borderColor: "#524B63",
  gradients: {
    bubblegum:
      "#353547",
    cardHeader: "linear-gradient(166.77deg, #0f172a 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #0f172a 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #0f172a 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #0f172a 0%, #fff 100%)",
  },
};
