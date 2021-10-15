import { Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

import multipleUsers from "../assets/multipleUsers.png";
import fastResponses from "../assets/fastResponses.png";
import reports from "../assets/reports.png";

import {
  AccountTreeOutlined,
  BadgeOutlined,
  ForumOutlined,
} from "@mui/icons-material";

const Cards = ({ CardSubtitleTypography, TextTypography, CardBox }) => {
  return (
    <Grid container spacing={10} sx={{ paddingBottom: "200px" }}>
      <Grid item xg={4} md={4} xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={multipleUsers} alt="" />
        </Box>

        <Stack direction="column" spacing={2}>
          <CardSubtitleTypography>Multiplos atendentes</CardSubtitleTypography>

          <TextTypography sx={{ textAlign: "center" }}>
            Cadastre toda a sua equipe no Whaticket. Cada atendente recebe o
            atendimento de forma organizada, e você pode acompanhar todos eles
            em tempo real.
          </TextTypography>
        </Stack>
      </Grid>
      <Grid item xg={4} md={4} xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={fastResponses} alt="" />
        </Box>
        <Stack direction="column" spacing={2}>
          <CardSubtitleTypography>Respostas rápidas</CardSubtitleTypography>

          <TextTypography sx={{ textAlign: "center" }}>
            Chega de ficar repetindo a mesma mensagem várias vezes. Basta
            digitar “/” para acessar a sua lista de mensagens pré cadastradas.
          </TextTypography>
        </Stack>
      </Grid>
      <Grid item xg={4} md={4} xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={reports} alt="" />
        </Box>
        <Stack direction="column" spacing={2}>
          <CardSubtitleTypography>
            Relatório de atendimentos
          </CardSubtitleTypography>

          <TextTypography sx={{ textAlign: "center" }}>
            Tenha uma visão geral do tempo de resolução, tempo para a primeira
            resposta e quantidade de atendimentos, com gráficos por período,
            atendente, filas e conexões.
          </TextTypography>
        </Stack>
      </Grid>

      <Grid item sx={{ zIndex: "30" }} xg={4} md={4} xs={12}>
        <CardBox>
          <Stack
            sx={{ marginLeft: "auto", marginRight: "auto", width: "250px" }}
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

            <TextTypography sx={{ textAlign: "center" }}>
              Cada ticket pode ser atribuído a uma fila de atendimento,
              facilitando a organização e priorização dos atendimentos.
            </TextTypography>
          </Stack>
        </CardBox>
      </Grid>
      <Grid item sx={{ zIndex: "30" }} xg={4} md={4} xs={12}>
        <CardBox>
          <Stack
            sx={{ marginLeft: "auto", marginRight: "auto", width: "250px" }}
            direction="column"
            spacing={2}
          >
            <CardSubtitleTypography>
              <BadgeOutlined color="primary" fontSize="large"></BadgeOutlined>
              Identificação do atendente
            </CardSubtitleTypography>

            <TextTypography sx={{ textAlign: "center" }}>
              Todas as mensagens enviadas pelo Whaticket levam o nome do
              atendente antes do texto. Assim o seu cliente sempre sabe com quem
              está falando.
            </TextTypography>
          </Stack>
        </CardBox>
      </Grid>
      <Grid item sx={{ zIndex: "30" }} xg={4} md={4} xs={12}>
        <CardBox>
          <Stack
            sx={{ marginLeft: "auto", marginRight: "auto", width: "250px" }}
            direction="column"
            spacing={2}
          >
            <CardSubtitleTypography>
              <ForumOutlined color="primary" fontSize="large"></ForumOutlined>
              Chatbot automatizado
            </CardSubtitleTypography>

            <TextTypography sx={{ textAlign: "center" }}>
              Deixe a tecnologia trabalhar por você! Crie chatbots para separar
              seus atendimentos e levantar informações importantes de forma
              automática.
            </TextTypography>
          </Stack>
        </CardBox>
      </Grid>

      <Box
        sx={{
          zIndex: "10",

          marginLeft: "80px",
          marginRight: "-100px",

          width: "90vw",
          height: "138px",
          marginTop: "-80px",

          backgroundColor: "#6DAFA7DE",

          borderRadius: "0px 82px 0px 0px",
        }}
      ></Box>
    </Grid>
  );
};

export default Cards;
