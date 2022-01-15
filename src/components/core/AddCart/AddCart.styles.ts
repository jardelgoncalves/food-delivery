import styled from 'styled-components';

export const Container = styled.button`
  min-height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-family: ${({ theme }) => theme.typography.family.primary};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grayscale.offWhite.main};
  background-color: ${({ theme }) => theme.colors.brand.primary.main};
  border-radius: 4px;
  border: none;
  transition: filter 0.2s;

  svg {
    margin-left: 6px;
  }

  &:hover {
    filter: brightness(0.85);
  }
`;
