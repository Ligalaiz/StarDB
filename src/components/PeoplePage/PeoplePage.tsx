import React, { FC } from 'react';
import { List } from '@components/List';
import { Card } from '@components/Card';
import * as p from './PeoplePage.style';

const PeoplePage: FC = () => {
  return (
    <div css={p.peopleWrap} data-testid="peoplePage">
      <div css={p.itemWrap}>
        <List />
      </div>
      <div css={p.itemWrap}>
        <Card isRandom />
      </div>
    </div>
  );
};

export { PeoplePage };
