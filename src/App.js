import {
  Box,
  Container,
  Button,
  Stack,
  CssBaseline,
  Typography,
} from '@mui/material';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import TopBar from './Components/TopBar';
import Page from './Page';
import darkScrollbar from '@mui/material/darkScrollbar';

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

const scroll = createTheme({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
  },
});

function App() {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <Container sx={{ backgroundColor: '#ffffff' }}>
          <TopBar />
          <Page />
          <Box style={{ height: 10 }}></Box>
          <Box>
            {' '}
            <Typography
              sx={{
                width: '448px',
                height: '49px',

                fontFamily: 'Nunito',
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: '36px',
                lineHeight: '49px',
                letterSpacing: '0.025em',
                color: '#302F2F',
              }}
            >
              q terror
            </Typography>{' '}
          </Box>
          <Box style={{ height: 10000 }}></Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
