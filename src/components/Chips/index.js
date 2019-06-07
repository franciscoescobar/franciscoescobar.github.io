import React from "react";
import Wrapper from "../Grid/styled";
import { StyledChip } from "./styled";
const Chips = ({ chips }) => (
  <Wrapper>
    {chips.map(chip => (
      <StyledChip variant="outlined" color="primary" label={chip} key={chip} />
    ))}
  </Wrapper>
);

export default Chips;
