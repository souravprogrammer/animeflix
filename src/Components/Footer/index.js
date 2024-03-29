import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        height: "150px",
        borderTop: "1px solid rgba(255,255,255,0.3)",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
        marginTop: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",

          width: "fit-content",
          //   border: "1px solid red",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            borderRight: "1px solid #fff",
            px: "16px",
            ":hover": { color: "primary.main" },
          }}
        >
          DMCA
        </Typography>
        <Typography
          variant="body2"
          sx={{
            borderRight: "1px solid #fff",
            px: "16px",
            textAlign: "center",
            ":hover": { color: "primary.main" },
          }}
        >
          Privacy Poilcy
        </Typography>
        <Typography
          variant="body2"
          sx={{
            borderRight: "1px solid #fff",
            px: "16px",
            ":hover": { color: "primary.main" },
          }}
        >
          Cookies Poilcy
        </Typography>
        <Typography
          variant="body2"
          sx={{ px: "16px", ":hover": { color: "primary.main" } }}
        >
          Credit
        </Typography>
      </Box>

      <Box
        sx={{
          padding: {
            lg: "16px",
            md: "16px",
            sm: "4px",
            xs: "4px",
          },
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            opacity: "0.6",
          }}
        >
          <Typography
            variant="body2"
            component={"span"}
            sx={{
              px: "8px",
              ":hover": { color: "primary.main" },
            }}
          >
            AnimeFlix
          </Typography>
          . Copyrights and trademarks for the anime, and other promotional
          materials are held by their respective owners and their use is allowed
          under the fair use clause of the Copyright Law.
        </Typography>
      </Box>
    </Box>
  );
}
