import { Box, Button, Stack, CssBaseline, Typography } from '@mui/material';
import '../App.css';

const TopBar = () => {
  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          fontStyle: 'normal',

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
          <Stack direction="row">
            <Typography
              sx={{ fontSize: '36px', fontFamily: 'Mada', fontWeight: '400' }}
            >
              Wha
            </Typography>
            <Typography
              sx={{ fontSize: '36px', fontFamily: 'Mada', fontWeight: '700' }}
            >
              ticket
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button color="secondary">Entrar</Button>
            <Button variant="contained" color="primary">
              Contrate agora
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default TopBar;
