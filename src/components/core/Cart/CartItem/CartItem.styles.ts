import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  gap: 8px;

  & > div {
    display: flex;
    gap: 12px;

    h3 {
      font-size: ${({ theme }) => theme.typography.size.base};
    }

    h3 + p {
      font-size: 12px;
      margin: 4px 0;
    }

    img {
      width: 80px;
      height: auto;
    }

    span {
      font-weight: bold;
    }

    strong {
      color: ${({ theme }) => theme.colors.brand.primary.main};
    }

    .count {
      display: flex;
      align-items: center;
      font-weight: bold;
      gap: 8px;

      button {
        border: 2px solid ${({ theme }) => theme.colors.brand.secondary.main};
        height: 26px;
        width: 26px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.colors.brand.secondary.main};
      }
    }

    button.remove-btn {
      font-size: ${({ theme }) => theme.typography.size.sm};
      color: ${({ theme }) => theme.colors.feedback.error.main};
    }
  }

  .column {
    flex-direction: column;
  }

  & + & {
    border-top: 1px solid
      ${({ theme }) => theme.colors.grayscale.greyLight.main};
  }
`;
