import React, { useState } from "react";

import { Typography, Button, Chip, Paper, Box } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarIcon from "@mui/icons-material/Star";

import InfoIcon from "@mui/icons-material/Info";

export default function card() {
  const [isHover, setIsHover] = useState(false);
  return (
    <Box
      // mx={1}
      sx={{
        // height: "369px",
        height: "300px",
        // overflow: "hidden",

        width: "220px",
        minWidth: "220px",
        transition: "all 0.5s",
        boxShadow: isHover ? 3 : 0,
        zIndex: isHover ? 2 : 1,
        transform: isHover ? "scale(1.2)" : "scale(1)",
        // overflow: "hidden",
      }}
    >
      <Paper
        elevation={0}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        sx={{
          overflow: "hidden",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          transition: "all 0.5s",
          transformOrigin: "center",
        }}
      >
        <Box
          component={"img"}
          sx={{
            //   aspectRatio: "2 / 4",
            width: "100%",
            height: "250px",
          }}
          src="https://image.tmdb.org/t/p/w500/mU7i4WdnBrtDKJAxU8vl41ej6Ly.jpg"
        />
        <Typography
          fontWeight={"bold"}
          sx={{
            padding: "8px",
          }}
        >
          Dragon ball kai
        </Typography>
      </Paper>
      <Paper
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        elevation={0}
        sx={{
          transition: "all 0.5s",
          opacity: isHover ? 1 : 0,
          pointerEvents: isHover ? "all" : "none",
          paddingBottom: "8px",
        }}
      >
        <Box
          sx={{
            opacity: isHover ? 1 : 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              px: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 0px",
                // border: "1px solid red",
              }}
            >
              <StarIcon
                sx={{
                  color: "comps.star",

                  transform: "scale(0.8)",
                }}
              />
              <Typography fontWeight={"bold"} px={1}>
                7.23
              </Typography>
              <Typography fontWeight={"bold"} px={1}>
                24 m
              </Typography>
              <Chip label="Series" variant="outlined" size="small" />
            </div>
          </Box>

          <Box
            sx={{
              display: "flex",
              padidng: "8px",
              px: "8px",
            }}
          >
            <Button
              variant="contained"
              size="small"
              startIcon={<PlayArrowIcon />}
              sx={{
                marginRight: "8px",
              }}
            >
              Play
            </Button>
            <Button variant="outlined" size="small" startIcon={<InfoIcon />}>
              info
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
