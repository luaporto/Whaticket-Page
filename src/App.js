import {
  Box,
  Container,
  Button,
  Stack,
  CssBaseline,
  Typography,
} from "@mui/material";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import TopBar from "./Components/TopBar";
import Page from "./Page";
import { style, styled } from "@mui/system";

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

const scroll = createTheme({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
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
          />
          <Box style={{ height: 10000 }}></Box>
        </Container>
        <SubtitleTypography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          AAAAAAAAAAAAAAAAAAAAAAAA
        </SubtitleTypography>
      </ThemeProvider>
    </>
  );
}

export default App;
