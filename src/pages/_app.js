import { useMemo } from "react";
import NavigationBar from "@/Components/NavigationBar/NavBar";
import Footer from "@/Components/Footer";
import { getDesignTheme } from "@/Components/theme/getDesignTheme";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

import {
  Box,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { CookiesProvider } from "react-cookie";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const theme = useMemo(
    () => responsiveFontSizes(createTheme(getDesignTheme("dark"))),
    []
  );
  return (
    <>
      <Head>
        {/* <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        ></meta>
      </Head>
      <div
        style={{
          maxWidth: "100vw",
          overflow: "hidden",
        }}
      >
        <SessionProvider session={session}>
          <CookiesProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <>
                <NextNProgress
                  color="#1DB954"
                  showOnShallow={true}
                  options={{ easing: "ease", speed: 500, showSpinner: false }}
                />
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
          </CookiesProvider>
        </SessionProvider>
      </div>
    </>
  );
}
