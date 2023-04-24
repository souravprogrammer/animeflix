import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Typography,
  Paper,
  ButtonBase,
  Button,
  ButtonGroup,
} from "@mui/material";
import AnimeCard from "@/Components/Cards/AnimeCard";
import Heading from "@/Components/Cards/Heading";
import LaptopIcon from "@mui/icons-material/Laptop";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import axios from "axios";

export default function Show({ data }) {
  const router = useRouter();
  const [episodePlayer, setEpisodePlayer] = useState();

  useEffect(() => {
    if (router.query.episode) {
      setEpisodePlayer(data.episodes[router.query.episode - 1]);
    }
  }, [router.query]);

  return (
    <Box
      sx={{
        margin: "auto",
      }}
    >
      <Box>
        {episodePlayer ? (
          <Box
            sx={{
              // border: "1px solid red",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              // alignItems: "center",
              margin: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",

                margin: "16px",
                border: "1px solid red",
              }}
            >
              <Box
                sx={{
                  aspectRatio: "16 / 9",
                  height: "600px",
                  width: "80%",
                  border: "none",
                }}
                sandbox="allow-scripts"
                component={"iframe"}
                src={episodePlayer?.link}
              />
              <Paper
                sx={{
                  flex: 1,
                  py: "16px",
                }}
              >
                <Typography
                  sx={{
                    padding: "16px",
                  }}
                  variant="body"
                  fontWeight={"bold"}
                >
                  Options
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <ButtonBase
                    sx={{
                      height: "70px",
                      display: "flex",
                      justifyContent: "flex-start",
                      px: "16px",
                    }}
                  >
                    <Typography>VidStream</Typography>
                  </ButtonBase>
                </Box>
              </Paper>
            </Box>
            <Box
              p={"8px"}
              sx={{
                justifySelf: "flex-end",
                display: "flex",
                border: "1px solid red",
                justifyContent: "space-between",
              }}
            >
              <ButtonGroup size="small">
                <Button startIcon={<EmojiObjectsIcon />}>light</Button>
                <Button
                  startIcon={<KeyboardBackspaceIcon />}
                  variant="outlined"
                >
                  Prev Episode
                </Button>
                <Button endIcon={<ArrowRightAltIcon />} variant="outlined">
                  next Episode
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        ) : null}
      </Box>
      <Box>
        <AnimeCard data={data} />
      </Box>

      <Box>
        <Heading title="Episode" pl="12px" />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr)",
            gridColumnGap: "12px",
          }}
        >
          {data?.episodes?.map((episode, index) => {
            return (
              <Episode
                onClick={() => {
                  // console.log(router);
                  router.push(
                    {
                      pathname: router.asPath,
                      query: { episode: index + 1 },
                    },
                    undefined,
                    { shallow: true }
                  );
                }}
                data={episode}
                key={index}
                title={data.title}
                type={data.type}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

function Episode({ data, type, title, onClick }) {
  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        px: "16px",
        ":hover": {
          backgroundColor: "#1e2023",
        },
      }}
    >
      <LaptopIcon />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            flex: 1,
          }}
        >
          {
            <Typography textAlign={"left"} color={"primary"} pl={2}>
              {data?.title ? (
                <>
                  {data?.episodeNumber} {data?.title}
                </>
              ) : (
                <>{`${title} (${type})`}</>
              )}
            </Typography>
          }
        </Box>
        <Box
          component={"img"}
          py={1}
          loading="lazy"
          sx={{
            aspectRatio: "16 / 9",
            width: "100px",
          }}
          src={data?.img}
        />
      </Box>
    </ButtonBase>
  );
}

export async function getServerSideProps(context) {
  const query = context.query;

  console.log(query);

  try {
    // const res = await fetch(process.env.API_URL + "/info/" + query.ai);
    // const data = await res.json();
    const data = await axios.get(
      process.env.API_URL + "/info/" + query.show?.[1]
    );
    if (data?.data?.data?.length === 0) throw Error("not Found");

    return {
      props: {
        data: data?.data.data?.[0] ?? {},
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
