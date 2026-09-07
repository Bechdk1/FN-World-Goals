import styled from "styled-components";

export const ButtonStyled = styled.button`
  align-self: flex-start;
  padding: 0.5rem 1.5rem;
  border: none;
  cursor: pointer;
  font-family: "Oswald", sans-serif;
  font-size: 1rem;
  color: #ffffff;
  background-color: #03689c;
  transition: background-color 120ms ease;

  &:hover {
    background-color: #2bbbde;
  }
`;
