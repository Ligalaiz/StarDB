import React, { FC, useEffect } from 'react';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { List } from '@components/List';
import { Card } from '@components/Card';
import * as p from './PlanetsPage.style';

const ExportPlanetPage: FC = () => {
  const { data, currentData, currentID, loadingData } = useTypedUseSelector(
    (state) => state.data,
  );
  const { dataRequest } = useAction();

  let currentTarget = null;

  if (currentData) {
    const { name, pupulation, rotation_period, diameter } = currentData;
    currentTarget = {
      name,
      pupulation,
      rotation_period,
      diameter,
      id: currentID,
      type: 'planets',
    };
  }

  useEffect(() => {
    dataRequest(`planets/`);
  }, []);

  return (
    <div css={p.planetsWrap} data-testid="planetsPage">
      <div css={p.itemWrap}>
        <List data={data} isLoading={loadingData} />
      </div>
      <div css={p.itemWrap}>
        <Card data={currentTarget} isLoading={loadingData} />
      </div>
    </div>
  );
};

export { ExportPlanetPage };
