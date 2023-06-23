import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import divideAlpha from "@/Utils/DivideAlpha";
import Episodes from "@/Components/Cards/Episodes";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

export default function List({ data = [] }) {
  const [list, setList] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (data.length > 0) setList(divideAlpha(data));
  }, [data]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Object.keys(list).map((frag, i) => {
        return (
          <ListShow router={router} key={i} heading={frag} list={list[frag]} />
        );
        // return <></>;
      })}
    </Box>
  );
}

function ListShow({ heading, list, router }) {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography
        sx={{
          p: "8px",
          fontWeight: "bold",
        }}
      >
        {heading}
      </Typography>

      {list?.map((li, i) => {
        return (
          <Episodes
            onClick={() => {
              router.push("/watch/" + li.title + "/" + li._id);
            }}
            key={i}
            title={li.title}
            mode={1}
          />
        );
      })}
    </Box>
  );
}

export async function getStaticProps() {
  const res = await fetch(process.env.API_URL + "/list");
  const list = await res.json();

  return {
    props: {
      data: list.data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 86400, // In seconds
  };
}
