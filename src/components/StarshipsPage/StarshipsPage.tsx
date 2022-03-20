import React, { FC } from 'react';
import { List } from '@components/List';
import { Card } from '@components/Card';
import * as s from './StarshipsPage.style';

const StarshipsPage: FC = () => {
  return (
    <div css={s.starshipsWrap} data-testid="starshipsPage">
      <div css={s.itemWrap}>
        <List />
      </div>
      <div css={s.itemWrap}>
        <Card isRandom />
      </div>
    </div>
  );
};

export { StarshipsPage };
