import React, { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Typography,
  Paper,
  ButtonBase,
  Button,
  ButtonGroup,
  CircularProgress,
  ClickAwayListener,
} from "@mui/material";
import AnimeCard from "@/Components/Cards/AnimeCard";
import Heading from "@/Components/Cards/Heading";
import LaptopIcon from "@mui/icons-material/Laptop";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import axios from "axios";
import { getSession } from "next-auth/react";

export default function Show({ data }) {
  const router = useRouter();
  const [ispending, startTransition] = useTransition();
  const [episodePlayer, setEpisodePlayer] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isOff, setIsOff] = useState(true);

  // console.log(">> ", data);

  useEffect(() => {
    if (router.query.episode) {
      startTransition(() => {
        if (
          router.query.episode > data.episodes.length ||
          router.query.episode < 0
        )
          router.push("/404");
        setEpisodePlayer(data.episodes[router.query.episode - 1]);
        setIsLoading(false);
      });
    }
  }, [router.query]);

  useEffect(() => {
    if (!isOff) {
    }
  }, [isOff]);

  return (
    <Box
      sx={{
        margin: "auto",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          pointerEvents: "none",

          width: "100dvw",
          height: "100dvh",
          backgroundColor: "#000",
          opacity: isOff ? 0 : 0.99,
          zIndex: 2,
          top: 0,
          left: 0,
        }}
      />
      {isLoading ? (
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            height: "600px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          {episodePlayer ? (
            <ClickAwayListener onClickAway={() => setIsOff(true)}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  margin: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "16px",
                  }}
                >
                  <Box
                    sx={{
                      position: "sticky",
                      zIndex: 3,
                      aspectRatio: "16 / 9",
                      height: "600px",
                      width: "80%",
                      border: "none",
                    }}
                    sandbox="allow-scripts"
                    component={"iframe"}
                    src={episodePlayer?.link}
                    allow="fullscreen;"
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
                        py: "8px",
                      }}
                    >
                      <ButtonBase
                        sx={{
                          height: "50px",
                          display: "flex",
                          justifyContent: "flex-start",
                          px: "16px",
                          borderRight: "5px solid",
                          borderColor: "primary.main",
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
                    justifyContent: "space-between",
                  }}
                >
                  <ButtonGroup size="small">
                    <Button
                      onClick={() => setIsOff(false)}
                      startIcon={<EmojiObjectsIcon />}
                    >
                      light
                    </Button>
                    {parseInt(router.query.episode) === 1 ? null : (
                      <Button
                        startIcon={<KeyboardBackspaceIcon />}
                        variant="outlined"
                        // sx={{
                        //   display:
                        //     parseInt(router.query.episode) === 1 ? "none" : "",
                        // }}
                        onClick={() => {
                          setIsLoading(true);

                          router.replace(
                            {
                              pathname: `/watch/${router.query.show[0]}/${router.query.show[1]}`,
                              query: { episode: router.query.episode - 1 },
                            }
                            // undefined,
                            // { shallow: true }
                          );
                        }}
                      >
                        Prev Episode
                      </Button>
                    )}
                    {parseInt(router.query.episode) ===
                    data?.episodes?.length ? null : (
                      <Button
                        onClick={() => {
                          setIsLoading(true);
                          router.replace({
                            pathname: `/watch/${router.query.show[0]}/${router.query.show[1]}`,
                            query: {
                              episode: parseInt(router.query.episode) + 1,
                            },
                          });
                        }}
                        endIcon={<ArrowRightAltIcon />}
                        variant="outlined"
                      >
                        next Episode
                      </Button>
                    )}
                  </ButtonGroup>
                </Box>
              </Box>
            </ClickAwayListener>
          ) : null}
        </Box>
      )}
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
                  setIsLoading(true);
                  router.replace(
                    {
                      pathname: `/watch/${router.query.show[0]}/${router.query.show[1]}`,
                      query: { episode: index + 1 },
                    }
                    // undefined,
                    // { shallow: true }
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
  try {
    const session = await getSession(context);
    const data = await axios.get(
      process.env.API_URL + "/info/" + query.show?.[1],
      {
        params: {
          userId: session?.user?.id ?? "",
        },
      }
    );
    if (
      data?.data?.data?.length === 0 ||
      query.episode > data?.data.data?.[0].episodes.length
    )
      throw Error("not Found");

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
