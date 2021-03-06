import { css } from '@emotion/react';
import { color } from '@src/styles';

export const list = css`
  min-height: 410px;
  max-width: 485px;
  border: 1px solid ${color['grey-color-light-X1']};
  border-radius: 0.25rem;

  background-color: ${color['grey-color-light']};
  & li:first-of-type {
    border: none;
  }
`;

export const listHome = css`
  ${list}
  max-width: none;
`;

export const item = css`
  display: block;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid ${color['grey-color-light-X1']};

  color: ${color['white-color']};
  &:hover {
    background-color: ${color['grey-color-light-X1']};
  }
`;
