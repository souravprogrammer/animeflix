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
          // display: "flex",
          // flexWrap: "wrap",
          // // justifyContent: "space-evenly",
          // gridColumnGap: "1px",
          // gridRowGap: "8px",
          // border: "1px solid red",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 200px))",
          gridGap: "8px 8px",
          justifyContent: "center",
          alignItems: "baseline",
        }}
      >
        {list?.map((item, i) => {
          return <Card key={i} data={item} />;
        })}
      </Box>
    </Box>
  );
}
