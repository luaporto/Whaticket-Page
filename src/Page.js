import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import image1 from "./assets/image1.png";

import Grid from "@mui/material/Grid";
import { Button, Stack, Typography } from "@mui/material";

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
    </Grid>
  );
};

export default Page;
