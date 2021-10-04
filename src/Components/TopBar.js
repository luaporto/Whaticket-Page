import { Box, Container, Button, Stack, CssBaseline } from '@mui/material';
import '../App.css';

const TopBar = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            fontStyle: 'normal',
            fontSize: '20px',
            letterSpacing: '0.025em',
            position: 'sticky',
            top: '10px',
            width: '100%',
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <span sx={{ fontFamily: 'Nunito' }}>
              Wha<strong>ticket</strong>
            </span>
            <Stack direction="row" spacing={2}>
              <Button color="secondary">Entrar</Button>
              <Button variant="contained" color="primary">
                Contrate agora
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default TopBar;
