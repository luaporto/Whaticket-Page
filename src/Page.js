import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import image1 from './assets/image1.png';

import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const Page = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '78px',
              width: '666px',
              height: '495px',
              // left: '78px',
              // top: '199px',

              letterSpacing: '0.025em',
              color: '#302F2F',
            }}
          >
            <Typography
              fontFamily="Nunito, sans-serif"
              variant="h2"
              gutterBottom
              component="div"
              fontSize="48px"
              fontWeight="800"
              lineHeight="65px"
            >
              Todos os seus atendentes no mesmo número de Whatsapp.
            </Typography>
            <Typography
              fontFamily="Nunito, sans-serif"
              variant="body1"
              gutterBottom
              component="div"
              fontSize="20px"
              fontWeight="400"
              lineHeight="27px"
            >
              Organize o atendimento da sua empresa com o Whaticket, centralize
              todos os atendimentos em um único lugar e tenha visão clara de
              toda a comunicação com os seus clientes.
            </Typography>
            <Button variant="contained" color="primary">
              Contrate agora
            </Button>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              // padding: '78px',

              // position: 'absolute',
              // width: '859px',
              // height: '632px',
              // left: '643px',
              // top: '108px',
            }}
          >
            <img src={image1} alt="" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
