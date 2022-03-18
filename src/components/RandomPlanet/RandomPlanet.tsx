import React, { FC } from 'react';
import * as r from './RandomPlanet.style';

const RandomPlanet: FC = () => {
  return (
    <div data-testid="randomPlanet" css={r.randomPlanet}>
      <div css={r.imageWrap}>
        <img
          src="https://via.placeholder.com/150"
          alt="title"
          data-testid="randomImage"
          css={r.image}
        />
      </div>
      <div>
        <p css={r.title}>Title</p>
        <ul className="reset-list" css={r.parametrs}>
          <li css={r.item}>Population </li>
          <li css={r.rotation}>Rotation </li>
          <li css={r.item}>Diametr </li>
        </ul>
      </div>
    </div>
  );
};

export { RandomPlanet };
