import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  margin-top: 100px;

  & > h1 {
    font-size: ${({ theme }) => theme.typography.size['5xl']};
    line-height: 59px;
    margin-bottom: 24px;
    font-weight: 900;
    text-align: center;
  }
`;

export const Content = styled.div`
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
