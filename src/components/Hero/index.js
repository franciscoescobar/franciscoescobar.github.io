import React from "react";
import { StyledHero, StyledTitle } from "./styled";
import { Parallax } from "react-scroll-parallax";
const Hero = () => (
  <Parallax y={[-20, 20]}>
    <StyledHero>
      <StyledTitle variant="h1" color="secondary">
        My Personal Web
      </StyledTitle>
    </StyledHero>
  </Parallax>
);

export default Hero;
