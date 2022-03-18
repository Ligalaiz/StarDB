import { css } from '@emotion/react';
import { color } from '@src/styles';

export const imageWrap = css`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-right: 1rem;
`;

export const image = css`
  border-radius: 10px;
`;

export const card = css`
  display: flex;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid ${color['grey-color-light-X1']};
  border-radius: 0.25rem;
  min-height: 172px;

  background-color: ${color['grey-color-light']};
`;

export const title = css`
  font-size: 20px;
  color: ${color['white-color']};
`;

export const parametrs = css`
  margin-left: 1rem;

  color: ${color['white-color']};
`;

export const item = css`
  padding: 7px 0;
`;

export const rotation = css`
  ${item}
  border-top: 1px solid ${color['grey-color-light-X1']};
  border-bottom: 1px solid ${color['grey-color-light-X1']};
`;

export const button = css`
  border: none;
  padding: 7px 14px;
  border-radius: 4px;

  color: white;
  font-size: 18px;

  background-color: ${color['red-color']};

  transition: all 0.2s linear;
  &:hover {
    background-color: ${color['red-color-light']};
  }
`;
