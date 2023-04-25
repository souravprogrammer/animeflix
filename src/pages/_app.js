import { useMemo } from "react";
import NavigationBar from "@/Components/NavigationBar/NavBar";
import Footer from "@/Components/Footer";
import { getDesignTheme } from "@/Components/theme/getDesignTheme";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

import {
  Box,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const theme = useMemo(
    () => responsiveFontSizes(createTheme(getDesignTheme("dark"))),
    []
  );
  return (
    <div
      style={{
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <>
            <div
              style={{
                maxWidth: "1576px",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                minHeight: "100dvh",
                // border: "1px solid red",
              }}
            >
              <NavigationBar />
              <Box sx={{ flex: 1 }}>
                <Component {...pageProps} />
              </Box>
              <Footer />
            </div>
          </>
        </ThemeProvider>
      </SessionProvider>
    </div>
  );
}
