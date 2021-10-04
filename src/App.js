import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import Page from './Page';
import TopBar from './Components/TopBar';
// import styled from '@emotion/styled/types/base';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00ACC1',
      contrastText: '#FFFFFF',
      darker: '#053e85',
    },
    secondary: {
      main: '#121212',
      darker: '#053e85',
    },
  },
});

function App() {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container>
          <TopBar />
          <Page />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
