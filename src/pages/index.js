import Head from "next/head";
import { Box } from "@mui/material";
import Highlight from "@/Components/Highlight";
import Section from "@/Components/Section";

export default function Home() {
  return (
    <Box sx={{}}>
      <Highlight />
      <Section title={"Recently Added"} list={[{}]} />
      <Section title={"trending"} list={[{}]} />
    </Box>
  );
}
