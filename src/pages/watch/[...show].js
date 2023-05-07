import React, { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import ButtonGroup from "@mui/material/ButtonGroup";
import CircularProgress from "@mui/material/CircularProgress";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Button from "@mui/material/Button";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { getSession } from "next-auth/react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

import Heading from "@/Components/Cards/Heading";
const AnimeCard = dynamic(() => import("@/Components/Cards/AnimeCard"));
const Episode = dynamic(() => import("@/Components/Cards/Episodes"));

export default function Show({ data }) {
  const router = useRouter();
  const [ispending, startTransition] = useTransition();
  const [episodePlayer, setEpisodePlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOff, setIsOff] = useState(true);

  const { data: session } = useSession();
  // const [userCookie, setuserCookie] = useCookies(["user"]);

  // useEffect(() => {
  //   if (session) {
  //     console.log("this is session ", session.user.id);

  //     setuserCookie("id", session.user.id, { path: "/" });
  //   } else {
  //     setuserCookie("id", null, { path: "/" });
  //   }
  // }, [session]);
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
    } else {
      startTransition(() => {
        setEpisodePlayer(null);
      });
    }
  }, [router.query, data.episodes, router]);

  useEffect(() => {
    if (!isOff) {
    }
  }, [isOff]);

  return (
    <>
      <Head>
        <title>
          {data?.title} {"| AnimeFlix - watch anime online in high quality"}{" "}
        </title>
        <meta name="title" content={data.title} />
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data?.genres?.join(",")} />
      </Head>
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
                        position: "relative",
                        // border: "1px solid red",
                        overflow: "hidden",
                        width: "80%",
                      }}
                    >
                      <Box
                        sx={{
                          // position: "sticky",
                          zIndex: 3,
                          aspectRatio: "16 / 9",
                          height: "600px",
                          width: "100%",
                          border: "none",
                        }}
                        sandbox="allow-scripts"
                        component={"iframe"}
                        src={episodePlayer?.link}
                        allow="fullscreen;"
                      />
                      <Box
                        component={"img"}
                        src="/Channel.png"
                        loading="lazy"
                        allow="autoplay"
                        sx={{
                          position: "absolute",
                          top: 11,
                          right: 10,
                          // border: "1px solid red",
                          width: "200px",
                          pointerEvents: "none",
                          transform: "scale(0.9)",
                        }}
                      />
                    </Box>

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
                    router.push(
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
    </>
  );
}
export async function getServerSideProps(context) {
  const query = context.query;
  try {
    const session = await getSession(context);
    const dd = await axios.get(
      process.env.API_URL + "/info/" + query.show?.[1],
      {
        params: {
          userId: session?.user?.id ?? context?.req?.cookies?.id ?? "",
        },
      }
    );
    if (
      dd?.data.data?.length === 0 ||
      query.episode > dd?.data?.data?.[0].episodes.length
    )
      throw Error("not Found");

    return {
      props: {
        data: dd?.data?.data?.[0] ?? {},
      },
    };
  } catch (err) {
    console.log(err.message);
    return {
      notFound: true,
    };
  }
}
