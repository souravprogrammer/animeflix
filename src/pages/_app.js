import { useMemo } from "react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import "../styles/globals.css";
import {
  Box,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { getDesignTheme } from "@/components/theme/theme";

export default function App({ Component, pageProps }) {
  const theme = useMemo(
    () => responsiveFontSizes(createTheme(getDesignTheme("dark"))),
    []
  );
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
          <NavigationBar />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </div>
  );
}
