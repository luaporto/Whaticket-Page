import { Box, Button, Stack, Typography } from "@mui/material";

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
          height: "90px",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.1))",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            paddingTop: "10px",
            height: "75px",
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
              href="https://app.whaticket.com/login"
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
            <ContainedButton
              variant="contained"
              color="primary"
              href="https://app.whaticket.com/signup"
            >
              <ButtonTypography>Contrate agora</ButtonTypography>
            </ContainedButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default TopBar;
