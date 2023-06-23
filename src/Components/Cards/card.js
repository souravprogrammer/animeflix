import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

import { Typography, Button, Chip, Paper, Box, Popper } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Image from "next/image";

export default function Card({ data, disable }) {
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
        // height: "300px",
        // width: "200px",
        // border: "1px solid red",
        width: {
          xs: "150px",
          sm: "150px",
          md: "175px",
          lg: "200px",
        },
        // height: {
        //   xs: "200px",
        //   sm: "250px",
        //   md: "250px",
        //   lg: "300px",
        // },
        // transform: {
        //   xs: "scale(0.88)",
        //   sm: "scale(0.9)",
        //   md: "scale(0.95)",
        //   lg: "scale(1)",
        // },

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
          // width: "180px",
          cursor: "pointer",
          // border: "1px solid blue",
          width: {
            xs: "145px",
            sm: "145px",
            md: "165px",
            lg: "180px",
          },
          // height: {
          //   xs: "200px",
          //   sm: "250px",
          //   md: "250px",
          //   lg: "300px",
          // },
        }}
      >
        <Box
          sx={{
            // height: "230px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
            aspectRatio: "9 / 16",
            height: {
              xs: "180px",
              sm: "180px",
              md: "180px",
              lg: "230px",
            },
            // border: "1px solid red",
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
            alt={"no Image"}
            src={data?.image ?? ""}
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
          onClick={infoClickhandler}
          sx={{
            margin: "8px",
            ":hover": {
              color: "grey",
            },
            height: "48px",
            typography: {
              sm: "body2",
              lg: "body1",
            },
            fontWeight: {
              xs: "bold",
              sm: "bold",

              md: "bold",
              lg: "bold",
            },
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
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
            display: {
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
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
            <Typography
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 6,
              }}
            >
              {data?.des}
            </Typography>

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
