import { Box, Button, Stack, Typography } from '@mui/material';
import '../App.css';
import icon from '../assets/icon.png';

const TopBar = () => {
  return (
    <>
      <Box
        sx={{
          zIndex: 100,
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: '0px',
          height: '25px',
        }}
      ></Box>
      <Box
        sx={{
          zIndex: 100,
          fontStyle: 'normal',
          fontSize: '20px',
          letterSpacing: '0.025em',
          position: 'sticky',
          top: '10px',
          backgroundColor: '#ffffff',
          height: '75px',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row">
            <img
              style={{
                width: 50,
                height: 50,
              }}
              src={icon}
              alt=""
            />

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
            <Button
              sx={{
                fontSize: '20px',
                fontFamily: 'Nunito, sans-serife',
                fontWeight: '800',
                textTransform: 'none',
              }}
              color="secondary"
            >
              Entrar
            </Button>
            <Button
              sx={{
                width: '146px',
                height: '27px',
                fontSize: '20px',
                fontFamily: 'Nunito, sans-serife',
                fontWeight: '700',
                textTransform: 'none',
              }}
              variant="contained"
              color="primary"
            >
              Contrate agora
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default TopBar;
