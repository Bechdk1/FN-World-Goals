import type { GoalCardProps } from "../../types/types";
import { GoalCardStyled } from "./GoalCard.styled";
import parse from "html-react-parser";

export const GoalCard = ({ id, title, color, icon }: GoalCardProps) => (
  <GoalCardStyled color={color}>
    <div>{id}</div>
    <div>{title}</div>
    <div>{icon ? parse(icon) : null}</div>
  </GoalCardStyled>
);
