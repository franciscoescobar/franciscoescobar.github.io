import React from "react";

import Container from "../../components/Container";
import Section from "../../components/Section";
import Grid from "../../components/Grid";
import DataContainer from "../../components/DataContainer";
import Chips from "../../components/Chips";
import Hero from "../../components/Hero";
import Form from "../../components/Form";
import { ParallaxProvider } from "react-scroll-parallax";
const Home = () => (
  <>
    <ParallaxProvider>
      <Hero />
    </ParallaxProvider>
    <Container first={true}>
      <Section title="Apps with React" link="/apps/">
        <Grid cards={["abc", 1, 3]} />
      </Section>
      <Section title="Personal Data" link="/profile/">
        <DataContainer />
      </Section>
      <Section title="Tech & Packages">
        <Chips
          chips={[
            "React",
            "styled-components",
            "Redux",
            "React Router",
            "HTML5",
            "CSS",
            "React Hooks",
            "JS",
            "ES6",
            "NextJS",
            "Bulma",
            "Material-UI",
            "Git",
            "PropTypes"
          ]}
        />
      </Section>
      <Section title="Contact">
        <Form />
      </Section>
    </Container>
  </>
);

export default Home;
