import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Errorpage() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box component={"img"} src="/error.png" alt={"error Image"} />

        <Typography
          //   variant="h1"
          sx={(theme) => ({
            textShadow: `2px 2px #000,4px 4px ${theme.palette.primary.main}`,
            transform: "translateY(-100px)",
          })}
          fontSize={"154px"}
        >
          404
        </Typography>

        <Typography
          sx={{
            transform: "translateY(-100px)",
          }}
        >
          {" Opps, sorry we can't find that page!"}
        </Typography>
        <Button
          variant="contained"
          sx={{ color: "#fff", m: "8px", transform: "translateY(-100px)" }}
        >
          Back to Homepage
        </Button>
      </Box>
    </Box>
  );
}
