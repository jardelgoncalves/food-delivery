import styled, { css } from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.greyVeryLight.main};
  margin-top: 120px;
`;

export const Nav = styled.nav`
  max-width: ${({ theme }) => theme.sizes.viewport.width};
  width: 100%;
  margin: 0 auto;
  padding: 60px 0;

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    flex-wrap: wrap;

    ${({ theme }) => css`
      @media (max-width: ${theme.breakpoints.md}) {
        flex-direction: column;
        padding-left: 16px;
        padding-right: 16px;

        li + li {
          margin-top: 40px;
        }

        h2 {
          font-size: ${theme.typography.size.lg};
        }
      }
    `}

    p,
    a {
      color: ${({ theme }) => theme.colors.grayscale.greyDark.main};
    }

    h2 {
      color: ${({ theme }) => theme.colors.brand.primary.main};
      font-size: ${({ theme }) => theme.typography.size.base};
    }
  }
`;

export const BrandSection = styled.div`
  max-width: 220px;
  width: 100%;
  img {
    width: 120px;
    height: auto;
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      max-width: 100%;
    }
  `}
`;

export const FeatureSection = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin-top: 24px;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.brand.primary.main};
    }
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      a {
        margin-top: 12px;
      }
    }
  `}
`;

export const GetInTouch = styled.div`
  max-width: 275px;
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
    margin-top: 24px;

    gap: 16px;
    svg {
      color: ${({ theme }) => theme.colors.brand.primary.main};
    }
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      max-width: 100%;
      & > div {
        margin-top: 16px;
      }
    }
  `}
`;

export const SocialSection = styled.div`
  padding: 24px 0;

  & > div {
    display: flex;
    align-items: center;
    gap: 16px;
    a {
      color: ${({ theme }) => theme.colors.brand.primary.main};
    }
  }
`;

export const MadeIn = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.grayscale.offWhite.main};
  background-color: ${({ theme }) => theme.colors.brand.primary.main};
  height: 80px;
  line-height: 80px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      line-height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 24px;
    }
  `}
`;
