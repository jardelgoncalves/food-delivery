import styled, { css } from 'styled-components';

type ContainerProps = {
  rating?: number;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  padding: 10px 0;

  ${({ rating, theme }) => css`
    svg:nth-child(-n + ${rating}) {
      fill: ${theme.colors.context?.rating?.background};
    }
  `}
`;
