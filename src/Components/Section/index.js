import React from "react";

import { Box, Typography } from "@mui/material";
import Heading from "@/Components/Cards/Heading";
import Card from "@/Components/Cards/card";
import Skeleton from "@mui/material/Skeleton";

export default function index({ title, list = [], type, result, isLoading }) {
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
          display: "grid",
          // gridTemplateColumns: "repeat(auto-fill, minmax(180px, 200px))",
          gridTemplateColumns: {
            xs: "repeat(auto-fill, minmax(145px, 150px))",
            sm: "repeat(auto-fill, minmax(150px, 160px))",
            md: "repeat(auto-fill, minmax(165px, 170px))",
            lg: "repeat(auto-fill, minmax(180px, 200px))",
          },

          // gridGap: "8px 8px",
          gridGap: {
            lg: "8px 8px",
            md: "6px 6px",
            sm: "4px 4px",
            xs: "4px 4px",
          },
          justifyContent: "center",
          alignItems: "baseline",
        }}
      >
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7].map((item) => {
              return (
                <Skeleton
                  key={item}
                  variant="rectangular"
                  sx={{
                    width: {
                      xs: "150px",
                      sm: "150px",
                      md: "175px",
                      lg: "200px",
                    },
                    height: {
                      xs: "200px",
                      sm: "250px",
                      md: "250px",
                      lg: "300px",
                    },
                  }}
                />
              );
            })
          : list?.map((item, i) => {
              return <Card key={i} data={item} />;
            })}
      </Box>
    </Box>
  );
}
