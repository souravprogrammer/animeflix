import Head from "next/head";
import { Box } from "@mui/material";
import Highlight from "@/Components/Highlight";
import Section from "@/Components/Section";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home({ data }) {
  const [searchResult, setSearchResult] = useState(data?.data ?? []);
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    console.log(session);
  }, [session]);
  useEffect(() => {
    console.log(searchResult);
    console.log(router.query);
  }, [router.query]);
  return (
    <Box sx={{ minHeight: "100dvh" }}>
      {router?.query?.search ? (
        <Box pt="75px">
          <Section title={"search Result"} list={searchResult} />
        </Box>
      ) : (
        <>
          <Highlight />
          <Section title={"Recently Added"} list={[{}]} />
          <Section title={"trending"} list={[{}]} />
        </>
      )}
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
    props: {},
  };
}
