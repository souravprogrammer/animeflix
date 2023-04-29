import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PopupProfile from "../Profile/PopoupProfile";

import {
  InputBase,
  ButtonBase,
  Button,
  Grid,
  Popper,
  ClickAwayListener,
  Grow,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";

export default function NavigationBar() {
  const router = useRouter();
  const [search, setSearch] = useState(router.query.search ?? "");

  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  const handleSearch = () => {
    if (!search) {
      router.push({
        pathname: "/",
      });
    } else {
      router.push(
        {
          pathname: "/",
          query: { search: search },
        }
        // undefined,
        // { shallow: true }
      );
      setSearch("");
    }
  };
  return (
    <Box
      sx={{
        height: "75px",
        display: "flex",
        alignItems: "center",
        padding: "0px 32px",
        width: "100%",
        zIndex: 2,
      }}
    >
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Typography
            variant="h4"
            fontWeight={"bold"}
            component={"a"}
            sx={{
              color: "primary.main",
              paddingRight: "16px",
              textDecoration: "none",
            }}
            href="/"
          >
            Anime
            <Typography
              variant="h4"
              fontWeight={"bold"}
              component={"span"}
              sx={{
                ":hover": {
                  color: "rgb(145, 145, 145)",
                },
                color: "#fff",
              }}
            >
              Flix
            </Typography>
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#1e2023",
              borderRadius: "10px",
              width: "400px",
              overflow: "hidden",
              paddingLeft: "8px",
            }}
          >
            <InputBase
              placeholder="Search here..."
              inputProps={{ "aria-label": "search" }}
              value={search}
              onKeyDown={(ev) => {
                if (!(ev.key === "Enter")) return;
                ev.preventDefault();
                handleSearch();
              }}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                color: "rgb(145, 145, 145)",
                flex: 1,
              }}
            />
            <ButtonBase
              onClick={handleSearch}
              sx={{ p: "8px" }}
              aria-label="search"
            >
              <SearchIcon />
            </ButtonBase>
          </Box>
        </div>

        {session === null ? (
          <Box>
            <Button
              onClick={() => {
                signIn();
              }}
              variant="outlined"
              size="large"
              sx={{
                borderRadius: "20px",
              }}
            >
              Sign In
            </Button>
          </Box>
        ) : (
          session !== undefined && <User user={session?.user} />
        )}
      </Box>
    </Box>
  );
}

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
