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
                display: 'flex',
                alignItems: 'center',
                paddingRight: '2px',
                width: 100,
                height: 100,
                paddingRight: 11,
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
