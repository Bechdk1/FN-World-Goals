import { Container } from "../../components/Container/Container";
import { SectionWrapper } from "../../ContentWrappers/SectionWrapper";
import { EducationListModule } from "../../Modules/EducationList/EducationList";

export const EducationPage = () => {
  return (
    <SectionWrapper pagetitle="Education">
      <Container className="center">
        <EducationListModule />
      </Container>
    </SectionWrapper>
  );
};
