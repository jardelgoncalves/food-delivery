import { rgba } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1240px;
  width: 100%;
  align-items: center;
  margin: 100px auto;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${({ theme }) =>
      rgba(theme.colors.grayscale.dark.main, 0.7)};
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
  `}
`;

export const Content = styled.div`
  padding: 32px 50px;
  background-color: ${({ theme }) => theme.colors.brand.primary.main};
  text-align: center;
  border-radius: 15px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 530px;
  width: 100%;
  z-index: 1;

  h2,
  p,
  a {
    font-weight: 600;
    font-family: ${({ theme }) => theme.typography.family.primary};
    color: ${({ theme }) => theme.colors.grayscale.offWhite.main};
    font-size: ${({ theme }) => theme.typography.size.lg};
  }

  p {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;
