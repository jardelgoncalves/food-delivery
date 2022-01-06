import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  user-select: none;
`;

type ItemProps = {
  isActive?: boolean;
};

export const Item = styled.button<ItemProps>`
  height: 54px;
  width: 72px;
  border-radius: 8px;
  transition: filter 0.2s;
  filter: ${({ isActive }) => (isActive ? 'saturate(100%)' : 'saturate(0%)')};

  img {
    height: 54px;
    width: 72px;
    border-radius: 8px;
    object-fit: cover;
  }

  &:focus {
    box-shadow: none;
  }
`;
