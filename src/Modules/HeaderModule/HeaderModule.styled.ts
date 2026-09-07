import styled from "styled-components";
import { NavBar } from "../../components/Navbar/Navbar";
import { NavLinkBase } from "../../components/Navbar/Navbar.styled";
import { Ul } from "../../components/Lists/List";

export const HeaderNavList = styled(Ul)`
  gap: 20px;
`;

export const HeaderLogo = styled.img`
  padding: 1.8rem;
  width: auto;
`;

export const HeaderNav = styled(NavBar)`
  width: 100%;
  justify-content: flex-end;
  text-align: center;
  padding: 1.8rem;
  display: flex;
`;

export const HeaderNavLink = styled(NavLinkBase)`
  color: #333333;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;

  &:hover,
  &:focus-visible {
    color: #2bbbde;
  }

  &.active {
    color: #03689c;
  }
`;
