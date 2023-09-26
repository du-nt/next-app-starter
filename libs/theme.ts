import { createTheme } from "@mui/material/styles";

import "@mui/material";

const commonThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      tablet: 780,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      "@media (min-width: 0px)": {
        minHeight: 56,
      },
      "@media (min-width: 600px)": {
        minHeight: 56,
      },
      "@media (min-width: 780px)": {
        minHeight: 64,
      },
    },
  },
};

const lightTheme = createTheme({
  ...commonThemeOptions,
});

const darkTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: "dark",
  },
});

export { lightTheme, darkTheme };
