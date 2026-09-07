import type { HeaderProps } from "../../types/types";
import { HeaderStyled } from "./Header.styled";

export const Header = ({ children, className }: HeaderProps) => (
  <HeaderStyled className={className}>{children}</HeaderStyled>
);
