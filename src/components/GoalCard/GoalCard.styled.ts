import styled from "styled-components";

export const GoalCardStyled = styled.li<{ color: string }>`
  background-color: #${(props) => props.color};
  color: white;
  aspect-ratio: 1 / 1;
  padding: 0.75rem;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;

  div:first-child {
    font-family: "Oswald", sans-serif;
    font-size: 3rem;
    font-weight: normal;
    line-height: 1;
    text-align: center;
  }

  div:nth-child(2) {
    padding-left: 0.5rem;
    padding-top: 0.2rem;
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
    list-style: none;
    font-size: 1.3rem;
    text-align: left;
    font-weight: normal;
    line-height: 1;
    justify-content: center;
  }

  div:nth-child(3) {
    grid-column: 1 / 3;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 55%;
      height: 55%;
      fill: white;
      aspect-ratio: 1/1;
    }
  }
`;
