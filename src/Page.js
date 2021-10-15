import * as React from "react";
import Box from "@mui/material/Box";
// import Icon from '@mui/material/Icon';

import Intro from "./Components/Intro";
import SinglePlace from "./Components/SinglePlace";
import PlansText from "./Components/PlansText";
import Cards from "./Components/Cards";
import Prices from "./Components/Prices";
import FriendlyInterface from "./Components/FriendlyInterface";
import WhaticketPrintScreen from "./Components/WhaticketPrintScreen";

import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";

const Page = ({
  ContainedButton,
  TextTypography,
  ButtonTypography,
  SubtitleTypography,
  CardSubtitleTypography,
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
      <Prices
        TextTypography={TextTypography}
        ContainedButton={ContainedButton}
        ButtonTypography={ButtonTypography}
      />
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
