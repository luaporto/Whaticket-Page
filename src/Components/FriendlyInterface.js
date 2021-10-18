import { Grid, Stack } from "@mui/material";
import React from "react";

import image2 from "../assets/image2.png";

const FriendlyInterface = ({ SubtitleTypography, TextTypography }) => {
  return (
    <Grid container spacing={2} sx={{ paddingBottom: "200px" }}>
      <Grid
        item
        lg={6}
        md={12}
        xs={12}
        sx={{ marginLeft: "auto", marginRight: "auto" }}
      >
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
        lg={6}
        md={12}
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img src={image2} alt="" />
      </Grid>
    </Grid>
  );
};

export default FriendlyInterface;
