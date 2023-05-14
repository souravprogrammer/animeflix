import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import dynamic from "next/dynamic";
import { useCookies } from "react-cookie";

const User = dynamic(() => import("./User"));
export default function NavigationBar() {
  const router = useRouter();
  const [search, setSearch] = useState(router.query.search ?? "");
  const [open, setOpen] = useState(false);
  const nav = useRef();

  const { data: session } = useSession();

  const [userCookie, setuserCookie] = useCookies(["user"]);

  useEffect(() => {
    if (session) {
      console.log("this is session ", session.user.id);
      setuserCookie("id", session.user.id, { path: "/" });
    } else {
      setuserCookie("id", null, { path: "/" });
    }
  }, [session]);

  const handlemenu = () => {
    setOpen((o) => !o);
  };

  useEffect(() => {
    let resizeObserver = new ResizeObserver(() => {
      // console.log(nav.current?.offsetWidth);
      if (nav.current?.offsetWidth >= 900) {
        setOpen(false);
      }
    });
    // observing the change in width
    resizeObserver.observe(nav.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

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
  const HandleNavigate = () => {
    router.push("/list");
  };
  return (
    <Collapse collapsedSize={75} in={open}>
      <Box
        ref={nav}
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
            <IconButton
              onClick={handlemenu}
              sx={{
                width: "32px",
                height: "32px",
                mx: 2,
              }}
            >
              <MenuIcon
                sx={{
                  width: "24px",
                  height: "24px",
                  m: 2,
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                  },
                }}
              />
            </IconButton>
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
                position: {
                  sm: "absolute",
                  md: "relative",
                },
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                },
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
            <Box
              sx={{
                // border: "1px solid red",
                display: { xs: "none", md: "grid", lg: "grid" },
                placeItems: "center",
              }}
            >
              <Typography
                onClick={HandleNavigate}
                sx={{
                  margin: "8px",
                  ":hover": {
                    color: "grey",
                  },
                  px: "26px",

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
                Anime List
              </Typography>
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

      <Box
        sx={{
          display: { sm: "flex", md: "none" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 4,
          py: 2,
        }}
      >
        <Box
          sx={{
            display: { xs: "grid", sm: "grid", md: "none" },
            placeItems: "center",
            padding: "8px",
          }}
        >
          <Typography
            onClick={HandleNavigate}
            sx={{
              margin: "8px",
              ":hover": {
                color: "grey",
              },
              px: "34px",

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
            Anime List
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1e2023",
            borderRadius: "10px",
            width: { sx: "250px", sm: "400px" },
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
      </Box>
    </Collapse>
  );
}
