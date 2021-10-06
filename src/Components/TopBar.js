import { Box, Button, Stack, Typography } from "@mui/material";
// import '../App.css';
import icon from "../assets/icon.png";

const TopBar = ({ ContainedButton, ButtonTypography }) => {
  return (
    <>
      <Box
        sx={{
          zIndex: 100,
          fontStyle: "normal",
          fontSize: "20px",
          letterSpacing: "0.025em",
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          height: "75px",
          margin: "15px -100px 10px -100px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            paddingTop: "10px",
            margin: "10px 95px 10px 75px",
          }}
        >
          <Stack direction="row">
            <img
              style={{
                width: 75,
                height: 75,
                marginTop: "-15px",
              }}
              src={icon}
              alt=""
            />

            <Typography
              sx={{ fontSize: "36px", fontFamily: "Mada", fontWeight: "400" }}
            >
              Wha
            </Typography>
            <Typography
              sx={{ fontSize: "36px", fontFamily: "Mada", fontWeight: "700" }}
            >
              ticket
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Button
              sx={{
                borderRadius: "10px",
                width: "100px",
                height: "55px",
                textTransform: "none",
              }}
              color="secondary"
            >
              <ButtonTypography>Entrar</ButtonTypography>
            </Button>
            <ContainedButton variant="contained" color="primary">
              <ButtonTypography>Contrate agora</ButtonTypography>
            </ContainedButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default TopBar;
