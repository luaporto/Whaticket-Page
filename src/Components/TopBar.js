import { Box, Container, Button, Stack, CssBaseline } from "@mui/material";
import "../App.css";
import icon from "../assets/icon.png";

const TopBar = () => {
  return (
    <>
      <Box
        sx={{
          zIndex: 100,
          backgroundColor: "#ffffff",
          position: "sticky",
          top: "0px",
          height: "25px",
        }}
      ></Box>
      <Box
        sx={{
          zIndex: 100,
          fontStyle: "normal",
          fontSize: "20px",
          letterSpacing: "0.025em",
          position: "sticky",
          top: "10px",
          backgroundColor: "#ffffff",
          height: "75px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row">
            <Box
              sx={{
                width: "100px",
                height: "100px",
              }}
            >
              <img src={icon} alt="" />
            </Box>
            <span sx={{ fontFamily: "Nunito", fontWeight: 700 }}>
              Wha<strong>ticket</strong>
            </span>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button color="secondary">Entrar</Button>
            <Button variant="contained" color="primary">
              Contrate agora
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default TopBar;
