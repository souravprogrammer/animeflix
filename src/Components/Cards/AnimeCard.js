import React, { useState } from "react";

import { Box, Typography, Chip, Button, Snackbar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { useSession } from "next-auth/react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AnimeCard({ data }) {
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
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>
    </Box>
  );
}
