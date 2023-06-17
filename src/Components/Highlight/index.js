import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useRouter } from "next/router";

export default function Index({ data }) {
  const router = useRouter();
  return (
    <Box
      sx={{
        position: "relative",
        // border: "1px solid red",
        // height: "80dvh",
        p: "34px",
        overFlow: "hidden",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        minHeight: {
          xs: "180px",
          sm: "200px",
          md: "350px",
          lg: "400px",
        },
        // transform: {
        //   xs: "scale(0.8)",
        //   sm: "scale(0.9)",
        //   md: "scale(0.95)",
        //   lg: "scale(1)",
        // },
      }}
    >
      <Box
        sx={{
          filter: " blur(4px)",
          backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.901),rgb(17, 17, 17)), url(${data?.image})`,
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
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
        component={"video"}
        controls={false}
        width="250"
        muted
        autoPlay={true}
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          type="video/mp4"
        />
      </Box> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          },
          alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
          },
        }}
        onClick={() => {
          router.push("/watch/" + data.title + "/" + data._id);
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            // width: {
            //   xs: "125px",
            //   sm: "150px",
            //   md: "200px",
            //   lg: "200px",
            // },
            height: {
              xs: "280px",
              sm: "280px",
              md: "280px",
              lg: "330px",
            },
            aspectRatio: "9 / 16",

            // height: {
            //   xs: "180px",
            //   sm: "180px",
            //   md: "180px",
            //   lg: "230px",
            // },
            // minWidth: {
            //   xs: "125px",
            //   sm: "150px",
            //   md: "200px",
            //   lg: "200px",
            // },
            // border: "1px solid red",
          }}
        >
          <Box
            component={"img"}
            loading="lazy"
            src={data?.image}
            width="100%"
          />
        </Box>
        <Box
          sx={{
            // border: "1px solid green",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            p: {
              xs: "0px",
              sm: "0px",
              md: "14px",
              lg: "16px",
            },
          }}
        >
          <Typography
            // variant="h4"
            // fontWeight={"bold"}
            sx={{
              cursor: "pointer",
              typography: {
                xs: "h6",
                sm: "h5",
                md: "h4",
                lg: "h4",
              },
              fontWeight: {
                xs: "bold",
                sm: "bold",
                md: "bold",
                lg: "bold",
              },
            }}
          >
            {data?.title}
          </Typography>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              // border: "1px solid red",
              padding: "8px 0px",
            }}
          >
            <VisibilityIcon
              size="small"
              sx={{ width: "16px", height: "16px" }}
            />

            <Typography sx={{ px: 1 }}>{parseInt(data.views)}</Typography>
            <StarIcon
              sx={{
                color: "comps.star",
              }}
            />
            <Typography fontWeight={"bold"} px={1}>
              {data?.rating}
            </Typography>
            <Typography fontWeight={"bold"}>{data?.duration}</Typography>
          </div>

          <Typography
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: "4",
              WebkitBoxOrient: "vertical",
              maxWidth: { xs: "100%", sm: "100%", md: "70%", lg: "70%" },

              typography: {
                md: "body1",
                xs: "body2",
              },
            }}
          >
            {data?.des}
          </Typography>
          {/* <Box
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
          </Box> */}

          {/* <Box
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              // border: "1px solid red",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FormControl sx={{ m: "2px", minWidth: 100 }}>
              <Select
                value={10}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                size="small"
                sx={{ padding: "0px", margin: "0px" }}
                // style={{ margin: "6px", padding: "0px" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>All</MenuItem>
                <MenuItem value={20}>Action</MenuItem>
                <MenuItem value={30}>Drama</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" sx={{ color: "#fff" }}>
              Random
            </Button>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
