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
  CardBox,
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
              paddingBottom: '100px',
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
              paddingBottom: '100px',
            }}
          >
            <img src={image1} alt="" />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ paddingBottom: '150px' }}>
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
              paddingRight: '78px',
              width: '484px',
              height: '165px',
              marginLeft: 'auto',

              backgroundColor: '#FFE7797D',
              borderRadius: '82px 0px 0px 0px',
            }}
          ></Box>
        </Grid>
      </Grid>

      <Grid container spacing={10} sx={{ paddingBottom: '200px' }}>
        <Grid item xs={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={multipleUsers} alt="" />
          </Box>

          <Stack direction="column" spacing={2}>
            <CardSubtitleTypography>
              Multiplos atendentes
            </CardSubtitleTypography>

            <TextTypography sx={{ textAlign: 'center' }}>
              Cadastre toda a sua equipe no Whaticket. Cada atendente recebe o
              atendimento de forma organizada, e você pode acompanhar todos eles
              em tempo real.
            </TextTypography>
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={fastResponses} alt="" />
          </Box>
          <Stack direction="column" spacing={2}>
            <CardSubtitleTypography>Respostas rápidas</CardSubtitleTypography>

            <TextTypography sx={{ textAlign: 'center' }}>
              Chega de ficar repetindo a mesma mensagem várias vezes. Basta
              digitar “/” para acessar a sua lista de mensagens pré cadastradas.
            </TextTypography>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={reports} alt="" />
          </Box>
          <Stack direction="column" spacing={2}>
            <CardSubtitleTypography>
              Relatório de atendimentos
            </CardSubtitleTypography>

            <TextTypography sx={{ textAlign: 'center' }}>
              Tenha uma visão geral do tempo de resolução, tempo para a primeira
              resposta e quantidade de atendimentos, com gráficos por período,
              atendente, filas e conexões.
            </TextTypography>
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <CardBox>
            <Stack direction="column" spacing={2}>
              <CardSubtitleTypography>
                Separação de departamentos
              </CardSubtitleTypography>

              <TextTypography sx={{ textAlign: 'center' }}>
                Cada ticket pode ser atribuído a uma fila de atendimento,
                facilitando a organização e priorização dos atendimentos.
              </TextTypography>
            </Stack>
          </CardBox>
        </Grid>
        <Grid item xs={4}>
          <CardBox>
            <Stack direction="column" spacing={2}>
              <CardSubtitleTypography>
                Identificação do atendente
              </CardSubtitleTypography>

              <TextTypography sx={{ textAlign: 'center' }}>
                Todas as mensagens enviadas pelo Whaticket levam o nome do
                atendente antes do texto. Assim o seu cliente sempre sabe com
                quem está falando.
              </TextTypography>
            </Stack>
          </CardBox>
        </Grid>
        <Grid item xs={4}>
          <CardBox>
            <Stack direction="column" spacing={2}>
              <CardSubtitleTypography>
                Chatbot automatizado
              </CardSubtitleTypography>

              <TextTypography sx={{ textAlign: 'center' }}>
                Deixe a tecnologia trabalhar por você! Crie chatbots para
                separar seus atendimentos e levantar informações importantes de
                forma automática.
              </TextTypography>
            </Stack>
          </CardBox>
        </Grid>

        <Box
          sx={{
            // alignItems: 'center',
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',

            //estou sofrendo para encaixar esse box atrás do grid!
            position: 'static',
            left: '400px',
            top: '1850px',
            zIndex: '10',

            marginLeft: 'auto',

            width: '1152px',
            height: '138px',

            backgroundColor: '#6DAFA7DE',

            borderRadius: '0px 82px 0px 0px',
          }}
        ></Box>
      </Grid>

      <Grid container spacing={2} sx={{ paddingBottom: '200px' }}>
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
