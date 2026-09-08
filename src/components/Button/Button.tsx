import type { ButtonProps } from "../../types/types";
import { ButtonStyled } from "../Form/Button.styled";

export const Button = ({ onClick, textValue, type }: ButtonProps) => (
  <ButtonStyled onClick={onClick} type={type}>
    {textValue}
  </ButtonStyled>
);
