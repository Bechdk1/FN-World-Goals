import styled from "styled-components";

export const InputStyled = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ededed;
  font-family: "Open Sans", Arial, Verdana, sans-serif;
  font-size: 1rem;
  color: inherit;
  background-color: #ffffff;
  transition: border-color 120ms ease;

  &:focus-visible {
    outline: none;
    border-color: #2bbbde;
  }
`;
