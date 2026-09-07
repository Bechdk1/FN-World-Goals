import { SectionWrapperStyled } from "./SectionWrapper.styled";
import type { ContentWrapperProps } from "../types/types";
import { Container } from "../components/Container/Container";

export const SectionWrapper = ({
  pagetitle,
  children,
}: ContentWrapperProps) => {
  document.title = pagetitle;

  return (
    <SectionWrapperStyled>
      <Container className="greybar">
        <Container className="center">
          <h1>{pagetitle}</h1>
        </Container>
      </Container>
      <Container className="center">{children}</Container>
    </SectionWrapperStyled>
  );
};
