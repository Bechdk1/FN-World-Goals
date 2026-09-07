import { Footer } from "../../components/Footer/Footer";
import { Li } from "../../components/Lists/List";
import { footerLinks } from "../../components/Navbar/NavLinks";
import { FooterList, FooterNav, FooterNavLink } from "./FooterModule.styled";

export const FooterModule = () => {
  return (
    <Footer>
      <FooterNav>
        <FooterList>
          {footerLinks.map(({ to, label }) => (
            <Li key={to}>
              <FooterNavLink to={to}>{label}</FooterNavLink>
            </Li>
          ))}
        </FooterList>
      </FooterNav>
    </Footer>
  );
};
