import React from "react";
import { Box, Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function index() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "500px",
        paddingTop: "100px",
        px: "64px",
      }}
    >
      <Box
        sx={{
          filter: " blur(4px)",
          backgroundImage:
            "linear-gradient(rgba(17, 17, 17, 0.801),rgb(17, 17, 17)), url(https://image.tmdb.org/t/p/w500/osq5D28OW66VjwO4jjtxU5JarRv.jpg)",
          backgroundPosition: "center",
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
          //   border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          height: "100%",
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
            padding: "8px 0px",
          }}
        >
          <StarIcon
            sx={{
              color: "comps.star",
            }}
          />
          <Typography fontWeight={"bold"} px={3}>
            7.23
          </Typography>
          <Typography fontWeight={"bold"}>24 m</Typography>
        </div>

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
          Shin-chan, the boy next door, is a walking disaster, creating chaos
          wherever he goes. With the body of a child and the mind of an adult,
          Shinchan is wreaking more havoc than any child before. Shin-chan is
          carefree, optimistic and gets excited about everything. This 5
          year-old likes to do things his way.
        </Typography>
        <Box
          sx={{
            padding: "16px 0px",
          }}
        >
          <Button
            variant="outlined"
            size="large"
            startIcon={<PlayArrowIcon />}
            sx={{
              marginRight: "14px",
            }}
          >
            Play
          </Button>
          <Button startIcon={<InfoIcon />} variant="outlined" size="large">
            more Info
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
