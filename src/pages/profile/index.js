import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import { useSession, getSession } from "next-auth/react";
const Heading = dynamic(() => import("@/Components/Cards/Heading"));
const Card = dynamic(() => import("@/Components/Cards/card"));
const SIZE = 10;

export default function Profile() {
  const { data: session } = useSession();
  const [bookmarks, setBookmarks] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function getBookmarks() {
      try {
        const result = await fetch("/api/bookmark/get");
        const res = await result.json();
        setBookmarks(res?.data?.result?.[0]?.list ?? []);
      } catch (err) {}
    }

    getBookmarks();
  }, []);

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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 200px))",
            gridGap: "8px 8px",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          {bookmarks?.slice((page - 1) * SIZE, page * SIZE).map((item, i) => (
            <Card data={item} key={i} disable={true} />
          ))}
        </Box>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <Pagination
            onChange={(e, value) => {
              setPage(value);
            }}
            page={page}
            count={Math.ceil(bookmarks?.length / 10)}
            color="primary"
          />
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
