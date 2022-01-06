import styled, { css } from 'styled-components';

import IntroBackground from 'assets/intro.png';
import { rgba } from 'polished';

export const Intro = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${IntroBackground});

  h1 {
    font-weight: 900;
    font-size: 60px;

    & > span {
      color: ${({ theme }) => theme.colors.brand.primary.main};
    }
  }

  p {
    line-height: 29px;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      height: auto;
      h1 {
        font-size: 48px;
      }
    }
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
  max-width: ${({ theme }) => theme.sizes.viewport.width};
  width: 100%;
  height: 100%;
  margin: 0 auto;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Column = styled.div`
  display: grid;
  align-content: center;
  margin-top: 64px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      width: 100%;

      &.content {
        margin-top: 140px;
        padding: 0 16px;
      }
    }
  `}
`;

export const ImageContainer = styled.div`
  position: relative;
  padding: 0 16px;
  width: 100%;
  text-align: center;

  img {
    width: 420px;
    height: auto;
  }

  svg {
    height: 70px;
    width: 70px;
  }

  svg:first-child {
    position: absolute;
    top: 20px;
    left: 10px;
    height: 80px;
    width: 80px;
  }

  svg:nth-child(2) {
    position: absolute;
    top: 60px;
    right: 40px;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      img {
        width: 100%;
        height: auto;
      }

      svg:first-child {
        top: 0;
        left: 0;
      }

      svg:nth-child(2) {
        top: 0;
        right: 10px;
      }
    }
  `}
`;

export const Tag = styled.span`
  display: inline;
  height: 54px;
  width: 216px;
  border-radius: 54px;
  line-height: 54px;
  padding: 0 28px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.brand.primary.main};
  background-color: ${({ theme }) =>
    rgba(theme.colors.brand.primary.main, 0.1)};
`;
