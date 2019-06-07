import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;
const CardWrapper = styled.div`
  display: flex;
  min-height: 200px;
  flex-direction: column;
  border: 1px solid #cbcbcb;
  width: 80%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > * {
    padding: 0 40px;
  }
  .card-title {
    padding-top: 20px;
  }
  .card-subtitle {
  }
  .card-body {
    padding-bottom: 20px;
  }
`;
const Card = () => (
  <Wrapper>
    <CardWrapper>
      <Typography className="card-title" variant="h5">
        Acamica | Aug 2014 - Jul 2015
      </Typography>
      <Typography className="card-subtitle" variant="h6">
        Junior Developer
      </Typography>
      <Typography className="card-body" variant="body1">
        knjgdaknjgdknjdfgjknknjdskn jfsknjdk gnsjnsjkdkknjgdaknjgdknjdfg
        jknknjdsknjfsknjdkgnsjnsjkd kknjgd aknjgdknjdfg jknknjdsknjfsknj
        dkgnsjnsjkdkknjgdaknjgdknjdfgjk nknjdsknjfsknjdkgnsjnsjkdkk
        knjdfgjknknjdsknjfsknjdkgnsjnsjkd kknjgdakn
        jgdknjdfgfsknjdkgnsjnsjkdkkgnsjnsjkdk jgdknjdfgfsknjd jgdknjdfgfsknjd
        jgdknjdfgfsknjd jgdknjdfgfsknjd jgdknjdfgfsknjd jgdknjdfgfsknjd
        jgdknjdfgfsknjd
      </Typography>
    </CardWrapper>
  </Wrapper>
);

export default Card;
