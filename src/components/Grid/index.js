import React from "react";
import GridCard from "../GridCard";
import Wrapper from "./styled";
const Grid = ({ cards }) => (
  <Wrapper>
    {cards.map(card => {
      return (
        <GridCard info={card} key={card} icon={card.icon ? card.icon : ""} />
      );
    })}
  </Wrapper>
);

export default Grid;
