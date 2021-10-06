import * as React from 'react';
import Box from '@mui/material/Box';

import multipleUsers from './assets/multipleUsers.png';
import fastResponses from './assets/fastResponses.png';
import reports from './assets/reports.png';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import whaticketPrint from './assets/whaticketPrint.png';

import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';

const Page = ({
  ContainedButton,
  TextTypography,
  ButtonTypography,
  SubtitleTypography,
  CardSubtitleTypography,
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingRight: '78px',
              width: '666px',

              letterSpacing: '0.025em',
              color: '#302F2F',
            }}
          >
            <Stack direction="column" spacing={2}>
              <SubtitleTypography>
                Todos os seus atendentes no mesmo número de Whatsapp.
              </SubtitleTypography>

              <TextTypography>
                Organize o atendimento da sua empresa com o Whaticket,
                centralize todos os atendimentos em um único lugar e tenha visão
                clara de toda a comunicação com os seus clientes.
              </TextTypography>
              <ContainedButton variant="contained" color="primary">
                <ButtonTypography>Contrate agora</ButtonTypography>
              </ContainedButton>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '-75px',
            }}
          >
            <img src={image1} alt="" />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: 'flex',
              paddingRight: '78px',
              width: '666px',
              height: '250px',

              letterSpacing: '0.025em',
              color: '#302F2F',
            }}
          >
            <Stack direction="column" spacing={2}>
              <SubtitleTypography>Tudo em um único lugar</SubtitleTypography>

              <TextTypography>
                Tenha todos os departamentos da sua empresa organizados em um
                único painel. Não perca nenhum atendimento por falta de
                organização e separe os atendimentos automaticamente com a ajuda
                do nosso Chatbot.
              </TextTypography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: '180px',
              marginLeft: '200px',
              backgroundColor: '#FFE7797D',

              borderRadius: '82px 0px 0px 0px',
            }}
          ></Box>
        </Grid>
      </Grid>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={multipleUsers} alt="" />

            <Stack direction="column" spacing={2}>
              <SubtitleTypography>Multiplos atendentes</SubtitleTypography>

              <TextTypography>
                Cadastre toda a sua equipe no Whaticket. Cada atendente recebe o
                atendimento de forma organizada, e você pode acompanhar todos
                eles em tempo real.
              </TextTypography>
            </Stack>
          </Grid>

          <Grid item xs={4}>
            <img src={fastResponses} alt="" />
          </Grid>
          <Grid item xs={4}>
            <img src={reports} alt="" />
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SubtitleTypography>
            Interface amigável para sua equipe trabalhar sem complicação
          </SubtitleTypography>
          <TextTypography>
            A interface simples faz com que sua equipe sinta-se à vontade para
            realizar os atendimentos com seus clientes. O Whaticket promove
            solução de problemas, ótima experiência dos usuários, agregando
            valor ao seu negócio!
          </TextTypography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
          }}
        >
          <img src={image2} alt="" />
        </Grid>
      </Grid>
      <Box>
        <img src={whaticketPrint} alt=""></img>
      </Box>
    </>
  );
};

export default Page;
