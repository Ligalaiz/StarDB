import { css } from '@emotion/react';
import { color } from '@src/styles';

export const header = css`
  display: flex;
  gap: 0.2rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

export const nav = css`
  display: flex;
`;

export const navLink = css`
  display: block;
  padding: 7px 14px;
  border-radius: 3px;

  color: ${color['green-color-light']};
  font-weight: 600;

  transition: all 0.2s linear;

  &:hover {
    background-color: ${color['grey-color-light']};
  }
`;

export const logo = css`
  margin-right: 30px;

  color: ${color['white-color']};
  font-size: 26px;

  &:hover {
    color: ${color['green-color-light']};
  }
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