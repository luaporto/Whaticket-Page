import * as React from "react";

import Intro from "./Components/Intro";
import Outro from "./Components/Outro";
import SinglePlace from "./Components/SinglePlace";
import PlansText from "./Components/PlansText";
import Cards from "./Components/Cards";
import Prices from "./Components/Prices";
import FriendlyInterface from "./Components/FriendlyInterface";
import WhaticketPrintScreen from "./Components/WhaticketPrintScreen";

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
      <Outro
        TextTypography={TextTypography}
        ContainedButton={ContainedButton}
        ButtonTypography={ButtonTypography}
      />
    </>
  );
};

export default Page;
