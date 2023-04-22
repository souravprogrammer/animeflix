import React, { useState } from "react";
import { useRouter } from "next/router";

import { Typography, Button, Chip, Paper, Box } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarIcon from "@mui/icons-material/Star";

import InfoIcon from "@mui/icons-material/Info";

export default function card({ data }) {
  const [isHover, setIsHover] = useState(false);

  const router = useRouter();

  const infoClickhandler = () => {
    router.push(
      {
        pathname: `/watch/${data.title}`,
        query: { ai: data._id },
      },
      undefined,
      { shallow: true }
    );
  };
  return (
    <Box
      sx={{
        height: "300px",
        width: "200px",
        minWidth: "220px",
        transition: "all 0.5s",
        boxShadow: isHover ? 3 : 0,
        zIndex: isHover ? 2 : 1,
        transform: isHover ? "scale(1.2)" : "scale(1)",
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
            width: "100%",
            height: "250px",
          }}
          loading="lazy"
          src={
            data?.image ??
            "https://image.tmdb.org/t/p/w500/mU7i4WdnBrtDKJAxU8vl41ej6Ly.jpg"
          }
        />
        <Typography
          fontWeight={"bold"}
          onClick={infoClickhandler}
          sx={{
            padding: "8px",
          }}
        >
          {data.title}
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
              }}
            >
              <StarIcon
                sx={{
                  color: "comps.star",
                  transform: "scale(0.8)",
                }}
              />
              <Typography px={1}>{data.rating}</Typography>
              <Typography variant="body2" px={1}>
                {data.duration}
              </Typography>
              <Chip label={data.type} variant="outlined" size="small" />
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
              onClick={infoClickhandler}
              variant="contained"
              size="small"
              startIcon={<PlayArrowIcon />}
              sx={{
                marginRight: "8px",
              }}
            >
              Play
            </Button>
            <Button
              onClick={infoClickhandler}
              variant="outlined"
              size="small"
              startIcon={<InfoIcon />}
            >
              info
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
