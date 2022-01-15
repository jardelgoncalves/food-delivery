import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 24px 0;
  margin-top: 40px;

  & > div {
    display: flex;
    align-items: center;
    gap: 16px;
    a {
      color: ${({ theme }) => theme.colors.brand.primary.main};
    }
  }
`;
