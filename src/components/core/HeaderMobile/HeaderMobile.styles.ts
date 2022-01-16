import styled, { css } from 'styled-components';

export const Container = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.offWhite.main};
  display: none;
  grid-template-columns: repeat(4, 25%);
  z-index: ${({ theme }) => theme.layers.header};
  border-top: 1px solid ${({ theme }) => theme.colors.grayscale.greyLight.main};

  a {
    display: inline-grid;
    height: 100%;
    color: ${({ theme }) => theme.colors.grayscale.greyDark.main};
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      display: grid;
    }
  `}
`;

type ItemProps = {
  isActive?: boolean;
};

export const Item = styled.span<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  ${({ theme, isActive }) =>
    isActive &&
    css`
      color: ${theme.colors.brand.primary.main};
      &::after {
        content: '';
        position: absolute;
        top: -1px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.brand.primary.main};
      }
    `}
`;
