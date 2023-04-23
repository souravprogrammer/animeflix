import React from "react";

import { Box, Typography, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function AnimeCard({ data }) {
  return (
    <Box
      sx={{
        height: "40dvh",
        position: "relative",
        background:
          "linear-gradient(180deg, rgba(30,32,35,1) 0%, rgba(0,0,0,0) 100%)",
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          gridTemplateRows: "1fr",
          gridColumnGap: "0px",
          gridRowGap: "0px",
          padding: "34px",
        }}
      >
        <Box>
          <Box
            component={"img"}
            src={data?.image}
            sx={{
              height: "250px",
            }}
          />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" fontWeight={"bold"}>
              {data?.title}
            </Typography>

            <div
              style={{
                display: "flex",
                alignItems: "center",

                padding: "1px 0px",
              }}
            >
              <StarIcon
                sx={{
                  color: "comps.star",
                }}
              />
              <Typography fontWeight={"bold"} px={2}>
                {data?.rating}
              </Typography>
              <Typography fontWeight={"bold"}>{data?.duration}</Typography>
            </div>
            <Box py={2}>
              {data?.genres?.map((m, i) => {
                return (
                  <Chip
                    label={m}
                    key={i}
                    size="small"
                    color="primary"
                    sx={{ mx: 1 }}
                  />
                );
              })}
            </Box>
            <Typography
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: "6",
                WebkitBoxOrient: "vertical",
                maxWidth: "70%",
              }}
            >
              {data?.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
