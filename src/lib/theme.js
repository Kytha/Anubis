import { createMuiTheme } from "@material-ui/core/styles";

export const cello = {
  light: "#3e658e",
  main: "#364f6b",
  dark: "#283e56",
  contrastText: "#fff",
};

export const frenchRose = {
  light: "#f986a9",
  main: "#fc5185",
  dark: "#e84e7c",
  contrastText: "#fff",
};

export const brightTurquoise = {
  light: "#87E9EF",
  main: "#14D4E0",
  dark: "#10AAB3",
  contrastText: "#fff",
};
export const primaryTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: frenchRose,
    secondary: brightTurquoise,
    background: {
      paper: cello.main,
      default: cello.dark,
    },
  },
  text: {
    primary: "#fff",
    secondary: "#f0f0f0",
    disabled: "#f0f0f0",
    hint: "#f0f0f0",
  },
});
