import {
  Box,
  Container,
  Button,
  CssBaseline,
  Typography,
  Stack,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import TopBar from "./Components/TopBar";
import Page from "./Page";
import { styled } from "@mui/system";

const ContainedButton = styled(Button)({
  borderRadius: "10px",
  width: "188px",
  height: "55px",
  textTransform: "none",
});

const CardBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // padding: '78px',
  width: "330px",
  height: "311px",

  backgroundColor: "#F4C2C9",
  borderRadius: "40px 40px 0px 0px",
});

const ButtonTypography = styled(Typography)({
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "27px",
  letterSpacing: "0.025em",
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

const PriceTypography = styled(Typography)({
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: "800",
  fontSize: "30px",
  lineHeight: "41px",
  letterSpacing: "0.025em",
});

const PriceTitleTypography = styled(Typography)({
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: "800",
  fontSize: "30px",
  lineHeight: "41px",

  color: "#fff",
  textAlign: "center",
  letterSpacing: "0.025em",
});

const PriceTimeTypography = styled(Typography)({
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "27px",
  letterSpacing: "0.025em",

  color: "#4783F0",
});

const PriceListStack = styled(Stack)({
  direction: "row",
  justifyContent: "space-between",
  alignItems: "center",
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
        <Container
          sx={{
            backgroundColor: "#ffffff",
            zIndex: "100",
          }}
        >
          <TopBar
            ContainedButton={ContainedButton}
            ButtonTypography={ButtonTypography}
          />
          <Page
            ContainedButton={ContainedButton}
            ButtonTypography={ButtonTypography}
            SubtitleTypography={SubtitleTypography}
            TextTypography={TextTypography}
            CardSubtitleTypography={CardSubtitleTypography}
            PriceTypography={PriceTypography}
            PriceTimeTypography={PriceTimeTypography}
            PriceTitleTypography={PriceTitleTypography}
            PriceListStack={PriceListStack}
            CardBox={CardBox}
          />
        </Container>
        <Box
          sx={{
            backgroundColor: "#00ACC1",
            width: "auto",
            height: "100px",
            zIndex: "200",
          }}
        ></Box>
      </ThemeProvider>
    </>
  );
}

export default App;
