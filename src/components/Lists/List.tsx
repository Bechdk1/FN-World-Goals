import type { LiProps, OlProps, UlProps } from "../../types/types";
import { OlStyled, UlStyled } from "./Ul.styled";
import { LiStyled } from "./Li.styled";

export const Ul = ({ children, className }: UlProps) => (
  <UlStyled className={className}>{children}</UlStyled>
);

export const Ol = ({ children, className }: OlProps) => (
  <OlStyled className={className}>{children}</OlStyled>
);

export const Li = ({ children, className }: LiProps) => (
  <LiStyled className={className}>{children}</LiStyled>
);
