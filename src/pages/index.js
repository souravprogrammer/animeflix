import Head from "next/head";
import { Box } from "@mui/material";
import Highlight from "@/Components/Highlight";
import Section from "@/Components/Section";

export default function Home({ data }) {
  // console.log("server : ", data);
  return (
    <Box sx={{}}>
      <Highlight />
      <Section title={"Recently Added"} list={[{}]} />
      <Section title={"trending"} list={[{}]} />
    </Box>
  );
}
export async function getServerSideProps(context) {
  if (context.query.search) {
    const res = await fetch(
      process.env.API_URL + `/search?keyw=${context.query.search}`
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  }
  return {
    props: {}, // will be passed to the page component as props
  };
}
