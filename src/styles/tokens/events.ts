import { css } from 'styled-components';

export const events = {
  focus: () => css`
    &:focus {
      box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }
  `,
} as const;
