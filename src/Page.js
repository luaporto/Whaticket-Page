import * as React from "react";
import Box from "@mui/material/Box";
// import Icon from '@mui/material/Icon';

import Intro from "./Components/Intro";
import SinglePlace from "./Components/SinglePlace";
import PlansText from "./Components/PlansText";
import Cards from "./Components/Cards";
import FriendlyInterface from "./Components/FriendlyInterface";
import WhaticketPrintScreen from "./Components/WhaticketPrintScreen";

import lightBlueCheck from "./assets/lightBlueCheck.png";
import lightGreenCheck from "./assets/lightGreenCheck.png";
import darkCheck from "./assets/darkCheck.png";
import StarRounded from "@mui/icons-material/StarRounded";

import Grid from "@mui/material/Grid";
import { CardContent, Card, Stack, Typography } from "@mui/material";

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
      <Intro
        SubtitleTypography={SubtitleTypography}
        TextTypography={TextTypography}
        ContainedButton={ContainedButton}
        ButtonTypography={ButtonTypography}
      />
      <SinglePlace
        SubtitleTypography={SubtitleTypography}
        TextTypography={TextTypography}
      />
      <Cards
        CardSubtitleTypography={CardSubtitleTypography}
        CardBox={CardBox}
        TextTypography={TextTypography}
      />
      <FriendlyInterface
        SubtitleTypography={SubtitleTypography}
        TextTypography={TextTypography}
      />
      <WhaticketPrintScreen />
      <PlansText TextTypography={TextTypography} />
      <Grid container spacing={2}>
        <Grid item xg={4} md={4} xs={12} sx={{ zIndex: "20" }}>
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
                <TextTypography sx={{ marginRight: "auto" }}>
                  Versão de código aberto
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  Instalação por sua conta
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  Sem atualizações constantes
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  Sem suporte oficial
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  Comunidade no GitHub
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightBlueCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  Funcionalidades básicas
                </TextTypography>
              </PriceListStack>

              <ContainedButton
                sx={{ marginTop: "25px", textAlign: "center" }}
                variant="contained"
                href="https://github.com/canove/whaticket"
                color="success"
              >
                <ButtonTypography> GitHub </ButtonTypography>
              </ContainedButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xg={4} md={4} xs={12} sx={{ zIndex: "20" }}>
          <Card
            sx={{
              maxWidth: 345,
              height: "auto",
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
              <Stack
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <PriceTitleTypography
                  sx={{
                    paddingTop: "20px",
                  }}
                >
                  {" "}
                  Pro{" "}
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
              <StarRounded
                sx={{
                  color: "#f1edf3",
                  position: "absolute",
                  marginLeft: "150px",
                  width: "50px",
                  height: "50px",
                }}
              />
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
                <TextTypography sx={{ marginRight: "auto" }}>
                  Ativação imediata
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  3 usuários simultâneos
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  1 conexão com whatsapp
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  Chatbot multinível ilimitado
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  Respostas rápidas
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={lightGreenCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  Relatórios
                </TextTypography>
              </PriceListStack>

              <ContainedButton
                sx={{ marginTop: "25px", textAlign: "center" }}
                variant="contained"
                href="https://app.whaticket.com/signup"
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
        <Grid item xg={4} md={4} xs={12} sx={{ zIndex: "20" }}>
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
                Enterprise{" "}
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
                  R$ 699,00
                </PriceTypography>
                <PriceTimeTypography sx={{ color: "#25385C" }}>
                  /mês
                </PriceTimeTypography>
              </Box>

              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  Ativação imediata
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  8 usuários simultâneos
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  2 conexões com Whatsapp
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  Chatbot multinível ilimitado
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  Respostas rápidas
                </TextTypography>
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ marginRight: "auto" }}>
                  Relatórios
                </TextTypography>
              </PriceListStack>

              <ContainedButton
                sx={{ marginTop: "25px", textAlign: "center" }}
                variant="contained"
                href="https://app.whaticket.com/signup"
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
      <Grid sx={{ paddingBottom: "100px" }}>
        <Stack direction="column" spacing={4}>
          <Box
            sx={{
              letterSpacing: "0.025em",
              textAlign: "center",
              fontStyle: "normal",
              zIndex: "20",
              marginLeft: "auto",
              marginRight: "auto",
              width: "450px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "36px",
                fontWeight: "800",
                lineHeight: "49px",
                alignItems: "center",
                paddingTop: "100px",
              }}
            >
              Conheça o Whaticket
            </Typography>
            <TextTypography
              sx={{
                paddingBottom: "35px",
                paddingTop: "20px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                alignItems: "center",
              }}
            >
              Cadastre-se gratuitamente e experimente 3 dias do Whaticket. Tenha
              acesso a plataforma exclusiva. Aproveite!
            </TextTypography>

            <ContainedButton
              variant="contained"
              color="primary"
              href="https://app.whaticket.com/signup"
            >
              <ButtonTypography>Teste agora</ButtonTypography>
            </ContainedButton>
          </Box>
        </Stack>
      </Grid>
    </>
  );
};

export default Page;
