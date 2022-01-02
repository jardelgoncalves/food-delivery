import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.grayscale.offWhite};
    transition: all 0.2s;
    height: 100vh;
  }

  body, input, select, textarea, button {
    font-family: ${({ theme }) => theme.typography.family.secondary};
    color: ${({ theme }) => theme.colors.grayscale.greyDark.main};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.family.primary};
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  button {
    appearance: none;
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    line-height: normal;
  }

  [disabled] {
    opacity: 0.2;
    pointer-events: none;
    cursor: default;
  }

  button:focus,
  input:focus {
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }


  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.lg}) {
      html {
        font-size: 93.75%;
      }
    }
    @media (max-width: ${theme.breakpoints.md}) {
      html {
        font-size: 97.5%;
      }
    }
  `}

`;
