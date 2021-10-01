// import logo from './logo.svg';
import { Box, Container, Button, Stack, CssBaseline } from "@mui/material";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TopBar from "./Components/TopBar";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
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
      <ThemeProvider theme={theme}>
        <TopBar />
      </ThemeProvider>
    </>
  );
}

export default App;
