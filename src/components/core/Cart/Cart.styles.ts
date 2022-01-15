import { rgba } from 'polished';
import styled from 'styled-components';

type ContainerProps = {
  open?: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) =>
    rgba(theme.colors.grayscale.offWhite.main, 0.9)};
  transition: transform 0.2s;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
  z-index: ${({ theme }) => theme.layers.cart};
`;

export const Bag = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.offWhite.main};
  display: grid;
  grid-template-rows: 60px 1fr 60px;
`;

export const HeaderBag = styled.header`
  background-color: ${({ theme }) => theme.colors.grayscale.greyVeryLight.main};
  height: 60px;
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;

  span {
    font-family: ${({ theme }) => theme.typography.family.primary};
    color: ${({ theme }) => theme.colors.grayscale.dark.main};

    font-weight: bold;
    margin-left: 40px;
  }

  button {
    transition: color 0.2s;
    &:hover {
      color: ${({ theme }) => theme.colors.brand.primary.main};
    }
  }
`;

export const ContentBag = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0;
`;

export const FooterBag = styled.footer`
  background-color: ${({ theme }) => theme.colors.brand.tertiary.main};
  height: 60px;
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.grayscale.offWhite.main};
    font-size: ${({ theme }) => theme.typography.size.lg};
  }
`;

export const Empty = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.grayscale.greyLight};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;
