import { Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const Outro = ({ TextTypography, ContainedButton, ButtonTypography }) => {
  return (
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
              filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.29))",
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
  );
};

export default Outro;
