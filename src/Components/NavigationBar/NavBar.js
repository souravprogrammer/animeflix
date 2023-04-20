import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { InputBase, ButtonBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function NavigationBar() {
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
            sx={{
              color: "primary.main",
              paddingRight: "16px",
            }}
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
              inputProps={{ "aria-label": "search google maps" }}
              sx={{
                color: "rgb(145, 145, 145)",
                flex: 1,
              }}
            />
            <ButtonBase type="button" sx={{ p: "8px" }} aria-label="search">
              <SearchIcon />
            </ButtonBase>
          </Box>
        </div>

        <Box>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderRadius: "20px",
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
