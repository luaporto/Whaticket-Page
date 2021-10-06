import { Box, Container, Button, CssBaseline, Typography } from "@mui/material";
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

const theme = createTheme({
  palette: {
    primary: {
      main: "#00ACC1",
      contrastText: "#FFFFFF",
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
        <Container sx={{ backgroundColor: "#ffffff" }}>
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
          />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
