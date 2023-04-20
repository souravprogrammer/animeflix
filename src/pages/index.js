import Head from "next/head";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        // border: "1px solid red",
        height: "200vh",
      }}
    >
      <Box
        sx={{
          height: "500px",
          // background:
          //   "url(https://image.tmdb.org/t/p/w500/osq5D28OW66VjwO4jjtxU5JarRv.jpg)",
          filter: " blur(4px)",

          backgroundImage:
            "linear-gradient(rgba(17, 17, 17, 0.801),rgb(17, 17, 17)), url(https://image.tmdb.org/t/p/w500/osq5D28OW66VjwO4jjtxU5JarRv.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
      main page here
    </Box>
  );
}
