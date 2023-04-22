import React from "react";
import { useRouter } from "next/router";
import { Box, Typography, Paper, ButtonBase } from "@mui/material";
import AnimeCard from "@/Components/Cards/AnimeCard";
import Heading from "@/Components/Cards/Heading";
import LaptopIcon from "@mui/icons-material/Laptop";

export default function Show({ data }) {
  console.log(data);
  return (
    <Box
      sx={{
        paddingTop: "75px",
        maxWidth: "1576px",
        margin: "auto",
      }}
    >
      <AnimeCard />

      <Heading title="Episode" />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1,1fr)",
          gridColumnGap: "12px",
          // width: "80%",
        }}
      >
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
      </Box>
    </Box>
  );
}

function Episode() {
  return (
    <ButtonBase
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
          <Typography textAlign={"left"} color={"primary"} pl={2}>
            S1-E1 Terra Incognita, Part 1
          </Typography>
        </Box>
        <Box
          component={"img"}
          py={1}
          loading="lazy"
          sx={{
            aspectRatio: "16 / 9",
            width: "100px",
          }}
          src="https://image.tmdb.org/t/p/w185/jEB78hhob00vHIWNmxoirPtmagF.jpg"
        />
      </Box>
    </ButtonBase>
  );
}

export async function getServerSideProps(context) {
  const query = context.query;

  const res = await fetch(process.env.API_URL + "/info/" + query.ai);
  const data = await res.json();
  console.log(query);

  return {
    props: {
      data,
    },
  };
}
