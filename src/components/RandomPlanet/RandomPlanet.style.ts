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

export const randomPlanet = css`
  display: flex;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid ${color['grey-color-light']};
  border-radius: 0.25rem;
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
  border-top: 1px solid ${color['grey-color-light']};
  border-bottom: 1px solid ${color['grey-color-light']};
`;
