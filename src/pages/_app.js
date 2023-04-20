import { useMemo } from "react";
import NavigationBar from "@/Components/NavigationBar/NavBar";
import { getDesignTheme } from "@/Components/theme/getDesignTheme";
import "../styles/globals.css";
import {
  Box,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";

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
