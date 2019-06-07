import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Wrapper from "../Grid/styled";

const Title = ({ text, link }) => (
  <Wrapper>
    <Typography variant="h5" component="h3" style={{ margin: "60px" }}>
      {text}
    </Typography>

    {link ? (
      <Link
        to={link}
        style={{ margin: "60px", textDecoration: "none", color: "#3f51b5" }}
      >
        + More
      </Link>
    ) : null}
  </Wrapper>
);

export default Title;
