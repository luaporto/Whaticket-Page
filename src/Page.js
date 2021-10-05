import * as React from "react";
import Box from "@mui/material/Box";

import image1 from "./assets/image1.png";

import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";

const Page = ({
  ContainedButton,
  TextTypography,
  ButtonTypography,
  SubtitleTypography,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingRight: "78px",
            width: "666px",
            height: "495px",

            letterSpacing: "0.025em",
            color: "#302F2F",
          }}
        >
          <Stack direction="column" spacing={2}>
            <SubtitleTypography>
              Todos os seus atendentes no mesmo número de Whatsapp.
            </SubtitleTypography>

            <TextTypography>
              Organize o atendimento da sua empresa com o Whaticket, centralize
              todos os atendimentos em um único lugar e tenha visão clara de
              toda a comunicação com os seus clientes.
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
          }}
        >
          <img src={image1} alt="" />
        </Box>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              paddingRight: "78px",
              width: "666px",
              height: "495px",

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
        <Grid item>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingRight: "78px",
              width: "484px",
              height: "165px",

              backgroundColor: "#FFE7797D",

              borderRadius: "82px 0px 0px 0px",
            }}
          ></Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <SubtitleTypography>q terror</SubtitleTypography>
          <TextTypography>
            Crie um plano personalizado de acordo com a sua necessidade. Todos
            os recursos estão disponíveis em todos os planos. Não importa o
            tamanho da sua empresa, estamos aqui para te ajudar a modernizar o
            seu atendimento.
          </TextTypography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;
