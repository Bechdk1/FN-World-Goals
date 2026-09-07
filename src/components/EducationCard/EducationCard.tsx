import type { EducationCardProps } from "../../types/types";
import { EducationCardStyled } from "./EducationCard.Styled";

export const EducationCard = ({ name, color }: EducationCardProps) => (
  <EducationCardStyled $bgColor={color}>
    <h2>{name}</h2>
  </EducationCardStyled>
);
