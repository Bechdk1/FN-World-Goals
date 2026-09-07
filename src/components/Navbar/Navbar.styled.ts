import { NavLink } from "react-router-dom";
import styled from "styled-components";

/**
 * SHARED BASE — only what the header nav and the footer nav agree on.
 * No colours here on purpose: each one picks its own in its own file.
 */
export const NavBarStyled = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLinkBase = styled(NavLink)`
  display: inline-block;
  padding-block: 0.5rem;
  font-family: "Oswald", sans-serif;
  text-decoration: none;
  color: inherit;
  transition: color 120ms ease;
`;
