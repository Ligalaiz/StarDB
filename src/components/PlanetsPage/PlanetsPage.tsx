import React, { FC } from 'react';
import { List } from '@components/List';
import { Card } from '@components/Card';
import * as p from './PlanetsPage.style';

const PlanetsPage: FC = () => {
  return (
    <div css={p.planetsWrap} data-testid="planetsPage">
      <div css={p.itemWrap}>
        <List />
      </div>
      <div css={p.itemWrap}>
        <Card isRandom />
      </div>
    </div>
  );
};

export { PlanetsPage };
