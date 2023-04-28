import React from "react";

import { Box, Typography } from "@mui/material";
import Heading from "@/Components/Cards/Heading";
import Card from "@/Components/Cards/card";

export default function index({ title, list = [], type, result }) {
  return (
    <Box>
      <Heading title={title} />

      {type === "search" ? (
        <Typography
          sx={{
            padding: "16px",
          }}
        >
          {result.message}
        </Typography>
      ) : null}

      <Box
        px={2}
        py={4}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gridColumnGap: "1px",
          gridRowGap: "8px",
        }}
      >
        {list?.map((item, i) => {
          return <Card key={i} data={item} />;
        })}
      </Box>
    </Box>
  );
}
