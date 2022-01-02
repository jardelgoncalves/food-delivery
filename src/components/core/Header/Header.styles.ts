import styled, { css } from 'styled-components';

export const Container = styled.header`
  max-width: ${({ theme }) => theme.sizes.viewport.width};
  width: 100%;
  height: ${({ theme }) => theme.sizes.header.height};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      padding: 0 1rem;
    }
  `}

  img {
    height: 40px;
    width: auto;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 4px;
    align-items: center;
  }
`;

type BagButtonProps = {
  hasItem?: boolean;
};

export const BagButton = styled.button<BagButtonProps>`
  border: none;
  background-color: transparent;
  position: relative;

  ${({ hasItem, theme }) =>
    hasItem &&
    css`
      &::after {
        content: '';
        position: absolute;
        right: -2px;
        top: 0;
        height: 12px;
        width: 12px;
        border-radius: 12px;
        background-color: ${theme.colors.brand.primary.main};
      }
    `}
`;
