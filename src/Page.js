import * as React from 'react';
import Box from '@mui/material/Box';
// import Icon from '@mui/material/Icon';

import multipleUsers from './assets/multipleUsers.png';
import fastResponses from './assets/fastResponses.png';
import reports from './assets/reports.png';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import whaticketPrint from './assets/whaticketPrint.png';
import lightBlueCheck from './assets/lightBlueCheck.png';
import lightGreenCheck from './assets/lightGreenCheck.png';
import darkCheck from './assets/darkCheck.png';

import Grid from '@mui/material/Grid';
import { CardContent, Card, Stack, Typography } from '@mui/material';

// import whiteIcon from './assets/whiteIcon.png';
import {
  AccountTreeOutlined,
  BadgeOutlined,
  ForumOutlined,
} from '@mui/icons-material';

const Page = ({
  ContainedButton,
  TextTypography,
  ButtonTypography,
  SubtitleTypography,
  CardSubtitleTypography,
  PriceTypography,
  PriceTimeTypography,
  PriceTitleTypography,
  PriceListStack,
  CardBox,
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xg={6} md={6} xs={12}>
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

              <TextTypography paddingBottom="50px">
                Organize o atendimento da sua empresa com o Whaticket,
                centralize todos os atendimentos em um único lugar e tenha visão
                clara de toda a comunicação com os seus clientes.
              </TextTypography>
              <ContainedButton
                href="https://app.whaticket.com/signup"
                variant="contained"
                color="primary"
              >
                <ButtonTypography>Contrate agora</ButtonTypography>
              </ContainedButton>
            </Stack>
          </Box>
        </Grid>
        <Grid item xg={6} md={6} xs={12}>
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
        <Grid item xg={6} md={6} xs={12} sx={{ paddingBottom: '100px' }}>
          <Box
            sx={{
              display: 'flex',
              paddingRight: '78px',
              width: '666px',
              paddingBottom: '100px',

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
        <Grid item xg={6} md={6} xs={12}>
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
        <Grid item xg={4} md={4} xs={12}>
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
        <Grid item xg={4} md={4} xs={12}>
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
        <Grid item xg={4} md={4} xs={12}>
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

        <Grid item sx={{ zIndex: '30' }} xg={4} md={4} xs={12}>
          <CardBox>
            <Stack
              sx={{ marginLeft: 'auto', marginRight: 'auto', width: '250px' }}
              direction="column"
              spacing={2}
            >
              <CardSubtitleTypography>
                <AccountTreeOutlined
                  color="primary"
                  fontSize="large"
                ></AccountTreeOutlined>
                Separação de departamentos
              </CardSubtitleTypography>

              <TextTypography sx={{ textAlign: 'center' }}>
                Cada ticket pode ser atribuído a uma fila de atendimento,
                facilitando a organização e priorização dos atendimentos.
              </TextTypography>
            </Stack>
          </CardBox>
        </Grid>
        <Grid item sx={{ zIndex: '30' }} xg={4} md={4} xs={12}>
          <CardBox>
            <Stack
              sx={{ marginLeft: 'auto', marginRight: 'auto', width: '250px' }}
              direction="column"
              spacing={2}
            >
              <CardSubtitleTypography>
                <BadgeOutlined color="primary" fontSize="large"></BadgeOutlined>
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
        <Grid item sx={{ zIndex: '30' }} xg={4} md={4} xs={12}>
          <CardBox>
            <Stack
              sx={{ marginLeft: 'auto', marginRight: 'auto', width: '250px' }}
              direction="column"
              spacing={2}
            >
              <CardSubtitleTypography>
                <ForumOutlined color="primary" fontSize="large"></ForumOutlined>
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
            zIndex: '10',

            marginLeft: '80px',
            marginRight: '-100px',

            width: '90vw',
            height: '138px',
            marginTop: '-80px',

            backgroundColor: '#6DAFA7DE',

            borderRadius: '0px 82px 0px 0px',
          }}
        ></Box>
      </Grid>

      <Grid container spacing={2} sx={{ paddingBottom: '200px' }}>
        <Grid item xg={6} md={6} xs={12}>
          <Stack direction="column" spacing={2}>
            <SubtitleTypography>
              Interface amigável para sua equipe trabalhar sem complicação
            </SubtitleTypography>
            <TextTypography>
              A interface simples faz com que sua equipe sinta-se à vontade para
              realizar os atendimentos com seus clientes. O Whaticket promove
              solução de problemas, ótima experiência dos usuários, agregando
              valor ao seu negócio!
            </TextTypography>
          </Stack>
        </Grid>

        <Grid
          item
          xg={6}
          md={6}
          xs={12}
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
      <Box sx={{ paddingBottom: '100px' }}>
        <img src={whaticketPrint} alt=""></img>
      </Box>

      <Stack direction="column">
        <Box
          sx={{
            letterSpacing: '0.025em',
            textAlign: 'center',
            fontStyle: 'normal',
            zIndex: '20',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: '36px',
              fontWeight: '800',
              lineHeight: '49px',
            }}
          >
            Planos que cabem no seu bolso
          </Typography>
          <TextTypography
            sx={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '27px',
              width: '450px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Crie um plano personalizado de acordo com a sua necessidade. Todos
            os recursos estão disponíveis em todos os planos. Não importa o
            tamanho da sua empresa, estamos aqui para te ajudar a modernizar o
            seu atendimento.
          </TextTypography>{' '}
        </Box>
      </Stack>
      <br />
      <Grid container spacing={2}>
        <Grid item xg={4} md={4} xs={12} sx={{ zIndex: '20' }}>
          <Card sx={{ maxWidth: 345, borderRadius: '20px 20px 20px 20px' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: 'auto',
                height: '108px',

                background: '#4783F0',
                borderRadius: '20px 20px 0px 0px',
              }}
            >
              <PriceTitleTypography
                sx={{
                  paddingTop: '35px',
                }}
              >
                {' '}
                Código aberto{' '}
              </PriceTitleTypography>
            </Box>
            <CardContent sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'baseline',
                }}
              >
                <PriceTypography sx={{ color: '#4783F0' }}>
                  R$ 0
                </PriceTypography>
                <PriceTimeTypography sx={{ color: '#4783F0' }}>
                  /mês
                </PriceTimeTypography>
              </Box>

              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  Versão de código aberto
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  Instalação por sua conta
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  Sem atualizações constantes
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  Sem suporte oficial
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  Comunidade no GitHub
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  Funcionalidades básicas
                </TextTypography>
              </PriceListStack>

              <ContainedButton
                sx={{ marginTop: '25px', textAlign: 'center' }}
                variant="contained"
                href="https://github.com/canove/whaticket"
                color="success"
              >
                <ButtonTypography> GitHub </ButtonTypography>
              </ContainedButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xg={4} md={4} xs={12} sx={{ zIndex: '20' }}>
          <Card
            sx={{
              maxWidth: 345,
              height: 'auto',
              borderRadius: '20px 20px 20px 20px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: 'auto',
                height: '108px',

                background: '#00ACC1',
                borderRadius: '20px 20px 0px 0px',
              }}
            >
              <Stack>
                <PriceTitleTypography
                  sx={{
                    paddingTop: '20px',
                  }}
                >
                  {' '}
                  Pro{' '}
                </PriceTitleTypography>{' '}
                <TextTypography
                  sx={{
                    textAlign: 'center',
                    color: '#FCEBEB',
                  }}
                >
                  Mais popular
                </TextTypography>
              </Stack>
            </Box>
            <CardContent sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'baseline',
                }}
              >
                <PriceTypography sx={{ color: '#00ACC1' }}>
                  R$ 209,70
                </PriceTypography>
                <PriceTimeTypography sx={{ color: '#00ACC1' }}>
                  /mês
                </PriceTimeTypography>
              </Box>

              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  Ativação imediata
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  3 usuários simultâneos
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  1 conexão com whatsapp
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  Chatbot multinível ilimitado
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  Respostas rápidas
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  Relatórios
                </TextTypography>
              </PriceListStack>

              <ContainedButton
                sx={{ marginTop: '25px', textAlign: 'center' }}
                variant="contained"
                href="https://app.whaticket.com/signup"
                color="warning"
              >
                <ButtonTypography sx={{ color: '#fff' }}>
                  {' '}
                  Contrate agora{' '}
                </ButtonTypography>
              </ContainedButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xg={4} md={4} xs={12} sx={{ zIndex: '20' }}>
          <Card sx={{ maxWidth: 345, borderRadius: '20px 20px 20px 20px' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: 'auto',
                height: '108px',

                background: '#25385C',
                borderRadius: '20px 20px 0px 0px',
              }}
            >
              <PriceTitleTypography
                sx={{
                  paddingTop: '35px',
                }}
              >
                {' '}
                Enterprise{' '}
              </PriceTitleTypography>
            </Box>
            <CardContent sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'baseline',
                }}
              >
                <PriceTypography sx={{ color: '#25385C' }}>
                  R$ 699,00
                </PriceTypography>
                <PriceTimeTypography sx={{ color: '#25385C' }}>
                  /mês
                </PriceTimeTypography>
              </Box>

              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  Ativação imediata
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  8 usuários simultâneos
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  2 conexões com Whatsapp
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  Chatbot multinível ilimitado
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  Respostas rápidas
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ marginRight: 'auto' }}>
                  Relatórios
                </TextTypography>
              </PriceListStack>

              <ContainedButton
                sx={{ marginTop: '25px', textAlign: 'center' }}
                variant="contained"
                href="https://app.whaticket.com/signup"
                color="danger"
              >
                <ButtonTypography
                  sx={{
                    color: '#fff',
                  }}
                >
                  {' '}
                  Contrate agora{' '}
                </ButtonTypography>
              </ContainedButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid sx={{ paddingBottom: '100px' }}>
        <Stack direction="column" spacing={4}>
          <Box
            sx={{
              letterSpacing: '0.025em',
              textAlign: 'center',
              fontStyle: 'normal',
              zIndex: '20',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '450px',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: '36px',
                fontWeight: '800',
                lineHeight: '49px',
                alignItems: 'center',
                paddingTop: '100px',
              }}
            >
              Conheça o Whaticket
            </Typography>
            <TextTypography
              sx={{
                paddingBottom: '35px',
                paddingTop: '20px',
                fontFamily: 'Nunito, sans-serif',
                fontSize: '20px',
                fontWeight: '400',
                lineHeight: '27px',
                alignItems: 'center',
              }}
            >
              Cadastre-se gratuitamente e experimente 3 dias do Whaticket. Tenha
              acesso a plataforma exclusiva. Aproveite!
            </TextTypography>

            <ContainedButton variant="contained" color="primary">
              <ButtonTypography href="https://app.whaticket.com/signup">
                Teste agora
              </ButtonTypography>
            </ContainedButton>
          </Box>
        </Stack>
      </Grid>
    </>
  );
};

export default Page;
