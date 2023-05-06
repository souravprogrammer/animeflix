import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import LaptopIcon from "@mui/icons-material/Laptop";

function Episode({ data, type, title, onClick }) {
  return (
    <ButtonBase
      onClick={onClick}
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
          padding: {
            xs: "10px",
            sm: "10px",
            md: "px",
            lg: "0px",
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
          }}
        >
          {
            <Typography textAlign={"left"} color={"primary"} pl={2}>
              {data?.title ? (
                <>
                  {data?.episodeNumber} {data?.title}
                </>
              ) : (
                <>{`${title} (${type})`}</>
              )}
            </Typography>
          }
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
              lg: "block",
            },
          }}
        >
          <Box
            component={"img"}
            py={1}
            loading="lazy"
            sx={{
              aspectRatio: "16 / 9",
              width: "100px",
            }}
            src={data?.img}
          />
        </Box>
      </Box>
    </ButtonBase>
  );
}

export default Episode;
