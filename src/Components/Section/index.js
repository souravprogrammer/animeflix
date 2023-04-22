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
          display: "flex",
          flexWrap: "wrap",
          gridColumnGap: "8px",
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
