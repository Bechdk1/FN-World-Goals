import styled from "styled-components";
import { Container } from "../../components/Container/Container";

export const GoalListStyled = styled(Container)`
  background-color: ${(props) => props.theme.colors.grey};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  padding: 1rem;

  a {
    aspect-ratio: 1/1;
    min-width: 0;
    min-height: 0;
    text-decoration: none;
  }

  a:hover {
    transform: scale(0.95), brightness(2);
  }

  img {
    width: 100%;
  }
`;
