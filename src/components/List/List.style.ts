import { css } from '@emotion/react';
import { color } from '@src/styles';

export const list = css`
  border: 1px solid ${color['grey-color-light-X1']};
  border-radius: 0.25rem;

  background-color: ${color['grey-color-light']};
  & li:first-of-type {
    border: none;
  }
`;

export const item = css`
  border-top: 1px solid ${color['grey-color-light-X1']};
`;

export const link = css`
  display: block;
  padding: 0.75rem 1.25rem;

  color: ${color['white-color']};
`;
