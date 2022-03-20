import { css } from '@emotion/react';
import { color } from '@src/styles';

export const btn = css`
  border: none;
  border-radius: 3px;
  padding: 7px 14px;

  color: ${color['white-color']};

  transition: all 0.2s linear;

  background-color: ${color['blue-color-light']};

  cursor: pointer;
  &:hover {
    background-color: ${color['blue-color-light-X1']};
  }
`;

export const title = css`
  margin-bottom: 1rem;
`;
