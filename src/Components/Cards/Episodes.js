import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import LaptopIcon from "@mui/icons-material/Laptop";

function Episode({ data, type, title, onClick, mode }) {
  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        px: mode === 1 ? "8px" : "16px",
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
            xs: mode === 1 ? "5px" : "10px",
            sm: mode === 1 ? "5px" : "10px",
            md: "0px",
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
            <Typography
              textAlign={"left"}
              color={"primary"}
              pl={2}
              sx={{
                typography: {
                  lg: "body1",
                  md: "body1",
                  sm: "body2",
                  xs: "body2",
                },
              }}
            >
              {data?.title ? (
                <>
                  {data?.episodeNumber} {data?.title}
                </>
              ) : (
                <>{`${title} ${type ? `(${type})` : ""}`}</>
              )}
            </Typography>
          }
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              md: mode === 1 ? "none" : "block",
              lg: mode === 1 ? "none" : "block",
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
