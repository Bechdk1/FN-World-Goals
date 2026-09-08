import { Header } from "../../components/Header/Header";
import { Li } from "../../components/Lists/List";
import { headerLinks } from "../../components/Navbar/NavLinks";
import logo from "../../assets/Images/Additional/Logo.png";
import {
  HeaderLogo,
  HeaderNav,
  HeaderNavLink,
  HeaderNavList,
} from "./HeaderModule.styled";
import { Container } from "../../components/Container/Container";
import { ThemeToggleButton } from "../../components/Button/ThemeToggleButton";

export const HeaderModule = () => {
  return (
    <Header>
      <Container className="bluebar" />
      <Container className="headerDiv">
        <HeaderLogo src={logo} alt="FN Verdensmål" />
        <HeaderNav>
          <HeaderNavList>
            {headerLinks.map(({ to, label }) => (
              <Li key={to}>
                <HeaderNavLink to={to}>{label}</HeaderNavLink>
              </Li>
            ))}
          </HeaderNavList>
        </HeaderNav>
        <ThemeToggleButton />
      </Container>
    </Header>
  );
};
