import Head from "next/head";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// for dynimic import to reduce load time
const Highlight = dynamic(() => import("@/Components/Highlight"));
const Section = dynamic(() => import("@/Components/Section"));

export default function Home({ data, popularData, randomData, highlight }) {
  const [searchResult, setSearchResult] = useState(data?.data ?? []);
  const router = useRouter();

  useEffect(() => {
    setSearchResult(data?.data);
  }, [data]);

  return (
    <>
      <Head>
        <title>AnimeFlix - Watch anime online in high quality</title>
        <meta
          name="description"
          content="AnimeFlix - Watch anime online in high quality in Hindi"
        />
        <meta
          name="keywords"
          content="anime, kimanime, watch anime, anime free, episode , animeflix , zoro, 9anime,hindi,tamil,urdu,crunchyroll ,free anime"
        />
      </Head>
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
    </>
  );
}

export async function getServerSideProps(context) {
  let serachedData = [];
  let popularData = [];
  let randomData = [];

  try {
    if (context.query.search) {
      const res = await fetch(
        process.env.API_URL + `/search?keyw=${context.query.search}`
      );
      serachedData = await res.json();
    } else {
      const data = await fetch(process.env.API_URL + "/popular");
      const d = await data.json();

      popularData = d?.data?.list;

      const r = await fetch(process.env.API_URL + "/random");
      const rand = await r.json();

      randomData = rand?.data?.list;
    }

    const high =
      randomData?.[Math.floor(Math.random() * randomData.length)] ?? {};
    return {
      props: {
        data: serachedData,
        popularData: popularData,
        randomData: randomData,
        highlight: high,
      },
    };
  } catch (err) {
    return {
      props: {
        data: [],
        popularData: [],
        randomData: [],
        highlight: {},
      },
    };
  }
}
