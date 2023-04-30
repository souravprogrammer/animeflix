import React from "react";

import { Box, Grid, Typography } from "@mui/material";
import { useSession, getSession } from "next-auth/react";
import Heading from "@/Components/Cards/Heading";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <Box p={3}>
      <Grid
        sx={(theme) => ({
          borderBottom: "2px solid",
          borderBottomColor: `${theme.palette.disable.light}50`,
        })}
      >
        <Grid
          container
          sx={{
            // borderBottom: "2px solid",
            // borderBottomColor: `${theme.palette.disable.light}50`,
            height: "100px",
            maxWidth: "300px",
          }}
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
              src={session?.user.image}
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
              {session?.user?.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                // fontFamily: "Roboto,sans-serif",
                m: 0,
                color: "text.secondary",
                textTransform: "lowercase",
              }}
            >
              {session?.user?.email}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid py={2}>
        <Heading title="My Bookmarks" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>This Feature is coming soon..</Typography>
        </Box>
      </Grid>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session === null) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        session: session,
      },
    };
  }
}
