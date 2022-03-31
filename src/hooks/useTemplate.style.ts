import { css } from '@emotion/react';
import { color } from '@src/styles';

export const peopleWrap = css`
  display: flex;
  gap: 1rem;
`;

export const itemWrap = css`
  width: 50%;
`;

export const itemWrapHome = css`
  width: 100%;
`;

export const itemWrapDetails = css`
  width: 100%;
`;

export const btn = css`
  border: none;
  border-radius: 3px;
  padding: 7px 14px;

  color: ${color['white-color']};

  transition: all 0.2s linear;

  background-color: ${color['blue-color-light']};

  &:hover {
    background-color: ${color['blue-color-light-X1']};
  }
`;
