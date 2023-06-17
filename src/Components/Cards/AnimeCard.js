import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import MuiAlert from "@mui/material/Alert";
import { useSession } from "next-auth/react";
import axios from "axios";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AnimeCard({ data }) {
  const [open, setOpen] = useState(false);
  const [msg, setMessage] = useState(false);
  const [bookmark, setBookmark] = useState(data?.bookmark?.length > 0);
  const { data: session } = useSession();
  const handleClose = () => {
    setOpen(false);
  };
  const snack = (message) => {
    setMessage(message);
    setOpen(true);
  };
  const AddBookMark = async () => {
    if (!session) {
      snack("please sign In");
      return;
    }
    try {
      if (bookmark) {
        const res = await axios.get(`/api/bookmark/remove/${data._id}`);
        snack("Removed");
        setBookmark(false);
      } else {
        const res = await axios.get(`/api/bookmark/update/${data._id}`);
        snack("Added");
        setBookmark(true);
      }
    } catch (err) {
      snack(err.message);
    }
  };
  return (
    <Box
      sx={{
        minHeight: "400px",
        position: "relative",
        background:
          "linear-gradient(180deg, rgba(30,32,35,1) 0%, rgba(0,0,0,0) 100%)",
        borderRadius: "5px",
        // border: "1px solid red",
      }}
    >
      <Box
        sx={{
          // display: "grid",
          // gridTemplateColumns: "1fr 4fr",

          // gridTemplateRows: "1fr",
          // gridColumnGap: "0px",
          // gridRowGap: "0px",
          display: "flex",

          padding: "34px",
          justifyContent: {
            xs: "center",
          },
          alignItems: { xs: "center" },
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
          },
        }}
      >
        <Box px={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              // height: "250px",
              width: "160px",
            }}
          >
            <Box
              component={"img"}
              src={data?.image}
              sx={{
                height: "250px",
              }}
            />
            <Button
              onClick={AddBookMark}
              startIcon={bookmark ? <BookmarkAddedIcon /> : <BookmarkAddIcon />}
              variant="outlined"
              sx={{ my: 1 }}
            >
              {bookmark ? "Bookmarked" : "Bookmark"}
            </Button>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: {
                xs: "center",
                md: "flex-start",
                sm: "flex-start",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                typography: {
                  lg: "h4",
                  md: "h5",
                  sm: "body1",
                  xs: "body1",
                },
                fontWeight: {
                  lg: "bold",
                  md: "bold",
                  sm: "bold",
                  xs: "bold",
                },
              }}
            >
              {data?.title}
            </Typography>

            <div
              style={{
                display: "flex",
                alignItems: "center",

                padding: "1px 0px",
              }}
            >
              <VisibilityIcon
                size="small"
                sx={{ width: "16px", height: "16px" }}
              />

              <Typography
                sx={{
                  px: 1,

                  typography: {
                    lg: "body1",
                    md: "body1",
                    sm: "body2",
                    xs: "body2",
                  },
                }}
              >
                {parseInt(data.views)}
              </Typography>
              <StarIcon
                sx={{
                  color: "comps.star",
                  width: {
                    lg: "20px",
                    md: "18px",
                    sm: "18px",
                    xs: "18px",
                  },
                }}
              />
              <Typography
                // fontWeight={"bold"}
                px={2}
                sx={{
                  typography: {
                    lg: "body1",
                    md: "body1",
                    sm: "body2",
                    xs: "body2",
                  },
                }}
              >
                {data?.rating}
              </Typography>
              <Typography
                fontWeight={"bold"}
                sx={{
                  typography: {
                    lg: "body1",
                    md: "body1",
                    sm: "body2",
                    xs: "body2",
                  },
                }}
              >
                {data?.duration}
              </Typography>
            </div>
            <Box py={2}>
              {data?.genres?.map((m, i) => {
                return (
                  <Chip
                    label={m}
                    key={i}
                    size="small"
                    variant="outlined"
                    color="primary"
                    sx={{ m: 1 }}
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
                typography: {
                  lg: "body1",
                  md: "body1",
                  sm: "body2",
                  xs: "body2",
                },
              }}
            >
              {data?.description}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default React.memo(AnimeCard);
