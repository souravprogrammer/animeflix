import React from "react";

import { Box, Typography, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function AnimeCard() {
  return (
    <Box
      sx={{
        height: "40dvh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          filter: " blur(4px)",
          backgroundImage:
            "linear-gradient(rgba(17, 17, 17, 0.801),rgb(17, 17, 17)), url(https://image.tmdb.org/t/p/w500/mU7i4WdnBrtDKJAxU8vl41ej6Ly.jpg)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
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
        <Box
          sx={
            {
              // border: "1px solid red",
              // paddingLeft: "34px",
            }
          }
        >
          <Box
            component={"img"}
            src="https://image.tmdb.org/t/p/w500/mU7i4WdnBrtDKJAxU8vl41ej6Ly.jpg"
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
            <Typography variant="h3" fontWeight={"bold"}>
              Title here
            </Typography>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                // border: "1px solid red",
                padding: "1px 0px",
              }}
            >
              <StarIcon
                sx={{
                  color: "comps.star",
                }}
              />
              <Typography fontWeight={"bold"} px={2}>
                7.23
              </Typography>
              <Typography fontWeight={"bold"}>24 m</Typography>
            </div>
            <Box py={2}>
              <Chip
                label="Action"
                size="small"
                color="primary"
                sx={{ mx: 1 }}
              />
              <Chip label="Drama" size="small" color="primary" sx={{ mx: 1 }} />
              <Chip
                label="Action"
                size="small"
                color="primary"
                sx={{ mx: 1 }}
              />
              <Chip
                label="Action"
                size="small"
                color="primary"
                sx={{ mx: 1 }}
              />
              <Chip
                label="Romance"
                size="small"
                color="primary"
                sx={{ mx: 1 }}
              />
              <Chip
                label="Action"
                size="small"
                color="primary"
                sx={{ mx: 1 }}
              />
              <Chip
                label="Action"
                size="small"
                color="primary"
                sx={{ mx: 1 }}
              />
            </Box>

            <Typography
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
                maxWidth: "50%",
              }}
            >
              Shin-chan, the boy next door, is a walking disaster, creating
              chaos wherever he goes. With the body of a child and the mind of
              an adult, Shinchan is wreaking more havoc than any child before.
              Shin-chan is carefree, optimistic and gets excited about
              everything. This 5 year-old likes to do things his way.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
