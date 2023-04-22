import React from "react";
import { Typography, Box } from "@mui/material";

export default function Heading({ title = "title" }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        py: "2px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "16px",
          width: "5px",
          height: "90%",
          backgroundColor: "primary.main",
          transform: "translateY(-50%)",
          borderRadius: "1px",
        }}
      ></Box>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        sx={{
          px: "34px",
          textTransform: "capitalize",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
