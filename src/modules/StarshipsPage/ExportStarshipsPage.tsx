import React, { FC, useEffect } from 'react';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { List } from '@components/List';
import { Card } from '@components/Card';
import * as s from './StarshipsPage.style';

const ExportStarshipsPage: FC = () => {
  const { data, currentData, currentID, loadingData } = useTypedUseSelector(
    (state) => state.data,
  );
  const { dataRequest } = useAction();

  let currentTarget = null;

  if (currentData) {
    const { craft_class, model, lenght, cost } = currentData;
    currentTarget = {
      name: model,
      craft_class,
      lenght,
      cost,
      id: currentID,
      type: 'starships',
    };
  }

  useEffect(() => {
    dataRequest(`starships/`);
  }, []);

  return (
    <div css={s.starshipsWrap} data-testid="starshipsPage">
      <div css={s.itemWrap}>
        <List data={data} isLoading={loadingData} />
      </div>
      <div css={s.itemWrap}>
        <Card data={currentTarget} isLoading={loadingData} />
      </div>
    </div>
  );
};

export { ExportStarshipsPage };
