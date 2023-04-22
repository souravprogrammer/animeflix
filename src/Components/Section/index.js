import React from "react";

import { Box } from "@mui/material";
import Heading from "@/Components/Cards/Heading";
import Card from "@/Components/Cards/card";

export default function index({ title, list = [] }) {
  return (
    <Box>
      <Heading title={title} />
      <Box
        px={2}
        py={4}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gridTemplateRows: " repeat(1, 1fr)",
          gridColumnGap: "1px",
          gridRowGap: "1px",
          // border: "1px solid red",
        }}
      >
        {list?.map((item, i) => {
          return <Card key={i} data={item} />;
        })}
      </Box>
    </Box>
  );
}
