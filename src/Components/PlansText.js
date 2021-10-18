import React from "react";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const PlansText = ({ TextTypography }) => {
  return (
    <Stack direction="column">
      <Box
        sx={{
          letterSpacing: "0.025em",
          textAlign: "center",
          fontStyle: "normal",
          zIndex: "20",
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
            maxWidth: "450px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "35px",
            paddingBottom: "50px",
          }}
        >
          Crie um plano personalizado de acordo com a sua necessidade. Todos os
          recursos estão disponíveis em todos os planos. Não importa o tamanho
          da sua empresa, estamos aqui para te ajudar a modernizar o seu
          atendimento.
        </TextTypography>{" "}
      </Box>
    </Stack>
  );
};

export default PlansText;
