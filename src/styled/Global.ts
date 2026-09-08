import { createGlobalStyle } from "styled-components";
import { Reset } from "./Mixins";

export const GlobalStyle = createGlobalStyle`
    body {
        ${Reset};
        font-family: 'Open Sans', Arial, Verdana, sans-serif;
        font-size: 1rem;
        color: #333333;
        
        &.dark-mode {   
            background-color: ${({ theme }) => theme.colors.dark.background};
            color: ${({ theme }) => theme.colors.dark.text};
        }
    }

    main {
            
    }

    h1 {
        display: flex;
        height: 80px;
        align-items: center;
        font-family: 'Oswald', sans-serif;
        font-size: 1.6rem;
        text-transform: uppercase;
        margin-top: 0;
    }

    h2 {
        font-family: 'Open Sans', Arial, Verdana, sans-serif;
        font-size: 1.2rem;
    }
`;
