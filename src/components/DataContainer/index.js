import React from "react";
import Container from "../Container";
import { Wrapper, StyledAvatar } from "./styled";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
const DataContainer = () => (
  <Container>
    <Wrapper>
      <StyledAvatar
        alt="Fran"
        src="https://media.licdn.com/dms/image/C4E03AQE0BRLnZC6B_w/profile-displayphoto-shrink_200_200/0?e=1565222400&v=beta&t=u5df-yXGqBQM9Vcvbt1dTNa7804XsRuCUou2WnEu0EI"
      />
    </Wrapper>
    <Wrapper>
      <Typography variant="h4" className="flex-item">
        Francisco Escobar
      </Typography>
      <Typography className="flex-item">React Developer</Typography>
      <div className="flex-item">
        <IconButton
          aria-label="Github"
          href="https://github.com/franciscoescobar"
        >
          <Icon className="fab fa-github" />
        </IconButton>
        <IconButton
          aria-label="Linkedin"
          href="https://www.linkedin.com/in/franciscoescobarsabio/"
        >
          <Icon className="fab fa-linkedin" />
        </IconButton>
      </div>
      <Typography variant="body1" className="flex-item body">
        An artist of considerable range, Chet Faker — the name taken by
        Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
        records all of his own music, giving it a warm, intimate feel with a
        solid groove structure.
      </Typography>
      <Typography variant="h6" className="flex-item title">
        Co-founder of Vinci | Apr 2018 - Feb 2019
      </Typography>

      <Typography className="flex-item body">
        An artist of considerable range, Chet Faker — the name taken by
        Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
        records all of his own music, giving it a warm, intimate feel with a
        solid groove structure.
      </Typography>
    </Wrapper>
  </Container>
);
export default DataContainer;
