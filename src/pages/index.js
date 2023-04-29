import Head from "next/head";
import { Box } from "@mui/material";
import Highlight from "@/Components/Highlight";
import Section from "@/Components/Section";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";

export default function Home({ data, popularData, randomData, highlight }) {
  const [searchResult, setSearchResult] = useState(data?.data ?? []);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    setSearchResult(data?.data);
  }, [data]);

  return (
    <Box sx={{ minHeight: "100dvh" }}>
      {router?.query?.search ? (
        <Box pt="75px">
          <Section
            title={`search Result for "${router?.query?.search}"`}
            list={searchResult}
            type="search"
            result={{
              message: searchResult?.length
                ? `we got you ${searchResult?.length} results with ${router?.query?.search} keyword.`
                : "Oh no! We can't find anything with this keyword.",
            }}
          />
        </Box>
      ) : (
        <>
          <Highlight data={highlight} />
          <Section title={"Most Popular"} list={popularData ?? []} />
          <Section title={"recommended"} list={randomData ?? []} />
        </>
      )}
    </Box>
  );
}

function useSearchAnime(keyw, obj) {
  const [searchAnime, setSearchAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const call = async () => {
      setIsLoading(true);
      try {
        console.log(process.env.NEXT_PUBLIC_API_URL + "/search");
        const data = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + "/search",
          {
            params: { keyw: keyw },
          }
        );
        setSearchAnime(data.data);
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    };

    if (obj.skip) return;
    call();
  }, [keyw, obj]);

  return { searchAnime, isLoading };
}
export async function getServerSideProps(context) {
  let serachedData = [];
  let popularData = [];
  let randomData = [];
  if (context.query.search) {
    const res = await fetch(
      process.env.API_URL + `/search?keyw=${context.query.search}`
    );
    serachedData = await res.json();
  } else {
    const d = await axios.get(process.env.API_URL + "/popular");
    popularData = d.data?.data?.list;
    const rand = await axios.get(process.env.API_URL + "/random");
    randomData = rand.data?.data?.list;
  }
  return {
    props: {
      data: serachedData,
      popularData: popularData,
      randomData: randomData,
      highlight: randomData[Math.floor(Math.random() * randomData.length)],
    },
  };
}
