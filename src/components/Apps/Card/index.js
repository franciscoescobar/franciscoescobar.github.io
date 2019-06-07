import React from "react";
import { Chip } from "@material-ui/core";
import { Wrapper, CardWrapper, ImageWrapper, DataWrapper } from "./styled";
const Card = () => (
  <Wrapper>
    <CardWrapper>
      <ImageWrapper />
      <DataWrapper>
        <h1 className="data-title">Hotels App</h1>
        <div className="data-tags">
          <Chip label="React" size="small" color="primary" variant="outlined" />
          <Chip label="ES6" size="small" color="primary" variant="outlined" />
          <Chip
            label="React Hooks"
            size="small"
            color="primary"
            variant="outlined"
          />
          <Chip label="Bulma" size="small" color="primary" variant="outlined" />
        </div>
        <p className="data-body">
          Algo mas largo que solo algo, Algo mas largo que solo algo Algo mas
          largo que solo algo, Algo mas largo que solo algo, Algo mas largo que
          solo algo Algo mas largo que solo algo
        </p>
      </DataWrapper>
    </CardWrapper>
  </Wrapper>
);

export default Card;
