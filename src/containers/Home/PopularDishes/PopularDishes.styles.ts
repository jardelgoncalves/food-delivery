import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 100px;

  & > h2 {
    font-size: ${({ theme }) => theme.typography.size['1xl']};
    line-height: 34px;
    color: ${({ theme }) => theme.colors.brand.primary.main};
  }

  & > h3 {
    font-size: ${({ theme }) => theme.typography.size['5xl']};
    line-height: 59px;
    margin-bottom: 24px;
  }

  & > h2,
  & > h3 {
    font-weight: 900;
    text-align: center;
  }
`;
