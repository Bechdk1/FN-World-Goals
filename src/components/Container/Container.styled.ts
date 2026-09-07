import styled, { css, type RuleSet } from "styled-components";
import type { ContainerTag } from "../../types/types";

type ContainerStyleProps = { $color?: string };

const byTag: Record<ContainerTag, RuleSet<ContainerStyleProps>> = {
  div: css<ContainerStyleProps>`
    margin: auto auto;
    padding: 0.6rem 0%;
    &.headerDiv {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      margin-inline: auto;
    }
    &.bluebar {
      background-color: ${(props) => props.theme.colors.primary};
      width: 100%;
      height: 0.8rem;
    }
    &.greybar {
      background-color: ${(props) => props.theme.colors.grey};
      width: 100%;
      margin: auto;
    }
    &.center {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      margin-inline: auto;
      h1 {
        width: 100%;
        margin: 0;
      }
    }
  `,
  section: css`
    max-width: 1200px;
    padding-block: 4rem;
  `,
  fieldset: css`
    border: none;
  `,

  article: css`
    h2 {
      font-size: 1.15vw;
    }

    h3 {
      font-size: 1.05vw;
      font-style: italic;
    }

    p {
      font-size: 1vw;
    }
  `,
  main: css`
    display: block;
    width: 100%;
  `,

  figure: css``,
};

export const ContainerStyled = styled.div<
  { $innerHTML?: ContainerTag } & ContainerStyleProps
>`
  margin: auto;
  padding: 0.6rem 0;

  ${({ $innerHTML = "div" }) => byTag[$innerHTML]}
`;
