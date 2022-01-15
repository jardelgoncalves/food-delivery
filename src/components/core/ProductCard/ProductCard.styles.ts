import styled from 'styled-components';

export const Container = styled.div`
  max-width: 260px;
  width: 100%;
  height: 394px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.grayscale.offWhite.main};
  border: 2px solid ${({ theme }) => theme.colors.grayscale.greyLight.main};
  border-radius: 15px;

  img {
    width: 170px;
    height: 173px;
    object-fit: cover;
    margin-bottom: 12px;
  }

  h3 {
    text-align: left;
    font-size: ${({ theme }) => theme.typography.size.md};
    width: 100%;
  }

  p {
    font-size: ${({ theme }) => theme.typography.size.sm};
    text-align: left;
    width: 100%;
  }
`;

export const Price = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-family: ${({ theme }) => theme.typography.family.primary};
  color: ${({ theme }) => theme.colors.grayscale.dark.main};
  font-weight: bold;
  padding: 0 0 8px 0;
  margin-top: auto;

  strong {
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.brand.primary.main};
  }
`;
