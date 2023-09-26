"use client";

import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "../libs/theme";
import themeState from "../stores/theme";

export default function ThemeProvider({ children }: PropsWithChildren) {
  const theme = useRecoilValue(themeState);

  return (
    <MUIThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
