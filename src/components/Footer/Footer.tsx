import type { FooterProps } from "../../types/types";
import { FooterStyled } from "./Footer.styled";

export const Footer = ({ children, className }: FooterProps) => (
  <FooterStyled className={className}>{children}</FooterStyled>
);
