import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 796px;
  width: 100%;
  align-items: center;
  margin: 100px auto;
  padding: 0 16px;

  & > h1 {
    font-size: ${({ theme }) => theme.typography.size['5xl']};
    line-height: 59px;
    margin-bottom: 24px;
  }

  & > h1 {
    font-weight: 900;
    text-align: center;
  }

  p {
    line-height: 26px;
    & + p {
      margin-top: 16px;
    }
  }
`;
