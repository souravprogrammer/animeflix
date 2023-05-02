import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

import { Typography, Button, Chip, Paper, Box, Popper } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarIcon from "@mui/icons-material/Star";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import InfoIcon from "@mui/icons-material/Info";

export default function card({ data, disable }) {
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
        width: "200px",
        // minWidth: "220px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.5s",
        padding: "8px",
        overflow: "hidden",
      }}
    >
      <Paper
        ref={ref}
        elevation={0}
        onClick={infoClickhandler}
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
          cursor: "pointer",
          // border: "1px solid red",
        }}
      >
        <Box
          sx={{
            height: "230px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            component={"img"}
            sx={{
              height: "100%",
              width: "100%",
              transition: "all 0.4s",
              transform: isHover ? "scale(1.2)" : "scale(1)",
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

      {ref.current && !disable ? (
        <Popper
          id={id}
          onMouseEnter={(e) => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          open={isHover}
          anchorEl={ref.current}
          placement="right-start"
          sx={{
            maxWidth: "400px",
          }}
        >
          <Paper sx={{ p: 4, display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" sx={{ color: "#fff" }}>
              {data.title}
            </Typography>
            <Box>
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
                <Chip
                  sx={{ margin: "0px 8px" }}
                  label={data.type}
                  variant="outlined"
                  size="small"
                />
              </div>
            </Box>
            {data?.genres?.length ? (
              <Box>
                <Typography>genres</Typography>
                {data?.genres.map((g, i) => {
                  return (
                    <Chip
                      variant="outlined"
                      color="primary"
                      label={g}
                      key={i}
                      sx={{
                        margin: "4px",
                      }}
                      clickable
                    />
                  );
                })}
              </Box>
            ) : null}
            <Typography>{data?.des}</Typography>

            <Button
              onClick={infoClickhandler}
              variant="outlined"
              sx={{ marginTop: "16px" }}
            >
              Watch Now
            </Button>
          </Paper>
        </Popper>
      ) : null}
    </Box>
  );
}
