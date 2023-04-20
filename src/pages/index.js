import Head from "next/head";
import { Box } from "@mui/material";
import Highlight from "@/Components/Highlight";

export default function Home() {
  return (
    <Box
      sx={{
        height: "200vh",
      }}
    >
      <Highlight />
      main page here
    </Box>
  );
}
