import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const setActiveStyle = (hasBackground = false) => css`
  ${({ theme }) => css`
    color: ${theme.colors.brand.primary.main};
    ${hasBackground &&
    `background-color: ${`${rgba(theme.colors.brand.primary.main, 0.05)}`}`};
  `}
`;

export const Container = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: ${({ theme }) => theme.sizes.header.height};
  z-index: ${({ theme }) => theme.layers.header};
  backdrop-filter: blur(20px);

  nav {
    max-width: ${({ theme }) => theme.sizes.viewport.width};
    width: 100%;
    height: ${({ theme }) => theme.sizes.header.height};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      padding: 0 1rem;

      nav ul {
        display: none;
      }
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

    li a {
      display: inline-flex;
      padding: 10px 20px;
      font-weight: 400;
      font-family: ${({ theme }) => theme.typography.family.primary};
      color: ${({ theme }) => theme.colors.brand.primary.main};
      background-color: transparent;
      color: ${({ theme }) => theme.colors.grayscale.dark.main};
      font-weight: 600;

      border-radius: 20px;
      transition: all 0.2s;

      &:not(.--active):hover {
        ${setActiveStyle()};
      }

      &.--active {
        ${setActiveStyle(true)};
      }
      ${({ theme }) => theme.events.focus()};
    }
  }
`;

type BagButtonProps = {
  hasItem?: boolean;
};

export const BagButton = styled.button<BagButtonProps>`
  border: none;
  background-color: transparent;
  position: relative;
`;

export const NotificationItem = styled.div`
  position: absolute;
  right: -6px;
  top: -4px;
  height: 16px;
  width: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.brand.primary.main};
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grayscale.offWhite.main};
`;
