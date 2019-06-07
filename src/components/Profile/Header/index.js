import React from "react";
import { Typography, IconButton, Link } from "@material-ui/core";
import { Wrapper, HeaderWrapper, SideWrapper, StyledAvatar } from "./styled";
const Header = () => (
  <Wrapper>
    <HeaderWrapper>
      <SideWrapper>
        <Typography>Name: Francisco Escobar</Typography>
        <Typography>Country: Argentina</Typography>
        <Typography>Age: 24</Typography>
      </SideWrapper>
      <StyledAvatar
        alt="Fran"
        src="https://scontent.fnqn2-1.fna.fbcdn.net/v/t1.0-9/983978_10151586490677771_1238186074_n.jpg?_nc_cat=109&_nc_ht=scontent.fnqn2-1.fna&oh=9ee7073b32cfb457e8193691e22f4772&oe=5D84564E"
      />
      <SideWrapper>
        <Link href="https://github.com/franciscoescobar">
          <IconButton>
            <i className="fab fa-github" />
          </IconButton>
          Github
        </Link>
        <Link href="https://www.linkedin.com/in/franciscoescobarsabio/">
          <IconButton>
            <i className="fab fa-linkedin" />
          </IconButton>
          Linkedin
        </Link>
      </SideWrapper>
    </HeaderWrapper>
  </Wrapper>
);

export default Header;
