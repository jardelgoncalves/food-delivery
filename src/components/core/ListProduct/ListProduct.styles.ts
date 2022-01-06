import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: ${({ theme }) => theme.sizes.viewport.width};
  width: 100%;
  margin-top: 64px;
  gap: 36px;
`;
