import styled, { css } from 'styled-components';
import { rgba } from 'polished';

type ContainerProps = {
  isActive?: boolean;
};

const setActiveStyle = (hasBackground = false) => css`
  ${({ theme }) => css`
    color: ${theme.colors.brand.primary.main};
    ${hasBackground &&
    `background-color: ${`${rgba(theme.colors.brand.primary.main, 0.05)}`}`};
  `}
`;

export const Container = styled.a<ContainerProps>`
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

  &:hover {
    ${({ isActive }) => !isActive && setActiveStyle()};
  }

  ${({ isActive }) => isActive && setActiveStyle(true)};
  ${({ theme }) => theme.events.focus()};
`;
