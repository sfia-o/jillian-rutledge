import React from "react";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from "./HeroElements";
import Video from "../../assets/video.mp4";

const HeroSection = () => {

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>IT'S AN ADVENTURE IN THERE</HeroH1>
        <HeroP>My work, my passion, my vision is to support you to FREE yourself from the limitations of fear and to TRANSFORM and SHIFT these limitations into your FULL POTENTIAL.</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
