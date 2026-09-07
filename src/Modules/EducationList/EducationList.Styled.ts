import styled from "styled-components";

export const EducationListStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors["secondary"]};
    padding: 3rem;
  }
`;
