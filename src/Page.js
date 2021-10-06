import * as React from "react";
import Box from "@mui/material/Box";

import multipleUsers from "./assets/multipleUsers.png";
import fastResponses from "./assets/fastResponses.png";
import reports from "./assets/reports.png";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import whaticketPrint from "./assets/whaticketPrint.png";
import lightBlueCheck from "./assets/lightBlueCheck.png";
import lightGreenCheck from "./assets/lightGreenCheck.png";
import darkCheck from "./assets/darkCheck.png";

import Grid from "@mui/material/Grid";
import {
  CardContent,
  Card,
  CardActionArea,
  CardMedia,
  Stack,
  Typography,
  Button,
} from "@mui/material";

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
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingRight: "78px",
              width: "666px",

              letterSpacing: "0.025em",
              color: "#302F2F",
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-75px",
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
              display: "flex",
              paddingRight: "78px",
              width: "666px",
              paddingBottom: "100px",

              letterSpacing: "0.025em",
              color: "#302F2F",
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
              display: "flex",
              alignItems: "center",
              height: "180px",
              marginLeft: "200px",
              backgroundColor: "#FFE7797D",

              borderRadius: "82px 0px 0px 0px",
            }}
          ></Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img src={multipleUsers} alt="" />

          <Stack direction="column" spacing={2}>
            <SubtitleTypography>Multiplos atendentes</SubtitleTypography>

            <TextTypography>
              Cadastre toda a sua equipe no Whaticket. Cada atendente recebe o
              atendimento de forma organizada, e você pode acompanhar todos eles
              em tempo real.
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "300px",
          }}
        >
          <img src={image2} alt="" />
        </Grid>
      </Grid>
      <Box sx={{ paddingBottom: "100px" }}>
        <img src={whaticketPrint} alt=""></img>
      </Box>

      <Grid container spacing={2}>
        <Box
          sx={{
            letterSpacing: "0.025em",
            textAlign: "center",
            fontStyle: "normal",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "36px",
              fontWeight: "800",
              lineHeight: "49px",
            }}
          >
            Planos que cabem no seu bolso
          </Typography>
          <TextTypography
            sx={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "27px",
            }}
          >
            Crie um plano personalizado de acordo com a sua necessidade. Todos
            os recursos estão disponíveis em todos os planos. Não importa o
            tamanho da sua empresa, estamos aqui para te ajudar a modernizar o
            seu atendimento.
          </TextTypography>
        </Box>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, borderRadius: "20px 20px 20px 20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "auto",
                height: "108px",

                background: "#4783F0",
                borderRadius: "20px 20px 0px 0px",
              }}
            >
              <PriceTitleTypography
                sx={{
                  paddingTop: "35px",
                }}
              >
                {" "}
                Código aberto{" "}
              </PriceTitleTypography>
            </Box>
            <CardContent sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                }}
              >
                <PriceTypography sx={{ color: "#4783F0" }}>
                  R$ 0
                </PriceTypography>
                <PriceTimeTypography sx={{ color: "#4783F0" }}>
                  /mês
                </PriceTimeTypography>
              </Box>

              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Versão de código aberto
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Instalação por sua conta
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Sem atualizações constantes
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Sem suporte oficial
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Comunidade no GitHub
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Funcionalidades básicas
                </TextTypography>
              </PriceListStack>

              <ContainedButton
                sx={{ marginTop: "25px" }}
                variant="contained"
                href="aaaaaaaaaaaaaaaaaaaaa"
                color="success"
              >
                <ButtonTypography> GitHub </ButtonTypography>
              </ContainedButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 345,
              height: 500,
              borderRadius: "20px 20px 20px 20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "auto",
                height: "108px",

                background: "#00ACC1",
                borderRadius: "20px 20px 0px 0px",
              }}
            >
              <Stack>
                <PriceTitleTypography
                  sx={{
                    paddingTop: "20px",
                  }}
                >
                  {" "}
                  Código aberto{" "}
                </PriceTitleTypography>{" "}
                <TextTypography
                  sx={{
                    textAlign: "center",
                    color: "#FCEBEB",
                  }}
                >
                  Mais popular
                </TextTypography>
              </Stack>
            </Box>
            <CardContent sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                }}
              >
                <PriceTypography sx={{ color: "#00ACC1" }}>
                  R$ 209,70
                </PriceTypography>
                <PriceTimeTypography sx={{ color: "#00ACC1" }}>
                  /mês
                </PriceTimeTypography>
              </Box>

              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Ativação imediata
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Instalação por sua conta
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Sem atualizações constantes
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Sem suporte oficial
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Comunidade no GitHub
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Funcionalidades básicas
                </TextTypography>
              </PriceListStack>

              <ContainedButton
                sx={{ marginTop: "25px" }}
                variant="contained"
                href="aaaaaaaaaaaaaaaaaaaaa"
                color="warning"
              >
                <ButtonTypography sx={{ color: "#fff" }}>
                  {" "}
                  Contrate agora{" "}
                </ButtonTypography>
              </ContainedButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, borderRadius: "20px 20px 20px 20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "auto",
                height: "108px",

                background: "#25385C",
                borderRadius: "20px 20px 0px 0px",
              }}
            >
              <PriceTitleTypography
                sx={{
                  paddingTop: "35px",
                }}
              >
                {" "}
                Código aberto{" "}
              </PriceTitleTypography>
            </Box>
            <CardContent sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                }}
              >
                <PriceTypography sx={{ color: "#25385C" }}>
                  R$ 0
                </PriceTypography>
                <PriceTimeTypography sx={{ color: "#25385C" }}>
                  /mês
                </PriceTimeTypography>
              </Box>

              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Ativação imediata
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  8 usuários simultâneos
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  2 conexões com Whatsapp
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Chatbot multinível ilimitado
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Respostas rápidas
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ textAlign: "center" }}>
                  Relatórios
                </TextTypography>
              </PriceListStack>

              <ContainedButton
                sx={{ marginTop: "10px" }}
                variant="contained"
                href="aaaaaaaaaaaaaaaaaaaaa"
                color="danger"
              >
                <ButtonTypography
                  sx={{
                    color: "#fff",
                  }}
                >
                  {" "}
                  Contrate agora{" "}
                </ButtonTypography>
              </ContainedButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
