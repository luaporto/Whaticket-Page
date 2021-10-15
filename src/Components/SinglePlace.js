import { Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const SinglePlace = ({ SubtitleTypography, TextTypography }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xg={6} md={6} xs={12} sx={{ paddingBottom: "100px" }}>
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
      <Grid item xg={6} md={6} xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingRight: "78px",
            width: "484px",
            height: "165px",
            marginLeft: "auto",

            backgroundColor: "#FFE7797D",
            borderRadius: "82px 0px 0px 0px",
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default SinglePlace;
