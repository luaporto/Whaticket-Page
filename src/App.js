import {
  Box,
  Container,
  Button,
  CssBaseline,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import TopBar from "./Components/TopBar";
import Page from "./Page";
import { styled } from "@mui/system";

import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import whiteIcon from "./assets/whiteIcon.png";

const ContainedButton = styled(Button)({
  borderRadius: "10px",
  width: "188px",
  height: "55px",
  textTransform: "none",
  filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.2))",
});

const CardBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "330px",
  height: "340px",
  backgroundColor: "#F4C2C9",
  borderRadius: "40px 40px 0px 0px",
  filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.29))",
});

const ButtonTypography = styled(Typography)({
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "27px",
  letterSpacing: "0.025em",
  filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.29))",
});

const SubtitleTypography = styled(Typography)({
  fontFamily: "Nunito, sans-serif",
  variant: "h2",
  component: "div",
  fontSize: "48px",
  fontWeight: "800",
  lineHeight: "65px",
});

const CardSubtitleTypography = styled(Typography)({
  fontFamily: "Nunito",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "33px",
  letterSpacing: "0.025em",
  textAlign: "center",
});

const TextTypography = styled(Typography)({
  fontFamily: "Nunito, sans-serif",
  variant: "body1",
  component: "div",
  fontSize: "20px",
  fontWeight: "400",
  lineHeight: "27px",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#00ACC1",
      contrastText: "#FFFFFF",
      darker: "#053e85",
    },
    success: {
      main: "#4783F0",
      darker: "#053e85",
    },
    warning: {
      main: "#00ACC1",
      darker: "#053e85",
    },
    danger: {
      main: "#25385C",
      darker: "#053e85",
    },
    secondary: {
      main: "#121212",
      darker: "#053e85",
    },
  },
});

function App() {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <TopBar
          ContainedButton={ContainedButton}
          ButtonTypography={ButtonTypography}
        />
        <Container
          sx={{
            backgroundColor: "#ffffff",
            zIndex: "100",
          }}
        >
          <Page
            ContainedButton={ContainedButton}
            ButtonTypography={ButtonTypography}
            SubtitleTypography={SubtitleTypography}
            TextTypography={TextTypography}
            CardSubtitleTypography={CardSubtitleTypography}
            CardBox={CardBox}
          />
        </Container>

        <FooterBottomWave>
          <FooterTopWave />
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              color: "#fff",
              paddingTop: "40px",
            }}
          >
            <Stack direction="row">
              <img style={{ width: 75, height: 75 }} src={whiteIcon} alt="" />

              <Typography
                sx={{
                  zIndex: 2000,

                  fontSize: "36px",
                  fontFamily: "Mada",
                  fontWeight: "400",
                  marginTop: "15px",
                }}
              >
                Wha
              </Typography>
              <Typography
                sx={{
                  fontSize: "36px",
                  fontFamily: "Mada",
                  fontWeight: "700",
                  marginTop: "15px",
                }}
              >
                ticket
              </Typography>
            </Stack>
            <TextTypography
              sx={{
                marginTop: "auto",
                fontSize: "15px",
                color: "#e0e0e0",
              }}
            >
              Feito com ♥ por Whaticket
            </TextTypography>

            <Stack direction="row" spacing={2}>
              <IconButton disabled sx={{ color: "#fff" }}>
                <Facebook />
              </IconButton>
              <IconButton disabled sx={{ color: "#fff" }}>
                <Instagram />
              </IconButton>
              <IconButton disabled sx={{ color: "#fff" }}>
                <LinkedIn />
              </IconButton>
            </Stack>
          </Stack>
        </FooterBottomWave>
      </ThemeProvider>
    </>
  );
}

export default App;
