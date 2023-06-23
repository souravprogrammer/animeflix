import Head from "next/head";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

import { useCookies } from "react-cookie";

// for dynimic import to reduce load time
const Highlight = dynamic(() => import("@/Components/Highlight"));
const Section = dynamic(() => import("@/Components/Section"));
import Call from "@/Utils/Call";

const Keys = {
  popular: "POPULAR",
  random: "RANDOM",
  high: "HIGH",
};

export default function Home({ data }) {
  const [searchResult, setSearchResult] = useState(data?.data ?? []);
  const router = useRouter();
  const [userCookie, setuserCookie] = useCookies(["user"]);

  const [isLoadingPopular, setIsLoadingPopular] = useState(true);
  const [isLoadingRandom, setIsLoadingRandom] = useState(true);
  const [isLoadingHigh, setIsLoadingHigh] = useState(true);

  const [popularData, setPopularData] = useState([]);
  const [randomData, setRandomData] = useState([]);
  const [highlight, setHighlight] = useState({});
  const { data: session } = useSession();

  useEffect(() => {
    if (sessionStorage.getItem(Keys.popular)) {
      setPopularData(
        JSON.parse(sessionStorage.getItem(Keys.popular)).data?.list
      );
      setIsLoadingPopular(false);
    } else {
      Call(process.env.NEXT_PUBLIC_API_URL + "/popular").then((res) => {
        setPopularData(res?.data?.list);
        setIsLoadingPopular(false);
        sessionStorage.setItem(Keys.popular, JSON.stringify(res));
      });
    }
    if (sessionStorage.getItem(Keys.random)) {
      setRandomData(JSON.parse(sessionStorage.getItem(Keys.random)));
      setHighlight(JSON.parse(sessionStorage.getItem(Keys.high)));
      setIsLoadingRandom(false);
      setIsLoadingHigh(false);
    } else {
      Call(process.env.NEXT_PUBLIC_API_URL + "/random").then((res) => {
        const rand = res?.data?.list;
        const high =
          rand?.[Math.floor(Math.random() * randomData.length)] ?? {};
        setHighlight(high);
        setRandomData(rand);
        setIsLoadingRandom(false);
        setIsLoadingHigh(false);
        sessionStorage.setItem(Keys.random, JSON.stringify(rand));
        sessionStorage.setItem(Keys.high, JSON.stringify(high));
      });
    }
  }, []);

  useEffect(() => {
    if (session) {
      setuserCookie("id", session.user.id, { path: "/" });
    } else {
      setuserCookie("id", null, { path: "/" });
    }
  }, [session]);

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
            <Highlight data={highlight} isLoading={isLoadingHigh} />
            <Section
              title={"Most Popular"}
              list={popularData ?? []}
              isLoading={isLoadingPopular}
            />
            <Section
              title={"recommended"}
              list={randomData ?? []}
              isLoading={isLoadingRandom}
            />
          </>
        )}
      </Box>
    </>
  );
}

export async function getServerSideProps(context) {
  let serachedData = [];
  // let popularData = [];
  // let randomData = [];

  try {
    if (context.query.search) {
      const res = await fetch(
        process.env.API_URL + `/search?keyw=${context.query.search}`
      );
      serachedData = await res.json();
    }
    //  else {
    //   const x = await fetch(process.env.API_URL + "/popular");
    //   const a = await fetch(process.env.API_URL + "/random");

    //   const [data, r] = await Promise.all([x, a]);

    //   const d = await data.json();
    //   const rand = await r.json();

    //   popularData = d?.data?.list;
    //   randomData = rand?.data?.list;
    // }

    // const high = randomData?.[Math.floor(Math.random() * randomData.length)] ?? {};
    return {
      props: {
        data: serachedData,
        // popularData: popularData ?? [],
        // randomData: randomData ?? [],
        // highlight: high ?? {},
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
