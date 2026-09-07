import type { NavBarProps } from "../../types/types";
import { NavBarStyled } from "./Navbar.styled";

export const NavBar = ({ children, className }: NavBarProps) => (
  <NavBarStyled className={className}>{children}</NavBarStyled>
);
