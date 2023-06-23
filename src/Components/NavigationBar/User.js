import { useState } from "react";
import Grid from "@mui/material/Grid";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import PopupProfile from "../Profile/PopoupProfile";

const User = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid alignItems={"center"}>
        <Button
          color="error"
          onClick={(e) => {
            setAnchorEl(e.currentTarget);
            setOpen(true);
          }}
          sx={{
            ml: "10px",
            p: "0px",
            textTransform: "capitalize",
            color: "text.normal",
          }}
        >
          <Grid
            sx={{
              width: "30px",
              height: "30px",
              m: "3px 8px",
              border: "2px solid",
              borderColor: "primary.dark",
              borderRadius: "50%",
            }}
          >
            <>
              <Grid
                component={"img"}
                src={user?.image}
                sx={{
                  maxWidth: "26px",
                  maxHeight: "26px",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                alt={"user Image"}
              />
            </>
          </Grid>
        </Button>
      </Grid>
      <Popper
        open={open}
        anchorEl={anchorEl}
        sx={{ zIndex: 1000 }}
        placement="bottom-end"
        disablePortal
        transition
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: "right 0 0" }}
              unmountOnExit
            >
              <Grid sx={{ mt: "16px", mr: "8px" }}>
                <PopupProfile setAnchorEl={setOpen} user={user} />
              </Grid>
            </Grow>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
};

export default User;
