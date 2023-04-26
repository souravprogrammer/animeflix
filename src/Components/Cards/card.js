import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

import { Typography, Button, Chip, Paper, Box, Popper } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarIcon from "@mui/icons-material/Star";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import InfoIcon from "@mui/icons-material/Info";

export default function card({ data }) {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef();
  const id = isHover ? "simple-popoer" : undefined;

  const router = useRouter();
  const handleClose = () => {
    setAnchorEl(null);
  };

  const infoClickhandler = () => {
    router.push(
      {
        pathname: `/watch/${data.title}/${data._id}`,
      },
      undefined,
      { shallow: true }
    );
  };
  return (
    <Box
      sx={{
        height: "300px",
        width: "180px",
        minWidth: "220px",
        transition: "all 0.5s",
      }}
    >
      <Paper
        ref={ref}
        elevation={0}
        onMouseEnter={(e) => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        sx={{
          overflow: "hidden",
          display: "flex",
          // position: "relative",
          flexDirection: "column",
          transition: "all 0.5s",
          transformOrigin: "center",
          width: "180px",
        }}
      >
        <Box
          sx={{
            border: "1px solid red",
            height: "230px",
            width: "100%",
            position: "relative",
          }}
        >
          <Box
            component={"img"}
            sx={{
              height: "100%",
              width: "100%",
            }}
            loading="lazy"
            src={
              data?.image ??
              "https://image.tmdb.org/t/p/w500/mU7i4WdnBrtDKJAxU8vl41ej6Ly.jpg"
            }
          />

          <Box
            sx={{
              position: "absolute",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.6)",
              top: 0,
              left: 0,
              opacity: isHover ? 1 : 0,
              transition: "all 0.3s",
            }}
          >
            <PlayCircleOutlineIcon
              color={"primary"}
              sx={{ width: "74px", height: "74px" }}
            />
          </Box>
        </Box>

        <Typography
          fontWeight={"bold"}
          onClick={infoClickhandler}
          sx={{
            padding: "8px",
            ":hover": {
              color: "grey",
            },
          }}
        >
          {data.title}
        </Typography>
      </Paper>

      {ref.current && (
        <Popper
          id={id}
          open={isHover}
          anchorEl={ref.current}
          placement="right-start"
        >
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            The content of the Popper.
          </Box>
        </Popper>
      )}
    </Box>
  );
}
