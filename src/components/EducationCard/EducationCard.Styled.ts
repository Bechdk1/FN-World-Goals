import styled from "styled-components";

export const EducationCardStyled = styled.div<{ $bgColor: string }>`
  background-color: #${(props) => props.$bgColor};
  width: 100%;
  height: 100%;
`;
