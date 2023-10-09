import React from "react";
import { StyledCard } from "./styles/Card.styled";

export interface CardProps {
  id: number;
  title: string;
  body: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ id, title, body, image }) => {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
};

export default Card;
