import styled from "styled-components";
import { NavBar } from "../../components/Navbar/Navbar";
import { NavLinkBase } from "../../components/Navbar/Navbar.styled";
import { Ul } from "../../components/Lists/List";

export const FooterNav = styled(NavBar)`
  justify-content: center;
`;

export const FooterList = styled(Ul)`
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const FooterNavLink = styled(NavLinkBase)`
  color: #ffffff;
  font-size: 1rem;

  &:hover,
  &:focus-visible {
    color: #ededed;
  }

  &.active {
    text-decoration: underline;
  }
`;
