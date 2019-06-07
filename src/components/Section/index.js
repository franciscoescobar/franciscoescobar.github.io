import React from "react";
import Title from "../Title";
import Divider from "@material-ui/core/Divider";
import { Wrapper } from "./styled";
const Section = ({ title, children, link }) => (
  <Wrapper>
    <Title text={title} link={link ? link : null} />
    {children}
    <Divider />
  </Wrapper>
);

export default Section;
