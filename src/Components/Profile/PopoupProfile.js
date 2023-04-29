import React, { useState, useEffect } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ButtonBase from "@mui/material/ButtonBase";

import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

function PopupProfile({ user }) {
  const router = useRouter();

  const handleProfile = () => {
    router.push("/profile");
  };
  return (
    <Paper sx={{ bgcolor: "background.paper" }}>
      <Grid container sx={{ width: "280px", p: "0 5px" }}>
        <Grid
          container
          sx={(theme) => ({
            borderBottom: "2px solid",
            borderBottomColor: `${theme.palette.disable.light}50`,
            height: "100px",
          })}
        >
          <Grid
            item
            xs={4}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Grid
              component={"img"}
              src={user.image}
              sx={{
                border: "1px solid grey",
                maxWidth: "59px",
                maxHeight: "59px",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: "15px 0",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Roboto,sans-serif",
                m: 0,
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {user?.name}
            </Typography>
          </Grid>
        </Grid>

        <ButtonBase
          color="error"
          onClick={handleProfile}
          sx={(theme) => ({
            height: "40px",
            display: "flex",
            m: "13px 10px 5px 10px",
            borderRadius: "4px",
            bgcolor: `${theme.palette.primary.light}50`,
            width: "100%",
            transition: "all 0.3s",
            "&:hover": {
              bgcolor: `${theme.palette.primary.light}90`,
            },
          })}
        >
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <AccountCircleIcon sx={{ ml: "15px", color: "primary.dark" }} />
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Roboto,sans-serif",
                pr: "30px",
                textTransform: "capitalize",
              }}
            >
              Profile
            </Typography>
          </Grid>
        </ButtonBase>

        {/* <ButtonBase
          color="error"
          sx={(theme) => ({
            height: "40px",
            display: "flex",
            m: "5px 10px",
            borderRadius: "4px",
            bgcolor: `${theme.palette.disable.light}20`,
            width: "100%",
            transition: "all 0.3s",
            "&:hover": {
              bgcolor: `${theme.palette.disable.light}50`,
            },
          })}
        >
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <RoomPreferencesIcon sx={{ ml: "15px" }} />
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Roboto,sans-serif",
                pr: "30px",
                textTransform: "capitalize",
              }}
            >
              Settings
            </Typography>
          </Grid>
        </ButtonBase> */}
        <ButtonBase
          color="error"
          onClick={async () => {
            signOut({ callbackUrl: "/" });
            // router.push("/");
          }}
          sx={(theme) => ({
            height: "40px",
            display: "flex",
            m: "5px 10px 15px 10px",
            borderRadius: "4px",
            bgcolor: `${theme.palette.icon.error}50`,
            width: "100%",
            transition: "all 0.3s",
            "&:hover": {
              bgcolor: `${theme.palette.icon.error}80`,
            },
          })}
        >
          <>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <PowerSettingsNewOutlinedIcon color="error" sx={{ ml: "15px" }} />
            </Grid>
            <Grid
              item
              xs={10}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Roboto,sans-serif",

                  pr: "30px",
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                logout
              </Typography>
            </Grid>
          </>
        </ButtonBase>
      </Grid>
    </Paper>
  );
}

// setting up a errorBoundary
export default PopupProfile;
